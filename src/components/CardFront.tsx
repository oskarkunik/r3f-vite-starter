/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial } from 'three';
import { Vector3 } from '@react-three/fiber';

const cardMaterial = new MeshStandardMaterial({
  color: 'white',
});

const imageMaterial = new MeshStandardMaterial({
  color: "teal",
});


const CardFront = ({
  position,
  cardScale,
}: {
  position: Vector3
  cardScale: Vector3,
}) => {
  const { nodes } = useGLTF("/src/assets/objects/card-straight-front.glb");
  return (
    <group position={position} dispose={null}>
      <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={cardScale}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube002 as Mesh).geometry}
          material={cardMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube002_1 as Mesh).geometry}
          material={imageMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube002_2 as Mesh).geometry}
          material={cardMaterial}
        />
      </group>
    </group>
  );
}

export default CardFront;

useGLTF.preload("/src/assets/objects/card-straight-front.glb");