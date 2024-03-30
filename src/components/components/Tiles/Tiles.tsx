import React, { useMemo } from "react";
import Tile from "./components/Tile";

const Tiles = ({ mapSize }: { mapSize: number }) => {
  const offset = -mapSize / 2 + 0.5;
  const tileMap = useMemo(() => {
    const widthArray = [...Array(mapSize).keys()];
    const heightArray = [...Array(mapSize).keys()];

    return widthArray.map((widthPosition: number) => {
      return heightArray.map((heightPosition: number) => {
        return <Tile coordinates={{ x: widthPosition, y: heightPosition }} />;
      });
    });
  }, []);
  return <mesh position={[offset, 0, offset]}>{tileMap}</mesh>;
};

export default Tiles;
