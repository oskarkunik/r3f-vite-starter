import { useControls } from 'leva';
import React from "react";

export const CircleClock = () => {
  const MAX_VERTICLES_IN_CIRCLE = 32;

  const { segments, wireframe, gap, resolution } = useControls({
    segments: {
      value: 2,
      min: 2,
      max: 12,
      step: 1,
    },
    gap: {
      value: .2,
      max: 1,
      min: 0,
    },
    resolution: {
      value: MAX_VERTICLES_IN_CIRCLE,
      step: 1,
      max: 128,
      min: 8,
    },
    wireframe: true,
  });


  const calculateGap = () => {
    const gapLength = Math.PI * 2 / resolution * gap;
    console.log(gapLength)
    return gapLength;
  }


  const generatePart = (segment: number) => {
    const length = ((Math.PI * 2) / segments) - calculateGap();
    const verts = Math.floor(resolution / segments);
    const startAngle = (length + calculateGap()) * segment;

    return {
      verts,
      startAngle,
      length
    }
  }

  return (
    <>
    {
      Array(segments).fill(null).map((_, i) => {
        const { verts, startAngle, length } = generatePart(i);
        return (
          <mesh>
            <ringGeometry
              args={[1, 1.4, verts, 1, startAngle, length]}
            />
            <meshStandardMaterial color="orange" wireframe={wireframe} />
          </mesh>
        );
      })
    }
    </>
  );
};
