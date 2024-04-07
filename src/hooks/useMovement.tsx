import { useFrame } from "@react-three/fiber";
import { Group, Vector3 } from "three";
import { Direction, Move } from "../store/usePlayerStore";
import { useAnimations } from "@react-three/drei";
import { useEffect } from "react";

const useMovement = (
  refTarget: React.RefObject<Group>,
  move: Move | null,
  direction: Direction,
  animations: THREE.AnimationClip[]
) => {
  if (!move) {
    return;
  }
  const currentX = refTarget.current?.position.x;
  const currentZ = refTarget.current?.position.z;
  const {
    length,
    animation: { name },
  } = move;

  const { actions } = useAnimations(animations, refTarget);

  const calculateNewValue = (current, length, { axis, negative }) =>
    current + (negative ? -1 * length : length);

  const targetPosition = {
    x: calculateNewValue(currentX, length, direction),
    z: calculateNewValue(currentZ, length, direction),
  };

  useEffect(() => {
    if (!actions) {
      return;
    }
    if (previousName && name !== previousName) {
      actions[previousName]?.fadeOut(0.1);
    }
    actions[name]?.reset();
    actions[name]?.play();
  }, [name, previousName]);

  useFrame(({ clock }) => {
    // if (Math.abs(currentX - x) > 0.1 || Math.abs(currentZ - z) > 0.1) {
    //   refTarget.current?.position.lerp(
    //     new Vector3(x, 0, z),
    //     0.2 / (10 > 0 ? 10 : 1)
    //   );
    // }
    // if (Math.abs(currentX - x) < 0.1 && Math.abs(currentZ - z) < 0.1) {
    //   refTarget.current?.position.set(x, 0, z);
    // }
    // if (Math.abs(currentX - x) < 0.3 && Math.abs(currentZ - z) < 0.3) {
    //   onFinished();
    // }
  });
};

export default useMovement;
