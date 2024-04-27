import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience/Experience";
import { BottomBar } from './components/UI';
import "./styles/constants.scss";
import "./styles/layout.scss";
import OrbitControlsCustom from './components/OrbitControlsCustom';

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#1c1e28"]} />
        <BottomBar />
        <Experience />
        <OrbitControlsCustom />
        <axesHelper />
      </Canvas>
    </div>
  );
}

export default App;
