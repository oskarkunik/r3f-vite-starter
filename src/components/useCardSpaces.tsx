import React, { useMemo } from "react";
import CardSpace from "./CardSpace";

const useCardSpaces = ({
  rows,
  columns,
  height,
  width,
  onSpaceClick,
}: {
  rows: number;
  columns: number;
  height: number;
  width: number;
  onSpaceClick: ({
    row,
    column
  }: {
    row: number,
    column: number
  }) => void;
}) => {
  const spaces = useMemo(() => {
    const rowArrays = new Array(rows).fill([]);

    const spacesTable = rowArrays.map((_, i) => {
      const columnPositions = new Array(columns).fill(null).map((_, j) => (
        <CardSpace
          position={[(i + 1) * height, 0, -(j + 1) * width]}
          scale={[height, width]}
          onClick={() =>
            onSpaceClick({
              row: i + 1,
              column: j + 1,
            })
          }
        />
      ));

      return columnPositions;
    });

    return spacesTable;
  }, [rows, columns, height, width])

  return (spaces);
};

export default useCardSpaces;
