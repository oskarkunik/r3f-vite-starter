import { OrbitControls } from "@react-three/drei";
import React from "react";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <sphereGeometry args={[5, 10, 10]} />
        <meshBasicMaterial color={"#ff0000"} />
      </mesh>
    </>
  );
};
