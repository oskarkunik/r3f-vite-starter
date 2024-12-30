import { Vector3 } from '@react-three/fiber';
import React from "react";
import { CONFIG } from '../constants';

const CardSpace = ({
  position,
  scale,
  onClick: handleClick,
}: {
  position: Vector3;
  scale: Vector3;
  onClick: () => void;
}) => {

  return (
    <group
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={handleClick}
    >
      <mesh scale={scale}>
        <planeGeometry attach="geometry" args={[CONFIG.CARD_SPACE.HEIGHT, CONFIG.CARD_SPACE.WIDTH]} />
        <meshStandardMaterial attach="material" color="grey" />
      </mesh>
    </group>
  );
};

export default CardSpace;
