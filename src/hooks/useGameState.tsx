import React, { createContext, useContext, useState } from "react";
import useCardSpaces from './useCardSpaces';
import { BoardPosition, CardPosition, SpacePosition } from './cards.interface';
import { button, useControls } from "leva";

import { CONFIG } from '../constants';

const GameStateContext = createContext<
  | {
      cardPositions: CardPosition[];
      cardSpaces: SpacePosition[];
      onSpaceClick: (position: SpacePosition) => void;
    }
  | undefined
>(undefined);

const GameStateProvider = (({children}) => {
  const { playerCardId } = useControls("Player", {
    playerCardId: {
      value: "foo",
      options: ["foo", "bar", "baz"],
    },
  });

  const { enemyCards } = useControls("Enemy", {
    enemyCards: {
      value: CONFIG.BOARD.COLUMNS * CONFIG.BOARD.ENEMY_ROWS,
      step: 1,
      min: 0,
      max: CONFIG.BOARD.COLUMNS * CONFIG.BOARD.ENEMY_ROWS,
    },
    addEnemyCards: button((get) => alert(get("enemyCards"))),
  });

  const [cardPositions, setCardPositions] = useState<
    CardPosition[]
  >([]);

  const { cardSpaces } = useCardSpaces({
    rows: CONFIG.BOARD.ROWS,
    columns: CONFIG.BOARD.COLUMNS,
    height: CONFIG.CARD_SPACE.HEIGHT,
    width: CONFIG.CARD_SPACE.WIDTH,
    enemyRows: CONFIG.BOARD.ENEMY_ROWS
  })

  const onSpaceClick = (position: SpacePosition) => {
    const {row, column} = position;
    if (
      cardPositions.some(
        ({ row: existingRow, column: existingColumn }) =>
          existingRow === row && existingColumn === column
      )
    ) {
      setCardPositions((current) =>
        current.filter(
          ({ row: existingRow, column: existingColumn }) =>
            !(existingRow === row && existingColumn === column)
        )
      );
    } else {
      const newCard = {
        ...position,
        name: playerCardId,
        id: playerCardId,
      }
      setCardPositions((current) => [...current, newCard]);
    }
  };

  const gameState = {
    cardSpaces,
    cardPositions,
  };

  return (
    <GameStateContext.Provider
      value={{
        ...gameState,
        onSpaceClick,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
});

const useGameState = () => {
  const context = useContext(GameStateContext);

  if (context === undefined) {
    throw new Error('useGameEngine has to be used inside GameStateContext');
  }

  return context;
}

export { useGameState, GameStateProvider };
