import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";
import vertexShader from "./shaders/vertex/vertexShader_blank.glsl?raw";
import fragmentShader from "./shaders/fragment/red.glsl?raw";

export const Experience = () => {
  const mesh = useRef(null);
  return (
    <>
      {/* <OrbitControls /> */}
      <ambientLight />
      <mesh ref={mesh} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1}>
        <planeGeometry args={[1, 1, 32, 32]} />
        {/* <icosahedronGeometry args={[4, 30]} /> */}
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          wireframe={false}
        />
      </mesh>
    </>
  );
};
