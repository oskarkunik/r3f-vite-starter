import { OrbitControls, Environment } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import { BoxGeometry, BufferGeometry, CylinderGeometry, Vector2 } from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

const createHexGeometry = (height: number, position: Vector2) =>
  new CylinderGeometry(1, 1, height, 6, 1, false).translate(
    position.x,
    height * 0.5,
    position.y
  );

export const Experience = () => {
  const [hexagonGeometries, setHexagonGeometries] = useState<BufferGeometry>(
    new BoxGeometry(0, 0, 0)
  );

  const makeHex = (height: number, position: Vector2) =>
    setHexagonGeometries((current) =>
      mergeGeometries([current, createHexGeometry(height, position)])
    );

  useEffect(() => {
    makeHex(1, new Vector2(0, 0));
  }, []);

  return (
    <>
      <OrbitControls enableDamping dampingFactor={0.05} />
      <mesh geometry={hexagonGeometries}>
        <Environment files="src/assets/hdri/env.hdr" />
        <meshStandardMaterial roughness={0} metalness={1} flatShading />
      </mesh>
    </>
  );
};
