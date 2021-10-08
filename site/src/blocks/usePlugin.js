// import { useState, useEffect, useRef } from 'react';

// export default function usePlugin({ header, link, text }) {
//   const [inEditMode, setInEditMode] = useState(false);
//   const [inAddBorders, setInAddBorders] = useState(false);
//   const headerText = useRef();
//   const textText = useRef();
//   const linkText = useRef();

//   const handleEditMode = () => {
//     setInEditMode(!inEditMode);
//   };
//   const handleCreateShape = () => {};
//   const handleAddBorders = () => {
//     setInAddBorders(!inAddBorders);
//   };
//   useEffect(() => {
//     headerText.current = header.current.innerText;
//     textText.current = text.current.innerText;
//     linkText.current = link.current.innerHTML;
//   }, [header, text, link]);
//   useEffect(() => {
//     if (inEditMode) {
//       header.current.setAttribute('contentEditable', true);
//       text.current.setAttribute('contentEditable', true);
//       link.current.setAttribute('contentEditable', true);
//     } else {
//       header.current.setAttribute('contentEditable', false);
//       text.current.setAttribute('contentEditable', false);
//       link.current.setAttribute('contentEditable', false);
//       header.current.innerText = headerText.current;
//       text.current.innerText = textText.current;
//       link.current.innerHTML = linkText.current;
//     }
//   }, [inEditMode, header, headerText, text, textText, link, linkText]);
//   useEffect(() => {
//     if (inAddBorders) {
//       [text, header, link].forEach(
//         ele => (ele.current.style.boxShadow = '0 0 0 1px var(--clr-red)')
//       );
//     } else {
//       [text, header, link].forEach(ele => (ele.current.style.boxShadow = ''));
//     }
//   }, [inAddBorders, text, header, link]);
//   return { handleEditMode, handleCreateShape, handleAddBorders, inEditMode };
// }
