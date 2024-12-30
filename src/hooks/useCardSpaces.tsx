import { useMemo } from "react";
import { CardPosition } from './cards.interface';

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
}): {
  cardSpaces: CardPosition[]
} => {
  const cardSpaces = useMemo(() => {
    const spacesTable = new Array(rows).fill([]).map((_, i) => {
      return new Array(columns).fill(null).map((_, j) => {
        const row = i + 1;
        const column = j + 1;
        const top = row * height;
        const left = column * width;
        return {
          id: `${row}_${column}`,
          row,
          column,
          position: [top, left] as [number, number]
        };
      });
    });

    return spacesTable.flat();
  }, [rows, columns, height, width]);

  return { cardSpaces };
};

export default useCardSpaces;
