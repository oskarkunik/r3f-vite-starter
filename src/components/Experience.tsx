import { OrbitControls, Environment } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import { BoxGeometry, BufferGeometry, CylinderGeometry, Vector2 } from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

const HEXAGON_SPACING = 1.03; // Abything above 1 will increase gaps between hexagons

/**
 * See here for explanation of offsets: https://www.redblobgames.com/grids/hexagons/
 */
const HEX_GRID = {
  SIZE: 20,
  ROW_OFFSET: Math.sqrt(3) * HEXAGON_SPACING,
  COLUMN_OFFSET: (3 / 2) * HEXAGON_SPACING,
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
      new Array(HEX_GRID.SIZE * 2).fill(0).forEach((column, columnIndex) => {
        /**
         * The offsets are for moving the grid by half to the top and left.
         * This way checking if the hexagon belongs to a rough circle makes sense.
         */
        const rowIndexOffset = rowIndex - HEX_GRID.SIZE / 2;
        const columnIndexOffset = columnIndex - HEX_GRID.SIZE;

        if (
          new Vector2(rowIndexOffset, columnIndexOffset).length() >
          HEX_GRID.SIZE / 2 + 1
        ) {
          return;
        }

        const position = tileToPosition(rowIndexOffset, columnIndexOffset);
        appendHexagon(3, position);
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
