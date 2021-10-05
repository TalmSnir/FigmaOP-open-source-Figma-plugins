figma.showUI(__html__, { width: 350, height: 450 });
const ALLOWED_TYPES = ['FRAME', 'COMPONENT'];
let notificationHandler;

const handleMessage = {
  messages: {
    warning: {
      noSelection: '✘ select at least one frame or component',
      notAllowedSelection: '✘ select only frames or components',
      alreadyFlattened: '✘ all selections are seemed to be flatten',
      reject: '✘ something went wrong please run again',
    },
    success: {
      iconsFlattened: '✔ icons have been flattened successfully',
      iconsResize: '✔ icons have been resized successfully',
    },
    post: {
      enable: 'enable',
      disable: 'disable',
      loadData: 'loadData',
    },
  },

  showNotification(state, message) {
    notificationHandler ? notificationHandler.cancel() : '';
    notificationHandler = figma.notify(this.messages[state][message], {
      timeout: 2000,
    });
  },
  postMessage(msg, data) {
    figma.ui.postMessage({ msg, data });
  },
  receiveMessage({ type, data }) {
    const actions = {
      flattenSelection: () => iconsFunctions.flattenSelectedIcons(selections),
      flattenAll: () => iconsFunctions.flattenAllIcons(),
      resize: () => iconsFunctions.resizeIcons(data, selections),
      addSizeButton: () => iconsFunctions.addResizeButton(data),
      removeResizeButton: () => iconsFunctions.removeResizeButton(data),
      setIsEditMode: () => {
        isEditMode = data;
      },
      duplicate: () => iconsFunctions.duplicateIcons(data),
      preserveStrokeWeight: () =>
        (preserveStrokeWeight = !preserveStrokeWeight),
    };

    actions[type]();
  },
};

figma.ui.onmessage = msg => {
  const { type, data } = msg;
  handleMessage.receiveMessage({ type, data });
};
/*=============================================
=            Icons Functions            =
=============================================*/

const iconsFunctions = {
  flattenSelectedIcons(selections) {
    const unFlattenedSelections = selections.filter(
      selection =>
        selection.children.length > 1 ||
        (selection.children.length === 1 &&
          selection.children[0].type !== 'VECTOR')
    );
    if (unFlattenedSelections.length === 0) {
      handleMessage.showNotification('warning', 'alreadyFlattened');
    } else {
      unFlattenedSelections.forEach(selection =>
        figma.flatten(selection.children)
      );
      handleMessage.showNotification('success', 'iconsFlattened');
    }
  },
  flattenAllIcons() {
    const iconsInPage = [];
    figma.currentPage.children.forEach(child => {
      if (ALLOWED_TYPES.includes(child.type)) {
        iconsInPage.push(child);
      } else if (child.type === 'COMPONENT_SET') {
        child.children.forEach(variant => iconsInPage.push(variant));
      }
    });
    this.flattenSelectedIcons(iconsInPage);
  },
  computeStrokeWeight(node, newWidth, currentWidth) {
    const { strokeWeight } = node;

    return strokeWeight * (newWidth / currentWidth);
  },
  resizeIcons(data, selections) {
    let { frameSize, iconMaxWidth } = data;
    frameSize = parseInt(frameSize);
    iconMaxWidth = parseInt(iconMaxWidth);
    selections.forEach(node => {
      let group;
      if (node.children.length > 1) {
        group = figma.group(node.children, node);
      } else {
        group = node.children[0];
      }
      const notGroupType = ['FRAME', 'GROUP'].includes(group.type)
        ? group.findAll(child => child.type !== 'GROUP')
        : [group];

      notGroupType.forEach(child => {
        child.constraints = { horizontal: 'SCALE', vertical: 'SCALE' };
        child.strokeWeight = preserveStrokeWeight
          ? child.strokeWeight
          : this.computeStrokeWeight(child, iconMaxWidth, group.width);
      });

      node.resize(frameSize, frameSize);

      group.constrainProportions = true;
      group.resize(iconMaxWidth, group.height * (iconMaxWidth / group.width));
      [group.x, group.y] = [
        (node.width - group.width) / 2,
        (node.height - group.height) / 2,
      ];
    });
  },
  addResizeButton(data) {
    sizes.push(data);
  },
  removeResizeButton(key) {
    sizes.splice(key, 1);
  },
  duplicateIcons(sizes) {
    const offsetX = 32;
    const padding = 8;

    if (sizes.length !== 0) {
      sizes.forEach((iconMaxWidth, id) => {
        const selectionsCopies = selections.map(selection => {
          const clone = selection.clone();
          clone.x =
            selection.absoluteTransform[0][2] +
            selection.width * (id + 1) +
            offsetX;
          clone.y = selection.absoluteTransform[1][2];
          return clone;
        });
        const frameSize = iconMaxWidth + padding;

        this.resizeIcons({ frameSize, iconMaxWidth }, selectionsCopies);
      });
    }
  },
};

/*=============================================
=            Selection Function            =
=============================================*/

function checkSelections() {
  if (selections.length === 0) {
    !isEditMode && handleMessage.showNotification('warning', 'noSelection');
  } else if (
    selections.find(selection => !ALLOWED_TYPES.includes(selection.type))
  ) {
    !isEditMode &&
      handleMessage.showNotification('warning', 'notAllowedSelection');
  } else {
    return true;
  }
  return false;
}
function handleSelectionChange() {
  selections = figma.currentPage.selection;
  //if the selections are of type FRAME|| COMPONENT will run the plugin's desired functionality
  if (checkSelections()) {
    handleMessage.postMessage('enable');
  } else {
    handleMessage.postMessage('disable');
  }
}

/*=============================================
=            Local storage Functions            =
=============================================*/
const handleLocalStorage = {
  async saveToStorage(key, data) {
    try {
      await figma.clientStorage.setAsync(key, data);
    } catch (err) {
      console.log('in saveToStorage catch: ', err);
      handleMessage.showNotification('warning', 'reject');
    }
  },
  async getFromStorage(key) {
    try {
      const data = await figma.clientStorage.getAsync(key);
      return data;
    } catch (err) {
      console.log('in getFromStorage catch: ', err);
      handleMessage.showNotification('warning', 'reject');
    }
  },
};

/*=============================================
=            onEvent Functions            =
=============================================*/

async function onRun() {
  const data = await handleLocalStorage.getFromStorage('sizes');
  sizes = data ? data : InitialSizes;
  handleMessage.postMessage(handleMessage.messages.post.loadData, sizes);
  handleSelectionChange();
}
async function onClose() {
  await handleLocalStorage.saveToStorage('sizes', sizes);
}

/*=============================================
=            Variables and Events            =
=============================================*/

let selections = [];
let isEditMode = false;
let preserveStrokeWeight = true;
const InitialSizes = [
  { frameSize: 48, iconMaxWidth: 32 },
  { frameSize: 64, iconMaxWidth: 48 },
  { frameSize: 32, iconMaxWidth: 24 },
];
let sizes = [];

figma.on('selectionchange', handleSelectionChange);
figma.on('run', onRun);
figma.on('close', onClose);
