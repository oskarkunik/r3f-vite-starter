import { useMemo } from "react";
import { BoardPosition, SpacePosition } from './cards.interface';

const useCardSpaces = ({
  rows,
  columns,
  height,
  width,
  enemyRows,
}: {
  rows: number;
  columns: number;
  height: number;
  width: number;
  enemyRows: number;
}): {
  cardSpaces: SpacePosition[]
} => {
  const cardSpaces = useMemo(() => {
    const spacesTable = new Array(rows).fill([]).map((_, i) => {
      return new Array(columns).fill(null).map((_, j) => {
        const row = i + 1;
        const column = j + 1;
        const top = i * height;
        const left = j * width;
        return {
          id: `${row}_${column}`,
          row,
          column,
          position: [top, left] as [number, number],
          isPlayer: row > enemyRows
        };
      });
    });

    return spacesTable.flat();
  }, [rows, columns, height, width, enemyRows]);

  return { cardSpaces };
};

export default useCardSpaces;
