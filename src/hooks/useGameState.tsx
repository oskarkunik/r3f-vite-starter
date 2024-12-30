import React, { createContext, useContext, useState } from "react";
import useCardSpaces from './useCardSpaces';
import { CardPosition } from './cards.interface';

const CONFIG = {
  BOARD: {
    ROWS: 2,
    COLUMNS: 4,
  },
  CARD_SPACE: {
    HEIGHT: 3.4,
    WIDTH: 2,
  },
};

const GameStateContext = createContext<
  | {
      cardPositions: CardPosition[];
      onSpaceClick: ({
        row,
        column,
        position,
      }: {
        row: number;
        column: number;
        position: [number, number];
      }) => void;
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
  })

  const onSpaceClick = ({
    row,
    column,
    position,
  }: {
    row: number;
    column: number;
    position: [number, number];
  }) => {
    const positionId = `${row}_${column}`;
    if (cardPositions.some(({ id }) => id === positionId)) {
      setCardPositions((current) => current.filter(({ id }) => id !== positionId));
    } else {
      setCardPositions((current) => [
        ...current,
        {
          id: positionId,
          row,
          column,
          position,
        },
      ]);
    }
  };

  const gameState = {
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
