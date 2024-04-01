import usePlayerStore, { PlayerState } from "../../../store/usePlayerStore";
import { Group } from "three";
import useMovement from "../../../hooks/useMovement";
import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { PlayerAnimation } from "./Player_model.interface";

type GLTFResult = GLTF & {
  nodes: {
    Beta_Joints: THREE.SkinnedMesh;
    Beta_Surface: THREE.SkinnedMesh;
    mixamorigHips: THREE.Bone;
  };
  materials: {
    Beta_Joints_MAT1: THREE.MeshStandardMaterial;
    Beta_HighLimbsGeoSG3: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

interface GLTFAction extends THREE.AnimationClip {
  name: PlayerAnimation;
}
type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<
    JSX.IntrinsicElements["skinnedMesh"] | JSX.IntrinsicElements["bone"]
  >
>;

const Player = () => {
  const {
    coordinates,
    animation: { name, previousName, length },
    playAnimation,
  } = usePlayerStore((state) => state as PlayerState);

  const player = useRef<THREE.Group>(null);

  useMovement(player, coordinates, () => playAnimation("idle", 10));

  const { nodes, materials, animations } = useGLTF(
    "./models/Player_model.glb"
  ) as GLTFResult;

  const { actions } = useAnimations(animations, player);

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
  return (
    <group ref={player} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
        </group>
        <skinnedMesh
          name="Beta_Joints"
          geometry={nodes.Beta_Joints.geometry}
          material={materials.Beta_Joints_MAT1}
          skeleton={nodes.Beta_Joints.skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <skinnedMesh
          name="Beta_Surface"
          geometry={nodes.Beta_Surface.geometry}
          material={materials.Beta_HighLimbsGeoSG3}
          skeleton={nodes.Beta_Surface.skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
    </group>
  );
};

export default Player;
