import './Icon.scss';
import iconTest from '@/assets/icons/3d-select-edge.svg';
import iconBattery from '@/assets/icons/battery-full.svg';
import iconHome from '@/assets/icons/home-simple.svg';
import iconShop from '@/assets/icons/small-shop.svg';
import { InventoryItemIcon } from '@/@types/Inventory';
import { PlaceIcon } from '@/@types/Places';
import useDragAndDrop from '@/hooks/useDragAndDrop';
import useMousePosition from '/src/hooks/useMousePosition';
import { useEffect, useMemo, useRef, useState } from 'react';


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
  const { x, y } = useMousePosition();
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
      return ({
        x: 0,
        y: 0,
      })
    }
  }, [iconRef.current, x, y])


  useEffect(() => {
    // console.log(x,y)
  }, [x, y])
  return (
    <div
      ref={iconRef}
      onClick={handleClick}
      draggable={isDraggable}
      className={`icon ${additionalClassName}`}
      // onDragStart={isDraggable ? onDrag : undefined}
      // onDragEnd={onDragEnd}
      onClickCapture={
        isDragging ? () => setIsDragging(false) : () => setIsDragging(true)
      }
      // onMouseUpCapture={() => setIsDragging(false)}
      data-name={icon}
      style={{
        left: isDragging ? `${calculatedX}px` : 0,
        top: isDragging ? `${calculatedY}px` : 0,
        transform: isDragging ? `scale(2)` : 'scale(1)'
      }}
    >
      <img draggable="false" src={ICONS[icon]} />
    </div>
  );
};

export default Icon;
