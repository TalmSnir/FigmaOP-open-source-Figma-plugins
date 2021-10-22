import { useMessage, useLocalStorage } from './hooks';
import { createTextNode, createAutoLayout } from './utills';
figma.showUI(__html__, { width: 300, height: 400 });

const { postMessageToUI, showNotification } = useMessage();
const { getFromStorage, saveToStorage } = useLocalStorage();
figma.ui.onmessage = message => {
  const { msg, data } = message;

  const actions = {
    deletePages: () => deletePages(msg, data),
    createPages: () => createPages(msg, data),
    createIndex: () => createIndex(msg),
    newTemplate: () => updateTemplate(msg, data),
    updatedTemplate: () => updateTemplate(msg, data),
    deletedTemplate: () => updateTemplate(msg, data),
  };
  actions[msg]();
};

let pages;
let templates;
function updateTemplate(msg, data) {
  templates = data;

  showNotification('success', msg);
}
async function createIndex(msg) {
  await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
  const indexFrame = figma.createFrame();
  indexFrame.name = 'Pages Index';
  createAutoLayout(indexFrame, {
    layoutMode: 'VERTICAL',
    primaryAxisSizingMode: 'AUTO',
    counterAxisSizingMode: 'AUTO',
    primaryAxisAlignItems: 'MIN',
    counterAxisAlignItems: 'MIN',
    itemSpacing: 32,
    padding: [16, 32, 16, 32],
  });

  const indexTitle = createTextNode({
    fontName: { family: 'Roboto', style: 'Regular' },
    characters: 'pages index',
    fontSize: 24,
  });

  indexFrame.appendChild(indexTitle);
  pages.forEach((page, id) => {
    const link = createTextNode({
      fontName: { family: 'Roboto', style: 'Regular' },
      characters: `${id + 1}. ${page.name}`,
      fontSize: 16,
      hyperlink: { type: 'NODE', value: page.id },
    });
    indexFrame.appendChild(link);
  });

  showNotification('success', msg);
}

function getPages() {
  pages = figma.root.children;
  const pagesNames = pages.map(page => page.name);
  postMessageToUI('pagesNames', pagesNames);
}

function createPages(msg, data) {
  data.forEach(page => {
    const newPage = figma.createPage();
    newPage.name = page;
  });
  getPages();
  showNotification('success', msg);
}
function deletePages(msg, data) {
  const pagesToDelete = pages.filter(page => data.includes(page.name));
  pages = pages.filter(page => !data.includes(page.name));

  //if the user wants to remove all the pages- there is a need to insert at least one page to the Document Node
  if (pages.length === 0) {
    const newPage = figma.createPage();
    newPage.name = 'new page';
    figma.currentPage = newPage;
  } else {
    figma.currentPage = pagesToDelete.includes(currentPage)
      ? pages[0]
      : currentPage;
  }
  while (pagesToDelete.length > 0) {
    const page = pagesToDelete.pop();
    page.remove();
  }

  getPages();
  showNotification('success', msg);
}
function updatePages() {
  currentPage = figma.currentPage;
  getPages();
}
/*=============================================
=            Run & Close functions            =
=============================================*/

async function onRun() {
  const returnedData = await getFromStorage('templates');
  templates = returnedData ? returnedData : [];

  getPages();
  postMessageToUI('templates', templates);
}
async function onClose() {
  await saveToStorage('templates', templates);
}

/*=====  End of Run & Close functions    ======*/

let currentPage = figma.currentPage;

figma.on('run', onRun);
figma.on('close', onClose);
figma.on('currentpagechange', updatePages);
