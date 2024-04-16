import React from "react";
import Player from "./components/Player";

export const Experience = () => {

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-4, 0, 0]}>
        <planeGeometry args={[4, 1]} />
        <meshNormalMaterial />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 1]} />
        <meshNormalMaterial />
      </mesh>
      <ambientLight />
      <Player />
    </group>
  );
};
