import { create } from 'zustand';

import { ITEMS } from './constants/constants';
import { InventoryItem, InventoryItemType } from '@/@types/Inventory';

export const initialInventory = (): InventoryItem[] => [ITEMS.TEST, ITEMS.BATTERY];

export interface InventoryState {
  inventory: InventoryItem[];
  removeItem: (typeToRemove: InventoryItemType, removeCount?: number) => void;
  addItem: (typeToAdd: InventoryItemType, addCount?: number) => void;
}

const useInventoryStore = create(set => ({
  inventory: initialInventory(),
  removeItem: (typeToRemove: InventoryItemType, removeCount: number = 1) =>
    set((state: InventoryState) => {
      const { inventory: currentInventory } = state as InventoryState;
      if (Array.isArray(currentInventory)) {
        const itemToRemove = currentInventory.find(({ type }) => type === typeToRemove);

        if (itemToRemove) {
          const newInventory = currentInventory.filter(
            ({ type }) => type !== typeToRemove
          );
          if (itemToRemove.count > removeCount) {
            // decrease count for item
            return {
              ...state,
              inventory: [
                ...newInventory,
                { ...itemToRemove, count: itemToRemove.count - removeCount },
              ] as InventoryItem[],
            };
          } else {
            // removeCount too big, just remove entire item
            return {
              ...state,
              inventory: newInventory as InventoryItem[],
            };
          }
        }
      }
    }),
  addItem: (typeToAdd:InventoryItemType, addCount: number = 1) => set((state: InventoryState) => {
    const { inventory: currentInventory } = state as InventoryState;
    if (Array.isArray(currentInventory)) {
      const itemToAdd: InventoryItem = ITEMS[typeToAdd] as InventoryItem;
      if (itemToAdd) {
        const existingItem = currentInventory.find(
          ({ type }) => type === typeToAdd
        );
        const newInventory = currentInventory.filter(
          ({ type }) => type !== typeToAdd
        );
        if (existingItem) {
          // increase count for item
          return {
            ...state,
            inventory: [
              ...newInventory,
              { ...existingItem, count: existingItem.count + addCount },
            ] as InventoryItem[],
          };
        } else {
          // removeCount too big, just remove entire item
          return {
            ...state,
            inventory: [
              ...newInventory,
              { ...itemToAdd, count: addCount },
            ] as InventoryItem[],
          };
        }
      }
    }
  }),
}));

export default useInventoryStore;
