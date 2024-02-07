import { OrbitControls } from "@react-three/drei";
import React, { useEffect, useMemo, useRef, useState } from "react";
import vertexShader from "./shaders/vertex/vertexShader_blank.glsl?raw";
// import fragmentShader from "./shaders/fragment/uniform_time.glsl?raw";
import fragmentShader from "./shaders/fragment/frag_coord.glsl?raw";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import THREE, { Uniform, Vector2 } from "three";

export const Experience = () => {
  const mesh = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      // u_resolution: new Uniform(new Vector2(100, 100)),
      u_mouse: new Uniform(new Vector2(0, 0)),
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    (mesh.current!.material as THREE.ShaderMaterial).uniforms.u_time.value =
      clock.getElapsedTime();
  });

  const getCursor = (event: ThreeEvent<PointerEvent>) => {
    (mesh.current!.material as THREE.ShaderMaterial).uniforms.u_mouse =
      new Uniform(new Vector2(event.uv!.x, event.uv!.y));
  };

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh
        ref={mesh}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        scale={1}
        onPointerMove={getCursor}
      >
        <icosahedronGeometry args={[1, 3]} />
        {/* <planeGeometry args={[1, 1, 32, 32]} /> */}
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          wireframe={true}
          uniforms={uniforms}
          wireframeLinewidth={3}
        />
      </mesh>
    </>
  );
};
