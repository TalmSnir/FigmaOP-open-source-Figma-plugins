import { useMessage, useLocalStorage } from './hooks';
import {
  handleSelections,
  createFrameNode,
  getNodeBoundingClientRect,
} from './utills';
figma.showUI(__html__, { width: 300, height: 500 });

const { postMessageToUI, showNotification } = useMessage();
const { getFromStorage, saveToStorage } = useLocalStorage();
figma.ui.onmessage = message => {
  const { msg, data } = message;

  const actions = {
    setComponentSetChildren: () => setComponentSetChildren(),
    createProperties: () => createProperties(msg, data),
    createFocusFrame: () => createFocusFrame(),
    setFocusFrame: () => setFocusFrame(data),
    newTemplate: () => updateTemplate(msg, data),
    updatedTemplate: () => updateTemplate(msg, data),
    deletedTemplate: () => updateTemplate(msg, data),
  };
  actions[msg]();
};
const initialData = [
  {
    name: 'Button',
    properties: 'hover, focus,disabled,primary,secondary,outline',
    id: 'Button-initial-data',
  },
  {
    name: 'Input',
    properties: 'hover, focus,disabled,with icon',
    id: 'input-initial-data',
  },
];
let propertiesTemplates;
let focusFrame = null;
let variants;
let focusFrameRemoved = false;
let selections, selectionsDescription;
const allowedTypes = ['COMPONENT_SET'];
function setComponentSetChildren() {
  variants = selections[0].children;

  postMessageToUI('componentSetChildren', variants.length);
}

function createProperties(msg, properties) {
  variants.forEach((variant, id) => {
    let propertiesString = [];
    for (const [key, value] of Object.entries(properties[id])) {
      propertiesString.push(`${key[0].toUpperCase() + key.slice(1)}=${value}`);
    }
    variant.name = propertiesString.join(',');
  });
  showNotification('success', msg);
}

function updateTemplate(msg, data) {
  propertiesTemplates = data;
  showNotification('success', msg);
}

function checkSelections() {
  [selections, selectionsDescription] = handleSelections({ allowedTypes });

  if (
    selectionsDescription.allowedTypes === false ||
    selectionsDescription.noSelection === true ||
    selectionsDescription.moreThanOne === true
  ) {
    postMessageToUI('disableSubmit', null);
  } else {
    postMessageToUI('allowSubmit', null);
  }
}
function createFocusFrame() {
  focusFrame = createFrameNode({
    name: 'FVP indicator',
    dashPattern: [10, 5],
    strokes: [
      {
        blendMode: 'NORMAL',
        color: {
          r: 0.9607843160629272,
          g: 0.1921568661928177,
          b: 0.7019608020782471,
        },
        opacity: 1,
        type: 'SOLID',
        visible: true,
      },
    ],
    fills: [],
  });
  focusFrameRemoved = false;
  setFocusFrame(0);
}
function setFocusFrame(id) {
  if (id === variants.length) {
    focusFrame.remove();
    focusFrameRemoved = true;
    focusFrame = null;
  } else {
    const node = variants[id];
    const padding = 16;
    const { absoluteX, absoluteY, height, width } =
      getNodeBoundingClientRect(node);
    focusFrame.resize(width + padding, height + padding);
    focusFrame.x = absoluteX - padding / 2;
    focusFrame.y = absoluteY - padding / 2;
  }
}

/*=============================================
=            Run & Close functions            =
=============================================*/

async function onRun() {
  const returnedData = await getFromStorage('propertiesTemplates');
  propertiesTemplates = returnedData ? returnedData : initialData;
  checkSelections();
  postMessageToUI('propertiesTemplates', propertiesTemplates);
}
async function onClose() {
  if (focusFrameRemoved === false && focusFrame !== null) focusFrame.remove();
  await saveToStorage('propertiesTemplates', propertiesTemplates);
}

/*=====  End of Run & Close functions    ======*/

figma.on('run', onRun);
figma.on('close', onClose);
figma.on('selectionchange', checkSelections);
