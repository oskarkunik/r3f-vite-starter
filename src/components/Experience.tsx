import { OrbitControls } from "@react-three/drei";
import React from "react";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh>
        <icosahedronGeometry args={[4, 30]} />
        <meshStandardMaterial wireframe color="#ffffff" />
      </mesh>
    </>
  );
};
