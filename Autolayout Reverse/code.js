function reverseAutoLayout() {
    let selection = figma.currentPage.selection[0];
    if ((selection.type === 'FRAME' || selection.type === 'COMPONENT') &&
        (selection.layoutMode === 'HORIZONTAL' ||
            selection.layoutMode === 'VERTICAL')) {
        for (let i = 0; i < selection.children.length; i++) {
            selection.insertChild(i, selection.children[selection.children.length - 1]);
        }
    }
    figma.closePlugin();
}
let autoLayoutNodes;
function findAllAutoLayoutNodes() {
    return figma.currentPage.findAll(node => (node.type === 'FRAME' || node.type === 'COMPONENT') &&
        (node.layoutMode === 'HORIZONTAL' || node.layoutMode === 'VERTICAL'));
}
function refreshPlugin() {
    let autoLayoutNodes = findAllAutoLayoutNodes();
    autoLayoutNodes.forEach(node => node.setRelaunchData({ reverse: '' }));
    figma.closePlugin();
}
function detachPlugin() {
    let autoLayoutNodes = findAllAutoLayoutNodes();
    console.log(autoLayoutNodes);
    autoLayoutNodes.forEach(node => node.setRelaunchData({}));
    figma.root.setRelaunchData({});
    figma.closePlugin();
}
function onRun() {
    refreshPlugin();
    figma.root.setRelaunchData({
        refresh: 'in case you added nodes after lunching the plugin',
        detach: 'remove the plugin attachment from all the auto layout nodes',
    });
    figma.closePlugin();
}
figma.command === 'reverse' && reverseAutoLayout();
figma.command === 'refresh' && refreshPlugin();
figma.command === 'detach' && detachPlugin();
figma.on('run', () => figma.command !== 'reverse' &&
    figma.command !== 'refresh' &&
    figma.command !== 'detach' &&
    onRun());
