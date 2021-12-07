export default function createAutoLayout(
  node,
  {
    layoutMode = 'HORIZONTAL',
    primaryAxisSizingMode = 'AUTO',
    counterAxisSizingMode = 'AUTO',
    primaryAxisAlignItems = 'MIN',
    counterAxisAlignItems = 'MIN',
    itemSpacing = 32,
    padding = [16, 16, 16, 16],
  }
) {
  node.layoutMode = layoutMode;
  node.primaryAxisSizingMode = primaryAxisSizingMode;
  node.counterAxisSizingMode = counterAxisSizingMode;
  node.primaryAxisAlignItems = primaryAxisAlignItems;
  node.counterAxisAlignItems = counterAxisAlignItems;
  node.itemSpacing = itemSpacing;
  node.paddingTop = padding[0];
  node.paddingRight = padding[1];
  node.paddingBottom = padding[2];
  node.paddingLeft = padding[3];
}
