import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import React from "react";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 2], fov: 30 }}>
      <color attach="background" args={["#20222b"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
