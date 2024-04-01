import React, { useState, useEffect } from "react";
import usePlayerStore, {
  PlayerState,
} from "../../../../../store/usePlayerStore";
import { Color } from "@react-three/fiber";

const COLORS = {
  DEFAULT: "#3c3e4d",
  ACTIVE: "#ffffff",
};

const Tile = ({ coordinates }: { coordinates: { x: number; z: number } }) => {
  const { x, z } = coordinates;
  const [color, setColor] = useState<Color>(COLORS.DEFAULT);
  const {
    movePlayer,
    playAnimation,
    coordinates: { x: pX, z: pZ },
  } = usePlayerStore((state) => state as PlayerState);

  const handleTileClick = () => {
    const absX = Math.abs(pX - x);
    const absZ = Math.abs(pZ - z);
    playAnimation("walking", Math.max(absX, absZ));
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
        <meshBasicMaterial color={color as Color} />
      </mesh>
    </>
  );
};

export default Tile;
