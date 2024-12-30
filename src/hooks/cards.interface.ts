export type BoardPosition = {
  row: number;
  column: number;
  position: [number, number];
}

export type SpacePosition = BoardPosition & {
  isPlayer: boolean;
}

export type CardProperties = {
  properties?: {
    power?: number;
    health?: number;
  }
}

export type CardID = string;

export type CardPosition = SpacePosition & {
  name: string;
  id: CardID;
} & Partial<CardProperties>;
