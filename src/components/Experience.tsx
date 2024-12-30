import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

import React from "react";
import CardFront from './CardFront';
import CardSpace from './CardSpace';
import Board from './Board';
import { useGameState } from '../hooks/useGameState';
import { CONFIG } from '../constants';

import { boardOffsetLeft, boardOffsetTop } from '../util/helpers';

export const Experience = () => {
  const { cardName } = useControls({ cardName: 'Test' });

  const { cardPositions, cardSpaces, onSpaceClick } = useGameState();

  console.log(cardPositions)
  return (
    <>
      <OrbitControls />
      <gridHelper args={[40, 20, 0xff0000, "teal"]} />
      {/* <axesHelper /> */}
      {/* <Board /> */}
      <group position={[boardOffsetTop(), 0.01, boardOffsetLeft()]}>
        {cardSpaces.map((cardSpace) => {
          const {
            position: [left, top],
          } = cardSpace;
          return (
            <CardSpace
              key={`${top}_${left}`}
              position={[left, 0, top]}
              scale={[1, 1, 1]}
              onClick={() =>
                onSpaceClick({
                  ...cardSpace,
                  name: cardName,
                  id: "wodzionka",
                })
              }
            />
          );
        })}
        {cardPositions.map(({ position: [left, top], id, isPlayer, name }) => (
          <CardFront
            key={`${top}_${left}`}
            position={[left, CONFIG.CARD.OFFSET_TOP, top]}
            cardScale={[CONFIG.CARD.BOARD_SCALE, 1, CONFIG.CARD.BOARD_SCALE]}
            isPlayer={isPlayer}
            name={name}
          />
        ))}
      </group>
    </>
  );
};
