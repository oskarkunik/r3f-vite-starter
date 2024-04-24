import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#1c1e28"]} />
      <Experience />
      <OrbitControls />
      <axesHelper />
    </Canvas>
  );
}

export default App;
