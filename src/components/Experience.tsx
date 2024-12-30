import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

import React, { useEffect, useState } from "react";
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

  const [cardPositions, setCardPositions] = useState<
    {
      id: string;
      row: number;
      column: number;
      position: [number, number];
    }[]
  >([]);

  const onSpaceClick = ({
    row,
    column,
    position,
  }: {
    row: number,
    column: number,
    position: [number, number]
  }) => {
    const positionId = `${row}_${column}`;
    if (cardPositions.some(({id}) => id === positionId)) {
      setCardPositions(cardPositions.filter(({ id }) => id !== positionId)
      );
    } else {
      setCardPositions([...cardPositions, {
        id: positionId,
        row,
        column,
        position
      }])
    }
  }

  useEffect(() => console.log(cardPositions), [cardPositions])

  const cardSpaces = useCardSpaces({rows: CONFIG.rows, columns: CONFIG.columns, height: CARD_SPACE.height, width: CARD_SPACE.width, onSpaceClick});

  return (
    <>
      <OrbitControls />
      <gridHelper args={[40, 20, 0xff0000, "teal"]} />
      <axesHelper />
      {/* <Board /> */}
      {cardSpaces}
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
