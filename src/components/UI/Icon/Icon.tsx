import './Icon.scss';
import iconTest from '@/assets/icons/3d-select-edge.svg';
import iconBattery from '@/assets/icons/battery-full.svg';
import iconHome from '@/assets/icons/home-simple.svg';
import iconShop from '@/assets/icons/small-shop.svg';
import { InventoryItemIcon } from '@/@types/Inventory';
import { PlaceIcon } from '@/@types/Places';
import useDragAndDrop from '@/hooks/useDragAndDrop';

const ICONS: Record<InventoryItemIcon | PlaceIcon, string> = {
  TEST: iconTest,
  BATTERY: iconBattery,
  HOME: iconHome,
  SHOP: iconShop,
};

const Icon = ({
  icon,
  handleClick,
  additionalClassName,
  isDraggable,
}: {
  icon: PlaceIcon | InventoryItemIcon;
  handleClick?: () => void;
  additionalClassName?: string;
  isDraggable?: boolean;
}) => {
  const {onDrag, onDragEnd} = useDragAndDrop();
  return (
    <div
      onClick={handleClick}
      draggable={isDraggable}
      className={`icon ${additionalClassName}`}
      onDragStart={isDraggable ? onDrag : undefined}
      onDragEnd={onDragEnd}
      data-name={icon}
    >
      <img draggable="false" src={ICONS[icon]} />
    </div>
  );
};

export default Icon;
