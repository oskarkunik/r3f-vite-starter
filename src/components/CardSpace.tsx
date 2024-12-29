import { Vector2, Vector3 } from '@react-three/fiber';
import React from "react";
import { useControls } from "leva";

const CardSpace = ({
  position,
  scale,
}: {
  position: Vector3
  scale: [height: number, width: number]
}) => {

  const { left, top } = useControls({ left: 1, top: -1.7 });

  return (
    <group position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh position={[top, left, 0]}>
        <planeGeometry attach="geometry" args={scale} />
        <meshStandardMaterial attach="material" color="grey" />
      </mesh>
    </group>
  );
};

export default CardSpace;
