import { useEffect } from 'react';

export default function useResizeObserver() {
  const handleResize = () => {};
  const sizeObserver = new ResizeObserver(handleResize);
}
