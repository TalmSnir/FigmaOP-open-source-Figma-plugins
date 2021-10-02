figma.showUI(__html__, { width: 350, height: 250 });

const handleMessage = {
  messages: {
    noSelection: '✘ select at least one frame or component instance',
    notFrameSelection: '✘ select only frames or components instances',
    reject: '✘ something went wrong please run again',
    success: '✔ Layout Handoff ran successfully',
  },
  showNotification(type) {
    figma.notify(this.messages[type], { timeout: 2000 });
  },
};

//adds border to a frame: if it's the main frame-the border color will be purple and dashed else the border color will be red and solid.
function addBorder(frame, mainFrame = false) {
  frame.strokeAlign =
    frame.strokes.length === 0 ? 'OUTSIDE' : frame.strokeAlign;
  frame.strokes = frame.strokes.concat([
    {
      blendMode: 'NORMAL',
      color: mainFrame ? mainFrameColor : elementFrameColor,
      opacity: 1,
      type: 'SOLID',
      visible: true,
    },
  ]);

  mainFrame ? (frame.dashPattern = [24, 24]) : null;
  frame.strokeWeight = 4;
}
//converting colors from HEX to FigmaRGB
function webRGBToFigmaRGB(color) {
  const rgb = {};
  const namesRGB = ['r', 'g', 'b'];
  namesRGB.forEach((e, i) => {
    rgb[e] = color[i] / 255;
  });

  if (color[3] !== undefined) rgb['a'] = color[3];
  return rgb;
}

function hexToFigmaRGB(color) {
  color = color.toLowerCase();

  if (color[0] === '#') color = color.slice(1);

  const num = parseInt(color, 16);
  const rgb = [num >> 16, (num >> 8) & 255, num & 255];
  {
    return webRGBToFigmaRGB(rgb);
  }
}
//filters the children of the frame based on the the types[FRAME,INSTANCE]
function filterFrames(frame) {
  return frame.children.filter(
    node => node.type === 'FRAME' || node.type === 'INSTANCE'
  );
}
//sets the position of the frame relative to the PAGE-NODE.
function setPosition(node) {
  node.x = node.absoluteTransform[0][2] + node.width + 200;
  node.y = node.absoluteTransform[1][2];
}
//takes all the properties for a frame and creates a figma frame node
function createFrame({
  backgrounds,
  name,
  layoutMode,
  primaryAxisSizingMode,
  counterAxisSizingMode,
  primaryAxisAlignItems,
  counterAxisAlignItems,
  padding,
  itemSpacing,
}) {
  const frame = figma.createFrame();
  frame.backgrounds = backgrounds;
  frame.name = name;
  frame.layoutMode = layoutMode;
  frame.primaryAxisSizingMode = primaryAxisSizingMode;
  frame.counterAxisSizingMode = counterAxisSizingMode;
  frame.counterAxisAlignItems = counterAxisAlignItems;
  frame.counterAxisAlignItems = primaryAxisAlignItems;
  frame.paddingTop = padding;
  frame.paddingRight = padding;
  frame.paddingBottom = padding;
  frame.paddingLeft = padding;
  frame.itemSpacing = itemSpacing;
  return frame;
}

//creates container-the frame that will hold all the components from all the frames.
//then creates frame for each frame's components and append it to the container
//if in a frame there are children with type FRAME || VARIANT a text Node will be created with a matching message
function createComponentsFrame(frame, mainFrame) {
  const componentsFrame = createFrame({
    backgrounds: [],
    name: `ComponentsFrame ${frame.name}`,
    layoutMode: 'HORIZONTAL',
    primaryAxisSizingMode: 'AUTO',
    counterAxisSizingMode: 'AUTO',
    primaryAxisAlignItems: 'MIN',
    counterAxisAlignItems: 'CENTER',
    padding: 80,
    itemSpacing: 64,
  });
  const instances = frame.findAll(node => node.type === 'INSTANCE');
  if (instances.length > 0) {
    const instanceTracking = {};
    instances.forEach(instance => {
      if (instanceTracking[instance.mainComponent.id] === undefined) {
        instanceTracking[instance.mainComponent.id] = 1;
        instance.layoutAlign = 'INHERIT';
        instance.layoutGrow = 0;
        componentsFrame.appendChild(instance.clone());
        addBorder(componentsFrame);
      }
    });
  } else {
    const textNode = figma.createText();
    textNode.characters = 'no component instances in this frame';
    textNode.fontSize = 48;

    componentsFrame.appendChild(textNode);
  }
  mainFrame.appendChild(componentsFrame);
}
//creates the main frame that will contain all the components from all the selections.
function createMainFrame() {
  const mainFrame = createFrame({
    backgrounds: [],
    name: 'Components Frames',
    layoutMode: 'VERTICAL',
    primaryAxisSizingMode: 'AUTO',
    counterAxisSizingMode: 'AUTO',
    primaryAxisAlignItems: 'MIN',
    counterAxisAlignItems: 'MIN',
    padding: 80,
    itemSpacing: 120,
  });
  mainFrame.x =
    selections[0].absoluteTransform[0][2] + (selections[0].width + 200) * 4;
  mainFrame.y = selections[0].absoluteTransform[1][2];
  return mainFrame;
}
//adds borders to all the selections- traverse 3 depths into the frames
function addBordersToFrames(frame) {
  const oneBorderFrame = frame.clone();
  oneBorderFrame.x = frame.absoluteTransform[0][2];
  oneBorderFrame.y = frame.absoluteTransform[1][2];
  setPosition(oneBorderFrame);
  addBorder(oneBorderFrame, true);
  filterFrames(oneBorderFrame).forEach(frame => {
    addBorder(frame);
  });
  const twoBorderFrame = oneBorderFrame.clone();
  setPosition(twoBorderFrame);
  filterFrames(twoBorderFrame).forEach(frame => {
    filterFrames(frame).forEach(childFrame => addBorder(childFrame));
  });
  const threeBorderFrame = twoBorderFrame.clone();
  setPosition(threeBorderFrame);
  filterFrames(threeBorderFrame).forEach(frame => {
    filterFrames(frame).forEach(childFrame =>
      filterFrames(childFrame).forEach(frame => addBorder(frame))
    );
  });
}
//checks if the selection is of type FRAME|| NODE-if false will show an appropriate message and will close the plugin ,else will return true.
function checkSelections() {
  if (selections.length === 0) {
    handleMessage.showNotification('noSelection');
  } else if (
    selections.find(
      selection => selection.type !== 'FRAME' && selection.type !== 'INSTANCE'
    )
  ) {
    handleMessage.showNotification('notFrameSelection');
  } else {
    return true;
  }
  return false;
}

//fetches font and then execute all the relevant functions for all the selections.
async function main() {
  try {
    await figma.loadFontAsync({
      family: 'Roboto',
      style: 'Regular',
    });

    const mainFrame = createMainFrame();
    selections.forEach(selection => {
      addBordersToFrames(selection);
      createComponentsFrame(selection, mainFrame);
    });
    handleMessage.showNotification('success');
  } catch (err) {
    //message for development mode
    console.log('in loadFont catch: ', err);
    handleMessage.showNotification('reject');
  } finally {
    figma.closePlugin();
  }
}

function handleSelectionChange() {
  selections = figma.currentPage.selection;
  //if the selections are of type FRAME|| VARIANT will run the plugin's desired functionality
  if (checkSelections()) {
    figma.ui.postMessage('enable');
  } else {
    figma.ui.postMessage('disable');
  }
}
let selections = [];
handleSelectionChange();

let elementFrameColor = {
  r: 0.9500999450683594,
  g: 0.28075048327445984,
  b: 0.1329185515642166,
};
let mainFrameColor = { r: 0.5647059082984924, g: 0.48627451062202454, b: 1 };

figma.ui.onmessage = message => {
  switch (message.type) {
    case 'run':
      main();
      break;
    case 'element-frame-border-color':
      elementFrameColor = hexToFigmaRGB(message.data);
      break;
    case 'main-frame-border-color':
      mainFrameColor = hexToFigmaRGB(message.data);
      break;
    default:
      return;
  }
};

figma.on('selectionchange', handleSelectionChange);
