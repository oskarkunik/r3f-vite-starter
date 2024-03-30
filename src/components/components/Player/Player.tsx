import React from "react";

const Player = () => {
  return (
    <>
      <mesh position={[1, 0.5, 1]}>
        <boxGeometry args={[0.5, 1, 0.5]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
    </>
  );
};

export default Player;
