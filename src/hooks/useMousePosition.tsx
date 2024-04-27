import { useRef, useCallback, useEffect, useMemo, useState } from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{x: number, y: number}>({ x: 0, y: 0})

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.pageX, y: e.pageY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition, false);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition, false);
    };
  }, [updateMousePosition]);

  return mousePosition;
}

export default useMousePosition;
