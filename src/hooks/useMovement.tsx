import { useFrame } from "@react-three/fiber";
import { Group, Vector3 } from "three";

const useMovement = (
  refTarget: React.RefObject<Group>,
  newCoordinates: { x: number; z: number },
  onFinished: () => void
) => {
  const { x, z } = newCoordinates;
  useFrame(({ clock }) => {
    const currentX = refTarget.current?.position.x as number;
    const currentZ = refTarget.current?.position.z as number;
    if (Math.abs(currentX - x) > 0.1 || Math.abs(currentZ - z) > 0.1) {
      refTarget.current?.position.lerp(
        new Vector3(x, 0, z),
        0.2 / (10 > 0 ? 10 : 1)
      );
    }
    if (Math.abs(currentX - x) < 0.1 && Math.abs(currentZ - z) < 0.1) {
      refTarget.current?.position.set(x, 0, z);
    }
    if (Math.abs(currentX - x) < 0.3 && Math.abs(currentZ - z) < 0.3) {
      onFinished();
    }
  });
};

export default useMovement;
