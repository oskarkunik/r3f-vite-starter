import { Vector2, Vector3 } from '@react-three/fiber';
import React from "react";
import { useControls } from "leva";

const CardSpace = ({
  position,
  scale,
  onClick: handleClick,
}: {
  position: Vector3;
  scale: [height: number, width: number];
  onClick: () => void;
}) => {
  const { left, top } = useControls({ left: 1, top: -1.7 });

  return (
    <group position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh
        position={[top, left, 0]}
        scale={[0.99, 0.99, 0.99]}
        onClick={handleClick}
      >
        <planeGeometry attach="geometry" args={scale} />
        <meshStandardMaterial attach="material" color="grey" />
      </mesh>
    </group>
  );
};

export default CardSpace;
