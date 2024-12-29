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
    column,
    position,
  }: {
    row: number;
    column: number;
    position: [number, number];
  }) => void;
}) => {
  const spaces = useMemo(() => {
    const rowArrays = new Array(rows).fill([]);

    const spacesTable = rowArrays.map((_, i) => {
      const columnPositions = new Array(columns).fill(null).map((_, j) => {
        const top = (i + 1) * height;
        const left = -(j + 1) * width;
        return (
          <CardSpace
            key={`space_${i + 1}_${j + 1}`}
            position={[top, 0, left]}
            scale={[height, width]}
            onClick={() =>
              onSpaceClick({
                row: i + 1,
                column: j + 1,
                position: [top, left],
              })
            }
          />
        );
      });

      return columnPositions;
    });

    return spacesTable;
  }, [rows, columns, height, width]);

  return spaces;
};

export default useCardSpaces;
