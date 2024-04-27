import './Icon.scss';
import iconTest from '@/assets/icons/3d-select-edge.svg';
import iconBattery from '@/assets/icons/battery-full.svg';
import iconHome from '@/assets/icons/home-simple.svg';
import iconShop from '@/assets/icons/small-shop.svg';
import { InventoryItem, InventoryItemIcon } from '@/@types/Inventory';
import { PlaceIcon } from '@/@types/Places';
import useMousePosition from '/src/hooks/useMousePosition';
import { BaseSyntheticEvent, useMemo, useRef, useState } from 'react';
import useGlobalUIState, { GlobalUIState } from '/src/store/useGlobalUiState';


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
  type,
}: {
  icon: PlaceIcon | InventoryItemIcon;
  handleClick?: () => void;
  additionalClassName?: string;
  isDraggable?: boolean;
  type: InventoryItem["type"];
}) => {
  const { x, y } = useMousePosition();
  const setDraggedElementType = useGlobalUIState(
    (state) => (state as GlobalUIState).setDraggedElementType
  );
  // const {onDrag, onDragEnd} = useDragAndDrop();
  const iconRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const ICON_OFFSET = 25;

  const { x: calculatedX, y: calculatedY } = useMemo(() => {
    if (iconRef.current) {
      const { x: parentX, y: parentY } = (
        iconRef.current.parentNode as HTMLDivElement
      ).getBoundingClientRect();
      return {
        x: x - parentX - ICON_OFFSET,
        y: y - parentY - ICON_OFFSET,
      };
    } else {
      return {
        x: 0,
        y: 0,
      };
    }
  }, [iconRef.current, x, y]);

  const onCustomDragStart = () => {
    if (isDragging) {
      return;
    }
    setIsDragging(true);
    setDraggedElementType(type);
  }

  const onCustomDragEnd = (e: BaseSyntheticEvent) => {
    if (!isDragging) {
      return;
    }
    setIsDragging(false);
    setDraggedElementType(null);
  };

  return (
    <div
      ref={iconRef}
      className={`icon ${additionalClassName}`}
      onClick={onCustomDragStart}
      onAuxClick={(e) => onCustomDragEnd(e)}
      data-name={icon}
      style={{
        left: isDragging ? `${calculatedX}px` : 0,
        top: isDragging ? `${calculatedY}px` : 0,
        transform: isDragging ? `scale(2)` : "scale(1)",
        cursor: isDragging ? 'grabbing' : 'pointer'
      }}
    >
      <img draggable="false" src={ICONS[icon]} />
    </div>
  );
};

export default Icon;
