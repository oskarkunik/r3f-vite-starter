import React from "react";
import Tiles from "./components/Tiles";
import Player from "./components/Player";
const MAP_SIZE = 8;

export const Experience = () => {
  const offset = -MAP_SIZE / 2 + 0.5;

  return (
    <group position={[offset, 0, offset]}>
      <ambientLight />
      <Tiles mapSize={MAP_SIZE} />
      <Player />
    </group>
  );
};
