import { CardID, CardProperties } from './hooks/cards.interface';

export const CONFIG = {
  BOARD: {
    ROWS: 2,
    COLUMNS: 4,
    ENEMY_ROWS: 1,
  },
  CARD_SPACE: {
    HEIGHT: 3,
    WIDTH: 2,
  },
  CARD: {
    OFFSET_TOP: 0.01,
    BOARD_SCALE: 0.9
  }
};

export const CARDS: {
  name: string;
  id: CardID;
  properties?: {
    power?: number;
    health?: number;
  }
}[] = [
  {
    name: 'Pafnucek',
    id: 'foo',
    properties: {
      power: 3,
      health: 3,
    }
  },
  {
    name: 'Kalasanty',
    id: 'bar',
    properties: {
      power: 4,
      health: 2,
    }
  },
  {
    name: 'Świnia',
    id: 'baz',
    properties: {
      power: 1,
      health: 6,
    }
  }
]
