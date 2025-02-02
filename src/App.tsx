import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useControls } from "leva";
import React from "react";
import { Environment } from "@react-three/drei";


function App() {
  const { exampleValue } = useControls({ exampleValue: "#000" });

  return (
    // <Canvas shadows camera={{ position: [1, 0, 0], fov: 30 }}>
    <Canvas shadows orthographic camera={{ zoom: 80 }}>
      <Environment preset="forest" />
      <color attach="background" args={[exampleValue]} />
      <Experience />
    </Canvas>
  );
}

export default App;
