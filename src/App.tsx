import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import React from "react";
import { Environment } from "@react-three/drei";
import { GameStateProvider } from './components/useGameState';

function App() {

  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <GameStateProvider>
        <Environment preset="forest" />
        <color attach="background" args={["#242424"]} />
        <Experience />
      </GameStateProvider>
    </Canvas>
  );
}

export default App;
