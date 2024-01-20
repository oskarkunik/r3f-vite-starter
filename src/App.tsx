import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import React from "react";

function App() {
  return (
    <Canvas shadows camera={{ position: [15, 15, 15], fov: 30 }}>
      <color attach="background" args={["#222222"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
