import { OrbitControls, Environment } from "@react-three/drei";
import React from "react";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableDamping dampingFactor={0.05} />
      <mesh>
        <Environment files="src/assets/hdri/env.hdr" />
        <sphereGeometry args={[5, 10, 10]} />
        <meshStandardMaterial roughness={0} metalness={1} />
      </mesh>
    </>
  );
};
