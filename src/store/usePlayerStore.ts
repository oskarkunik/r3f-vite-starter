import { create } from 'zustand';
import { PlayerAnimation } from '../components/components/Player/Player_model.interface';

type Coordinates = { x: number, z: number }

export type Direction = {
  axis: 'x' | 'z';
  negative: boolean;
};

export type Move = {
  id: string;
  animation: {
    name: string;
    duration: number;
  };
  directions: Direction[];
  length: number;
};

export interface PlayerState {
  coordinates: Coordinates;
  rotation: 0;
  animation: {
    name: PlayerAnimation;
    previousName: PlayerAnimation | null;
    length: number;
  };
  movePlayer: (newCoordinates: Coordinates) => void;
  playAnimation: (animationName: PlayerAnimation, animationLength: number) => void;
  moves: Move[];
  currentMove: Move['id'];
  currentDirection: Direction;
}

const usePlayerStore = create(set => ({
  coordinates: { x: 5, z: 5 },
  rotation: 0,
  animation: {
    name: "idle",
    previousName: null,
    length: 0,
  },
  currentDirection: {
    axis: 'x',
    negative: false,
  },
  moves: [
    {
      id: 'stand',
      animation: {
        name: 'idle',
        duration: 0,
      },
      directions: [],
      length: 0
    },
    {
      id: 'walk2',
      animation: {
        name: 'walk',
        duration: 3,
      },
      directions: [{
        axis: 'x',
        negative: false,
      }, {
        axis: 'z',
        negative: false,
      }, {
        axis: 'x',
        negative: true,
      }, {
        axis: 'z',
        negative: true,
      }],
      length: 2
    }
  ],
  currentMove: 'stand',
  movePlayer: (newCoordinates: Coordinates) =>
    set((state: PlayerState) => {
      return {
        ...state,
        coordinates: newCoordinates,
      };
    }),
  playAnimation: (animationName: PlayerAnimation, animationLength: number) =>
    set((state: PlayerState) => {
      return {
        ...state,
        animation: {
          ...state.animation,
          length: animationLength,
          previousName: state.animation.name,
          name: animationName
        },
      };
    }),
}));

export default usePlayerStore;
