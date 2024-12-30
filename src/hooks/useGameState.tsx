import React, { createContext, useContext, useState } from "react";
import useCardSpaces from './useCardSpaces';
import { BoardPosition, CardPosition, SpacePosition } from './cards.interface';
import { button, useControls } from "leva";

import { CONFIG, CARDS } from '../constants';

const GameStateContext = createContext<
  | {
      cardPositions: CardPosition[];
      cardSpaces: SpacePosition[];
      placeCard: (position: SpacePosition) => void;
    }
  | undefined
>(undefined);

const GameStateProvider = (({children}) => {
  const { playerCardId, isPlayerTurn } = useControls("Player", {
    isPlayerTurn: true,
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

  const placeCard = (position: SpacePosition) => {
    if (
      (isPlayerTurn && !position.isPlayer) ||
      (!isPlayerTurn && position.isPlayer)
    ) {
      console.log("Space belongs to other player, not placing card");
      return;
    }

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
      const cardConfig = CARDS.find(({id}) => playerCardId === id);
      if (!cardConfig) {
        throw new Error(`Card ${playerCardId} not found!`)
      }
      const newCard = {
        ...position,
        ...cardConfig
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
        placeCard,
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
