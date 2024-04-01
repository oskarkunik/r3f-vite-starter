import React from "react";
import usePlayerStore, { PlayerState } from "../../../store/usePlayerStore";

const Player = () => {
  const { x, z } = usePlayerStore(
    (state) => (state as PlayerState).coordinates
  );
  return (
    <>
      <mesh position={[x, 0.5, z]}>
        <boxGeometry args={[0.5, 1, 0.5]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
    </>
  );
};

export default Player;
