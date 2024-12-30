export type BoardPosition = {
  id: string;
  row: number;
  column: number;
  position: [number, number];
}

export type SpacePosition = BoardPosition & {
  isPlayer: boolean,
}

export type CardPosition = SpacePosition & {
  name: string,
}
