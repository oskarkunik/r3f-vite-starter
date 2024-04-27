import { create } from 'zustand';
import { InventoryItem } from '../@types/Inventory';

export interface GlobalUIState {
  draggedElementType: InventoryItem["type"] | null;
  setDraggedElementType: (type: InventoryItem['type'] | null) => void;
};

const useGlobalUIState = create((set) => ({
  draggedElementType: null,
  setDraggedElementType: (draggedElementType: InventoryItem["type"] | null) =>
    set((state: GlobalUIState) => ({ ...state, draggedElementType })),
}));

export default useGlobalUIState;



