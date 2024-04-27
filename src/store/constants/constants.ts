import { InventoryItem, InventoryItemType } from '@/@types/Inventory';

export const CUSTOM_EVENTS = {
  INVENTORY_UPDATED: {
    name: 'inventoryUpdated',
  },
  INVENTORY_INIT: {
    name: 'inventoryInit',
  },
  INVENTORY_INIT_RECEIVED: {
    name: 'inventoryInitReceived',
  },
  DRAGGING_FINISHED: {
    name: 'draggingFinished'
  },
  DRAGGING_IN_PROGRESS: {
    name: 'draggingInProgress'
  },
  MOUSE_OVER_STATIC_UI: {
    name: 'mouseOverStaticUi'
  },
  MOUSE_OFF_STATIC_UI: {
    name: 'mouseOffStaticUi'
  },
  COLLAPSE_OPEN_UI: {
    name: 'collapseOpenUi'
  }
} as const;

export const ITEMS: Record<InventoryItemType, InventoryItem> = {
  TEST: {
    type: 'TEST',
    name: 'Test Item',
    description: 'Some description',
    icon: 'TEST', // Redundant, but may be useful when many items share same icon
    count: 1,
  },
  BATTERY: {
    type: 'BATTERY',
    name: 'Battery',
    description: 'Works for a bit, then dies.',
    icon: 'BATTERY',
    count: 5,
  },
} as const;

export const PLACES = {
  HOME: {
    id: 0, // TODO: This should be added by genertor pushing places to global var. If HOME already exists, increment
    position: [1, 0.1, 1],
    icon: 'HOME',
    name: "Home",
    description: "This is a home description."
  },
  SHOP: {
    id: 1, // TODO: This should be added by genertor pushing places to global var. If HOME already exists, increment
    position: [-2, 0.1, 1],
    icon: 'SHOP',
    name: "Shop",
    description: "This is a shop description."
  }
} as const;
