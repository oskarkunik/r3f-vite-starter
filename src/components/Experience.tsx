import { OrbitControls } from "@react-three/drei";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import vertexShader from "./shaders/vertex/vertexShader_mouse_height.glsl?raw";
// import fragmentShader from "./shaders/fragment/uniform_time.glsl?raw";
import fragmentShader from "./shaders/fragment/frag_color.glsl?raw";
import { useFrame } from "@react-three/fiber";

import { Color, ShaderMaterial, Mesh, Vector2, AmbientLight } from "three";

const MovingPlane = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  const updateMousePosition = useCallback((e) => {
    console.log("e");
    console.log(e.pageX, e.pageY);
    console.log("window");
    console.log(windowWidth, windowHeight);
    mousePosition.current = { x: e.pageX, y: e.pageY };
  }, []);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_mouse: { value: new Vector2(0, 0) },
      u_colorA: { value: new Color("#FFFFFF") },
      u_colorB: { value: new Color("#FEFEFE") },
    }),
    []
  );

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition, false);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition, false);
    };
  }, [updateMousePosition]);

  useFrame((state) => {
    const { clock } = state;
    (mesh.current!.material as ShaderMaterial).uniforms.u_time.value =
      clock.getElapsedTime();

    const centerValue = (value: number) => {
      if (value >= 0.5) {
        return 0.5 - value;
      } else {
        return -(0.5 - value);
      }
    };

    const normalizedX = centerValue(mousePosition.current.x / windowWidth);
    const normalizedY = centerValue(mousePosition.current.y / windowHeight);
    (mesh.current!.material as ShaderMaterial).uniforms.u_mouse.value =
      new Vector2(normalizedX, normalizedY);
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.5}
    >
      <icosahedronGeometry args={[1, 8]} />
      {/* <planeGeometry args={[1, 1, 16, 16]} /> */}
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={true}
        wireframeLinewidth={2}
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
