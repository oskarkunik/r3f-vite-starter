import { create } from 'zustand';

type Coordinates = { x: number, z: number }

export interface PlayerState {
  coordinates: Coordinates;
  movePlayer: (newCoordinates: Coordinates) => void;
}

const usePlayerStore = create(set => ({
  coordinates: { x: 5, z: 5 },
  movePlayer: (newCoordinates: Coordinates) =>
    set((state: PlayerState) => {
      return {
        ...state,
        coordinates: newCoordinates,
      };
    }),
}));

export default usePlayerStore;
