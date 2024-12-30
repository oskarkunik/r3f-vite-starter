import React, { createContext, useContext } from "react";

const GameStateContext = createContext({});

const GameStateProvider = (({children}) => {
  const gameState = {
    foo: true
  };

  return (
    <GameStateContext.Provider
      value={{
        ...gameState,
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
