export default function getNodeBoundingClientRect(node) {
  const { width, height, x, y } = node;
  const absoluteX = node.absoluteTransform[0][2];
  const absoluteY = node.absoluteTransform[1][2];
  return { width, height, relativeX: x, relativeY: y, absoluteX, absoluteY };
}
