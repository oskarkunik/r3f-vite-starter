import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";
import vertexShader from "./vertexShader.glsl?raw";
import fragmentShader from "./fragmentShader.glsl?raw";

export const Experience = () => {
  const mesh = useRef(null);
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh
        ref={mesh}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.5}
      >
        <icosahedronGeometry args={[4, 30]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          wireframe
        />
      </mesh>
    </>
  );
};
