
type InventoryItemType = 'TEST' | 'BATTERY';
type InventoryItemName = string;
type InventoryItemIcon = InventoryItemType;
type InventoryItemCount = number;
type InventoryItemDescription = string;

export interface InventoryItem {
  name: InventoryItemName;
  icon: InventoryItemIcon;
  count: InventoryItemCount;
  type: InventoryItemType;
  description: InventoryItemDescription;
}
