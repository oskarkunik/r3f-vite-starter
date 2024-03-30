import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import React from "react";

function App() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#1c1e28"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
