import { OrbitControls } from "@react-three/drei";
import React, { useEffect, useMemo, useRef, useState } from "react";
import vertexShader from "./shaders/vertex/vertexShader_sin_animation.glsl?raw";
// import fragmentShader from "./shaders/fragment/uniform_time.glsl?raw";
import fragmentShader from "./shaders/fragment/frag_color.glsl?raw";
import { useFrame } from "@react-three/fiber";

import { Color, ShaderMaterial, Mesh } from "three";

const MovingPlane = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>(null);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_colorA: { value: new Color("#FFE486") },
      u_colorB: { value: new Color("#FEB3D9") },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    (mesh.current!.material as ShaderMaterial).uniforms.u_time.value =
      clock.getElapsedTime();
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.5}
    >
      {/* <icosahedronGeometry args={[1, 6]} /> */}
      <planeGeometry args={[1, 1, 16, 16]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={true}
      />
    </mesh>
  );
};

const Scene = () => {};

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <MovingPlane />
    </>
  );
};
