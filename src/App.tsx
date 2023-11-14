import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import React from "react";

function App() {
  return (
    <Canvas shadows camera={{ position: [-17, 31, 33], fov: 45 }}>
      <color attach="background" args={["#ffeecc"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
