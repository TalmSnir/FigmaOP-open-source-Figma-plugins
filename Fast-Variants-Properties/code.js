//initializing the UI
figma.showUI(__html__);
figma.ui.resize(400, 520);

let doneAsExpected = false;

/**
 * functions to set messages to the UI and get messages from the UI.
 * @property {showNotification} [type] - notify the user if a non component set node was selected.
 * @property {gotComponentNodeIdMessage} [id] - create a focus frame around the first variant child after getting from the UI an id of 0 and changing the position of the frame if the id is other than 0.
 * @property {gotSuccessMessage} [variantsProps,variantChildren]- gets a message from the UI with a properties string after going over all the component's variants and sets the variants properties to each and every variant.
 * @property {sendNoValidSelectionMessage} []- notify the UI that no valid selection was made.
 * @property {sendComponentsNumberMessage} [numberOfVariants]- message the UI the number of variants the component's set has.
 */
// messages types{
//   'noSelection',
//   'moreThanOneSelection',
//   'noValidSelection',
//   'noPropSelection',
//   'success',
//   'variantsPropString'}
let notificationHandler;
const handleMessage = {
  messages: {
    noSelection: '✘ select component variants group',
    moreThanOneSelection: '✘ select only one component variants group',
    noPropSelection: '✘ you must select or input at least one valid property',
    success: '✔ all properties were set',
  },
  showNotification(type) {
    notificationHandler = figma.notify(this.messages[type], { timeout: 2000 });
  },
  gotComponentNodeIdMessage(id) {
    if (id === 0) {
      frame.createFocusFrame();
    }
    frame.setFocusFrame(id);
  },
  gotSuccessMessage(variantsProps, variantChildren) {
    variantChildren.forEach(
      (variant, id) => (variant.name = variantsProps[id].slice(0, -1))
    );
    doneAsExpected = true;
    this.showNotification('success');
    frame.removeFrame();
    figma.closePlugin();
  },
  sendNoValidSelectionMessage() {
    figma.ui.postMessage({ type: 'noValidSelection' });
  },
  sendComponentsNumberMessage(numberOfVariants) {
    figma.ui.postMessage({
      text: numberOfVariants,
      type: 'componentNodeSelection',
    });
  },
};
/**
 * @summary checks if the selection is a valid-meaning a single component set node;uses the handleMessage to notify the UI if true or false.
 * additionally has the onmessage with 3 alternative to a message received from the UI.
 */

let variantGroupSelection;
const checkNodeType = () => {
  notificationHandler ? notificationHandler.cancel() : '';
  variantGroupSelection = figma.currentPage.selection;
  frame.removeFrame();
  if (
    variantGroupSelection !== [] &&
    variantGroupSelection.length === 1 &&
    variantGroupSelection[0].type === 'COMPONENT_SET'
  ) {
    const numberOfVariants = variantGroupSelection[0].children.length;

    handleMessage.sendComponentsNumberMessage(numberOfVariants);

    const variantChildren = variantGroupSelection[0].children;

    figma.ui.onmessage = message => {
      switch (message.type) {
        case 'success':
          handleMessage.gotSuccessMessage(message.text, variantChildren);
          break;
        case 'nodeId':
          handleMessage.gotComponentNodeIdMessage(message.text);
          break;
        case 'noPropSelection':
          handleMessage.showNotification('noPropSelection');
      }
    };
  } else {
    variantGroupSelection.length > 1
      ? handleMessage.showNotification('moreThanOneSelection')
      : handleMessage.showNotification('noSelection');

    handleMessage.sendNoValidSelectionMessage();
  }
};

/**
 * functions to create and reposition focus frame(indicator) around variant while selecting it's properties .
 * @property {createFocusFrame} [] - creates a pink frame with a dashed stroke,sets its background to transparent and names it FVP variant indicator.
 * @property {setFocusFrame} [id] - reposition and resize the focus frame respectively  to the current variant with 10px padding.
 * @property {removeFrame} [variantsProps,variantChildren]- deletes the focus frame if all properties were set, if a selection change has occurred or if the UI has been closed.
 */

const frame = {
  setFocusFrame(id) {
    const child = variantGroupSelection[0].children[id];
    const sizeAddition = 20;
    this.focusFrame.relativeTransform = [
      [1, 0, child.absoluteTransform[0][2] - sizeAddition / 2],
      [0, 1, child.absoluteTransform[1][2] - sizeAddition / 2],
    ];
    this.focusFrame.resize(
      child.width + sizeAddition,
      child.height + sizeAddition
    );
  },
  createFocusFrame() {
    this.focusFrame = figma.createFrame();
    this.focusFrame.name = 'FVP variant indicator';
    this.focusFrame.dashPattern = [10, 5];
    this.focusFrame.strokes = [
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
    ];
    this.focusFrame.backgrounds = [];
  },
  removeFrame() {
    this.focusFrame && !this.focusFrame.removed && this.focusFrame.remove();
  },
};

checkNodeType();
figma.on('selectionchange', checkNodeType);
figma.on('close', () => (doneAsExpected ? '' : frame.removeFrame()));
