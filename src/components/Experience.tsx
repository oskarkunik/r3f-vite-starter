import { Html, OrbitControls } from "@react-three/drei";
import React from "react";
import { CircleClock } from './CircleClock';

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <CircleClock />
    </>
  );
};
