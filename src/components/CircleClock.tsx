import { useControls } from 'leva';
import React from "react";

export const CircleClock = () => {
  const MAX_SEGMENTS = 32;

  const { segments, wireframe } = useControls({
    segments: {
      value: MAX_SEGMENTS,
      min: 2,
      max: MAX_SEGMENTS,
      step: 2,
    },
    wireframe: true
  });

  const length = () => {
    const segmentLength = Math.PI * 2 / MAX_SEGMENTS;
    const length = segments * segmentLength;
    return length;
  }

  return (
    <>
      <mesh>
        <ringGeometry args={[1, 1.4, segments, 1, 0, length()]} />
        <meshStandardMaterial color="orange" wireframe={wireframe} />
      </mesh>
    </>
  );
};
