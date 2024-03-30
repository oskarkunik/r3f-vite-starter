import { OrbitControls } from "@react-three/drei";
import React from "react";
import Tiles from "./components/Tiles";
const MAP_SIZE = 5;

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Tiles mapSize={MAP_SIZE} />
      <axesHelper />
    </>
  );
};
