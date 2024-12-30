import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

import React, { useEffect, useState } from "react";
import CardFront from './CardFront';
import Board from './Board';
import useCardSpaces from '../hooks/useCardSpaces';
import { useGameState } from '../hooks/useGameState';

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

  const { cardPositions, onSpaceClick } = useGameState();

  useEffect(() => console.log(cardPositions), [cardPositions])

  return (
    <>
      <OrbitControls />
      <gridHelper args={[40, 20, 0xff0000, "teal"]} />
      <axesHelper />
      {/* <Board /> */}
      {cardPositions.map(({ position, id }) => {
        <CardFront
          key={id}
          position={[position[0], 0.1, position[1]]}
          cardScale={[0.95, 0.95, 0.95]}
        />;
      })}
    </>
  );
};
