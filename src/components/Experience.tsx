import { OrbitControls } from "@react-three/drei";
import React from "react";
import CardFront from './CardFront';
import Board from './Board';

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <gridHelper args={[40, 20, 0xff0000, "teal"]} />
      {/* <Board /> */}
      <CardFront />
    </>
  );
};
