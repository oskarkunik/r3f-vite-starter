import React, { useState } from "react";
import usePlayerStore, { PlayerState } from "@/store/usePlayerStore";

const COLORS = {
  DEFAULT: "#3c3e4d",
  ACTIVE: "#ffffff",
};

const Tile = ({ coordinates }: { coordinates: { x: number; y: number } }) => {
  const { x, z } = coordinates;
  const [color, setColor] = useState(COLORS.DEFAULT);
  const movePlayer = usePlayerStore(
    (state) => (state as PlayerState).movePlayer
  );

  const handleTileClick = () => {
    movePlayer(coordinates);
  };

  return (
    <>
      <mesh
        onPointerEnter={() => setColor(COLORS.ACTIVE)}
        onPointerLeave={() => setColor(COLORS.DEFAULT)}
        onClick={handleTileClick}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[x, 0, z]}
      >
        <planeGeometry args={[0.95, 0.95]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </>
  );
};

export default Tile;
