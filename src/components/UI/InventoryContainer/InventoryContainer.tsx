import './InventoryContainer.scss';
import Icon from '../Icon';
import useInventoryStore, { InventoryState } from '@/store/useInventoryStore'

const InventoryContainer = () => {
  const inventory = useInventoryStore(state => (state as InventoryState).inventory);

  return (
    <div
      className="inventory-container dark-blur"
    >
      {inventory.map(({ icon, count }) => (
        <div key={icon as string} className="item">
          {count > 1 && <div className="item-count">{count}</div>}
          <Icon icon={icon} isDraggable={true} />
        </div>
      ))}
    </div>
  );
};
export default InventoryContainer;
