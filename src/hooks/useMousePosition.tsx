import { useRef, useCallback, useEffect } from 'react';

const useMousePosition = () => {
  const mousePosition = useRef({ x: 0, y: 0 });
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  const updateMousePosition = useCallback((e: MouseEvent) => {
    console.log("e");
    console.log(e.pageX, e.pageY);
    console.log("window");
    console.log(windowWidth, windowHeight);
    mousePosition.current = { x: e.pageX, y: e.pageY };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition, false);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition, false);
    };
  }, [updateMousePosition]);
}

export default useMousePosition;
