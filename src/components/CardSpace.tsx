import { Vector3 } from '@react-three/fiber';
import React from "react";

const CardSpace = ({
  position,
  scale,
  onClick: handleClick,
}: {
  position: Vector3;
  scale: [height: number, width: number];
  onClick: () => void;
}) => {

  return (
    <group
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={handleClick}
    >
      <mesh position={[-1.7, 1, 0]} scale={[0.99, 0.99, 0.99]}>
        <planeGeometry attach="geometry" args={scale} />
        <meshStandardMaterial attach="material" color="grey" />
      </mesh>
    </group>
  );
};

export default CardSpace;
