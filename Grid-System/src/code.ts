import { useMessage, useLocalStorage } from './hooks';
import {
  addLayoutGrid,
  getNodeBoundingClientRect,
  handleSelections,
} from './utills';
figma.showUI(__html__, { width: 300, height: 500 });

const { postMessageToUI, showNotification } = useMessage();
const { getFromStorage, saveToStorage } = useLocalStorage();
figma.ui.onmessage = message => {
  const { msg, data } = message;

  const actions = {
    createAutoGrids: () => createAutoGrids(msg),
    createSpecificGrid: () => createSpecificGrid(msg, data),
    hideAllGrids: () => hideOrShowAllGrids(msg),
    showAllGrids: () => hideOrShowAllGrids(msg),
    newTemplate: () => updateTemplate(msg, data),
    updatedTemplate: () => updateTemplate(msg, data),
    deletedTemplate: () => updateTemplate(msg, data),
  };
  actions[msg]();
};

let gridTemplates;
let selections, selectionsDescription;
const allowedTypes = ['FRAME'];
function hideOrShowAllGrids(msg) {
  const visibility = msg === 'showAllGrids' ? true : false;
  selections.forEach(selection => {
    const frames = selection.findAll(node => allowedTypes.includes(node.type));
    [...frames, selection].forEach(frame => {
      frame.layoutGrids = [...frame.layoutGrids].map(layout => {
        return { ...layout, visible: visibility };
      });
    });
  });
  showNotification('success', msg);
}
function updateTemplate(msg, data) {
  gridTemplates = data;
  showNotification('success', msg);
}
function createAutoGrids(msg) {
  selections.forEach(selection => {
    const { width } = getNodeBoundingClientRect(selection);

    const grids = gridTemplates.filter(grid => {
      return (
        parseInt(grid.minWidth) <= width && parseInt(grid.maxWidth) > width
      );
    });

    grids.forEach(grid => {
      addLayoutGrid(selection, cleanGridProps(grid));
    });
  });
  showNotification('success', msg);
}
function createSpecificGrid(msg, data) {
  let grid = gridTemplates.find(template => template.id === data);
  grid = cleanGridProps(grid);

  selections.forEach(selection => addLayoutGrid(selection, grid));
  showNotification('success', msg);
}
function cleanGridProps(data) {
  const types = {
    Center: 'CENTER',
    Stretch: 'STRETCH',
    Top: 'MIN',
    Left: 'MIN',
    Bottom: 'MAX',
    Right: 'MAX',
  };

  let gridProps;
  if (data.pattern === 'Grid') {
    gridProps = {
      pattern: 'GRID',
      sectionSize: parseInt(data.size),
      color: data.color,
    };
  } else {
    gridProps = {
      pattern: data.pattern.toUpperCase(),
      gutterSize: parseInt(data.gutter),
      count: data.count === 'Auto' ? Infinity : parseInt(data.count),
      alignment: types[data.alignment],
      color: data.color,
    };
    if (data.alignment !== 'Stretch' && data.alignment !== 'Center') {
      gridProps.sectionSize = parseInt(data.size);
      gridProps.offset = parseInt(data.offset);
    } else if (data.alignment === 'Stretch') {
      gridProps.offset = parseInt(data.offset);
    } else {
      gridProps.sectionSize = parseInt(data.size);
    }
  }
  return gridProps;
}
function checkSelections() {
  [selections, selectionsDescription] = handleSelections({ allowedTypes });
  if (
    selectionsDescription.allowedTypes === false ||
    selectionsDescription.noSelection === true
  ) {
    postMessageToUI('disableSubmit', null);
  } else {
    postMessageToUI('allowSubmit', null);
  }
}
/*=============================================
=            Run & Close functions            =
=============================================*/

async function onRun() {
  const returnedData = await getFromStorage('gridTemplates');
  gridTemplates = returnedData ? returnedData : [];
  checkSelections();
  postMessageToUI('gridTemplates', gridTemplates);
}
async function onClose() {
  await saveToStorage('gridTemplates', gridTemplates);
}

/*=====  End of Run & Close functions    ======*/

figma.on('run', onRun);
figma.on('close', onClose);
figma.on('selectionchange', checkSelections);
