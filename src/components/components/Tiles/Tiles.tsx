import { OrbitControls } from "@react-three/drei";
import React, { useMemo } from "react";
import Tile from "./components/Tile";
const MAP_SIZE = 5;

const Tiles = ({ mapSize }: { mapSize: number }) => {
  const tileMap = useMemo(() => {
    const widthArray = [...Array(mapSize).keys()];
    const heightArray = [...Array(mapSize).keys()];

    return widthArray.map((widthPosition: number) => {
      return heightArray.map((heightPosition: number) => {
        return <Tile coordinates={{ x: widthPosition, y: heightPosition }} />;
      });
    });
  }, []);
  return <mesh>{tileMap}</mesh>;
};

export default Tiles;
