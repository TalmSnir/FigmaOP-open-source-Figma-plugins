export default function createTextNode({
  fontName = { family: 'Roboto', style: 'Regular' },
  characters = '',
  fontSize = 16,
  hyperlink = null,
  // textDecoration = 'NONE',
}) {
  const node = figma.createText();
  node.fontName = fontName;
  node.characters = characters;
  node.fontSize = fontSize;
  node.hyperlink = hyperlink;
  // node.textDecoration = figma.mixed || textDecoration;
  return node;
}
