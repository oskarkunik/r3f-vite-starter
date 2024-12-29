import { OrbitControls } from "@react-three/drei";
import React from "react";
import CardFront from './CardFront';

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
      <CardFront />
    </>
  );
};
