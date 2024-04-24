import React, { useRef } from "react";

const Player = () => {
  const player = useRef<THREE.Group>(null);

  return (
    <group ref={player} dispose={null}>
      <mesh position={[0,.5,0]}>
        <boxGeometry args={[.7,1,.7]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
};

export default Player;
