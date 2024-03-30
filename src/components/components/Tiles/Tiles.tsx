import React, { useMemo } from "react";
import Tile from "./components/Tile";

const Tiles = ({ mapSize }: { mapSize: number }) => {
  const tileMap = useMemo(() => {
    const widthArray = [...Array(mapSize).keys()];
    const heightArray = [...Array(mapSize).keys()];

    return widthArray.map((widthPosition: number) => {
      return heightArray.map((heightPosition: number) => {
        return (
          <Tile
            coordinates={{ x: widthPosition, z: heightPosition }}
            key={`${widthPosition}_${heightPosition}`}
          />
        );
      });
    });
  }, []);
  return <mesh>{tileMap}</mesh>;
};

export default Tiles;
