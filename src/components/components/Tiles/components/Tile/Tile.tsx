import React, { useState } from "react";

const Tile = ({ coordinates }: { coordinates: { x: number; y: number } }) => {
  const { x, y } = coordinates;
  const [color, setColor] = useState("white");

  return (
    <>
      <mesh
        onPointerEnter={() => setColor("grey")}
        onPointerLeave={() => setColor("white")}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[x, 0, y]}
      >
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </>
  );
};

export default Tile;
