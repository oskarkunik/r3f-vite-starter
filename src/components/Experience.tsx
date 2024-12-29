import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

import React from "react";
import CardFront from './CardFront';
import Board from './Board';
import useCardSpaces from './useCardSpaces';

const CONFIG = {
  rows: 2,
  columns: 4,
};

const CARD_SPACE = {
  height: 3.4,
  width: 2,
}

export const Experience = () => {
  const { row, column } = useControls({ row: 4, column: 4 });

  const cards = [{
    row: row,
    column: column
  }]

  const cardSpaces = useCardSpaces({rows: CONFIG.rows, columns: CONFIG.columns, height: CARD_SPACE.height, width: CARD_SPACE.width});

  return (
    <>
      <OrbitControls />
      <gridHelper args={[40, 20, 0xff0000, "teal"]} />
      <axesHelper />
      {/* <Board /> */}
      { cardSpaces }
      <CardFront
        position={[cards[0].row, 0.1, cards[0].column]}
        cardScale={[0.95, 0.95, 0.95]}
      />
    </>
  );
};
