import { create } from 'zustand';
import { PlayerAnimation } from '../components/components/Player/Player_model.interface';

type Coordinates = { x: number, z: number }

export interface PlayerState {
  coordinates: Coordinates;
  prevCoordinates: Coordinates;
  rotation: 0;
  animation: {
    name: PlayerAnimation;
    previousName: PlayerAnimation | null;
    length: number;
  };
  movePlayer: (newCoordinates: Coordinates) => void;
  playAnimation: (animationName: PlayerAnimation, animationLength: number) => void;
}

const usePlayerStore = create(set => ({
  coordinates: { x: 5, z: 5 },
  prevCoordinates: { x: 0, z: 0 },
  rotation: 0,
  animation: {
    name: "idle",
    previousName: null,
    length: 0,
  },
  movePlayer: (newCoordinates: Coordinates) =>
    set((state: PlayerState) => {
      return {
        ...state,
        coordinates: newCoordinates,
        prevCoordinates: state.coordinates,
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
