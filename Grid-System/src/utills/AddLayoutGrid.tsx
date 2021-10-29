export default function AddLayoutGrid(
  node,
  {
    pattern = 'GRID',
    alignment = 'STRETCH',
    gutterSize = 16,
    count = 5,
    sectionSize = 8,
    offset = 0,
    color = { r: 1, g: 0, b: 0, a: 0.10000000149011612 },
    visible = true,
  }
) {
  let newGrid;

  if (pattern === 'GRID') {
    newGrid = {
      pattern: pattern,
      sectionSize: sectionSize,
      color: color,
      visible: visible,
    };
  } else {
    newGrid = {
      pattern: pattern,
      alignment: alignment,
      count: count,
      gutterSize: gutterSize,
      color: color,
      visible: visible,
    };
    if (alignment !== 'STRETCH' && alignment !== 'CENTER') {
      newGrid.sectionSize = sectionSize;
      newGrid.offset = offset;
    } else if (alignment === 'STRETCH') {
      newGrid.offset = offset;
    } else {
      newGrid.sectionSize = sectionSize;
    }
  }

  node.layoutGrids = [...node.layoutGrids, newGrid];

  return node;
}
