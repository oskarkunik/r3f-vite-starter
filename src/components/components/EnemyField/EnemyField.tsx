import React from "react";
import Enemy from './components/Enemy';

const PlayerField = () => {
  return (
    <group position={[-4, 0, 0]}>
      <Enemy />

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4, 1]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
};

export default PlayerField;
