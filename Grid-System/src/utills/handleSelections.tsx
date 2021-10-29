export default function handleSelections({ allowedTypes = ['NODE'] }) {
  const selections = figma.currentPage.selection;
  let selectionsDescription = {
    moreThanOne: false,
    length: 1,
    noSelection: false,
    allowedTypes: true,
  };
  selectionsDescription.length = selections.length;
  if (selections.length === 0) {
    selectionsDescription.noSelection = true;
  }
  if (selections.length >= 1) {
    selectionsDescription.moreThanOne = true;
  }
  if (
    selections.filter(selection => !allowedTypes.includes(selection.type))
      .length > 0
  ) {
    selectionsDescription.allowedTypes = false;
  }
  return [selections, selectionsDescription];
}
