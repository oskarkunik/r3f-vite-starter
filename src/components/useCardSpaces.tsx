import React from "react";
import CardSpace from "./CardSpace";

const useCardSpaces = ({
  rows,
  columns,
  height,
  width,
}: {
  rows: number;
  columns: number;
  height: number;
  width: number;
}) => {
  return (
    <CardSpace
      position={[4, 0, 4]}
      scale={[height, width]}
    />
  );
};

export default useCardSpaces;
