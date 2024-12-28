import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useControls } from "leva";
import React from "react";

function App() {
  const { exampleValue } = useControls({ exampleValue: "#ececec" });

  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={[exampleValue]} />
      <Experience />
    </Canvas>
  );
}

export default App;
