import './BottomBar.scss';
import InventoryContainer from '../InventoryContainer';
import { Html } from '@react-three/drei';

const BottomBar = () => {
  return (
  <Html wrapperClass="layout-bottom-bar-wrapper" zIndexRange={[101, 100]}>
    <div className="layout-bottom-bar bar dark-blur">
      <InventoryContainer />
    </div>
  </Html>
)};
export default BottomBar;
