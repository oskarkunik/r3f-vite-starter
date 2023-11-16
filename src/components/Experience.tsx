import { OrbitControls, Environment } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import { BoxGeometry, BufferGeometry, CylinderGeometry, Vector2 } from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

const HEX_GRID = {
  SIZE: 10,
  ROW_OFFSET: 1.77,
  COLUMN_OFFSET: 1.535,
};

const createHexGeometry = (height: number, position: Vector2) =>
  new CylinderGeometry(1, 1, height, 6, 1, false).translate(
    position.x,
    height * 0.5,
    position.y
  );

const tileToPosition = (tileX: number, tileY: number) => {
  const rowPosition = (tileX + (tileY % 2) * 0.5) * HEX_GRID.ROW_OFFSET;
  const columnPosition = tileY * HEX_GRID.COLUMN_OFFSET;
  return new Vector2(rowPosition, columnPosition);
};

export const Experience = () => {
  const [hexagonGeometries, setHexagonGeometries] = useState<BufferGeometry>(
    new BoxGeometry(0, 0, 0)
  );

  const appendHexagon = (height: number, position: Vector2) =>
    setHexagonGeometries((current) =>
      mergeGeometries([current, createHexGeometry(height, position)])
    );

  useEffect(() => {
    new Array(HEX_GRID.SIZE).fill(0).forEach((row, rowIndex) => {
      new Array(HEX_GRID.SIZE).fill(0).forEach((column, columnIndex) => {
        appendHexagon(1, tileToPosition(rowIndex, columnIndex));
      });
    });
  }, []);

  return (
    <>
      <gridHelper />
      <OrbitControls enableDamping dampingFactor={0.05} />
      <mesh geometry={hexagonGeometries.center()}>
        <Environment files="src/assets/hdri/env.hdr" />
        <meshStandardMaterial roughness={1} metalness={0} flatShading />
      </mesh>
    </>
  );
};
