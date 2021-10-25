export default function createFrameNode({
  name = null,
  dashPattern = null,
  strokes = null,
  fills = [],
}) {
  const frame = figma.createFrame();
  frame.name = name;
  frame.dashPattern = dashPattern;
  frame.strokes = strokes;
  frame.fills = fills;

  return frame;
}
