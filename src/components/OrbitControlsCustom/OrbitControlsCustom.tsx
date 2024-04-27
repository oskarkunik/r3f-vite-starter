import { OrbitControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import useGlobalUIState, { GlobalUIState } from '@/store/useGlobalUiState';

const OrbitControlsCustom = () => {
  const controlsRef = useRef(null);
  const isDragging = useGlobalUIState((state) => (state as GlobalUIState).isDragging)
  useEffect(() => {
    // Using 'any' to fix mismatch between OrbitControls ref and React ref types
    const controlsRefCurrent: any = controlsRef.current;
    if (isDragging) {
      controlsRefCurrent.saveState();
    } else {
      controlsRefCurrent.reset();
    }
  }, [isDragging]);

  return (
    <OrbitControls
      ref={controlsRef}
      enabled={!isDragging}
      enablePan={false}
      minDistance={1}
      maxDistance={8}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2}
    />
  );
};

export default OrbitControlsCustom;
