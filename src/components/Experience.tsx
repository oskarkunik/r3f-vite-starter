import { OrbitControls } from "@react-three/drei";
import React, { useEffect, useMemo, useRef, useState } from "react";
import vertexShader from "./shaders/vertex/vertexShader_blank.glsl?raw";
// import fragmentShader from "./shaders/fragment/uniform_time.glsl?raw";
import fragmentShader from "./shaders/fragment/frag_coord.glsl?raw";
import { useFrame } from "@react-three/fiber";
import THREE, { Uniform, Vector2 } from "three";

export const Experience = () => {
  const mesh = useRef(null);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_resolution: new Uniform(
        new Vector2(window.innerWidth, window.innerHeight)
      ),
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh ref={mesh} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1}>
        <planeGeometry args={[1, 1, 32, 32]} />
        {/* <icosahedronGeometry args={[4, 30]} /> */}
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          wireframe={false}
          uniforms={uniforms}
        />
      </mesh>
    </>
  );
};
