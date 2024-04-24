import Player from './components/Player';

const PlayerField = () => {
  return (
    <group position={[0, 0, 0]}>
      <Player />
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 1]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
};

export default PlayerField;
