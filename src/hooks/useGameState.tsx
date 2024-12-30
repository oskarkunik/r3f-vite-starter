import React, { createContext, useContext, useState } from "react";
import useCardSpaces from './useCardSpaces';
import { BoardPosition, CardPosition, SpacePosition } from './cards.interface';

import { CONFIG } from '../constants';

const GameStateContext = createContext<
  | {
      cardPositions: CardPosition[];
      cardSpaces: SpacePosition[];
      onSpaceClick: (position: CardPosition) => void;
    }
  | undefined
>(undefined);

const GameStateProvider = (({children}) => {
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

  const onSpaceClick = (position: CardPosition) => {
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
      setCardPositions((current) => [...current, position]);
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
