import { create } from 'zustand';

export interface GlobalUIState {
  isOverDraggableElement: boolean;
  setIsOverDraggableElement: (isOverDraggableElement: boolean) => void;
  isDragging: boolean;
  setIsDragging: (isDragging: boolean) => void;
  openElementIds: number[];
  setOpenElementIds: (ids: number | number[]) => void;
};

const useGlobalUIState = create(set => ({
  isOverDraggableElement: false,
  setIsOverDraggableElement: (isOverDraggableElement: boolean) => set((state: GlobalUIState) => ({...state, isOverDraggableElement })),
  isDragging: false,
  setIsDragging: (isDragging: boolean) => set((state: GlobalUIState) => ({ ...state, isDragging })),
  openElementIds: [],
  setOpenElementIds: (ids: number | number[]) => set((state: GlobalUIState) => ({
      ...state,
      openElementIds: Array.isArray(ids) ? ids : [ids],
    }),
  ),
}));

export default useGlobalUIState;



