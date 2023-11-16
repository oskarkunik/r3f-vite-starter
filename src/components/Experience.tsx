import { OrbitControls, Environment } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import { BoxGeometry, BufferGeometry, CylinderGeometry, Vector2 } from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

const HEX_GRID_SIZE = 10;

const createHexGeometry = (height: number, position: Vector2) =>
  new CylinderGeometry(1, 1, height, 6, 1, false).translate(
    position.x,
    height * 0.5,
    position.y
  );

const tileToPosition = (tileX: number, tileY: number) =>
  new Vector2((tileX + (tileY % 2) * 0.5) * 1.77, tileY * 1.535);

export const Experience = () => {
  const [hexagonGeometries, setHexagonGeometries] = useState<BufferGeometry>(
    new BoxGeometry(0, 0, 0)
  );

  const makeHex = (height: number, position: Vector2) =>
    setHexagonGeometries((current) =>
      mergeGeometries([current, createHexGeometry(height, position)])
    );

  useEffect(() => {
    new Array(HEX_GRID_SIZE).fill(0).forEach((row, rowIndex) => {
      new Array(HEX_GRID_SIZE).fill(0).forEach((column, columnIndex) => {
        makeHex(1, tileToPosition(rowIndex, columnIndex));
      });
    });
  }, []);

  return (
    <>
      <gridHelper />
      <OrbitControls enableDamping dampingFactor={0.05} />
      <mesh geometry={hexagonGeometries}>
        <Environment files="src/assets/hdri/env.hdr" />
        <meshStandardMaterial roughness={1} metalness={0} flatShading />
      </mesh>
    </>
  );
};
