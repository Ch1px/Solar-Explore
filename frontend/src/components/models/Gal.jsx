/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 gal.gltf --transform
Author: Jésahel (https://sketchfab.com/jesahel-benoist)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/galaxy-373593ec16d94f58beb412bf90bfcc08
Title: Galaxy
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/src/assets/models/gal-transformed.glb')
  return (
    <group ref={groupRef} onClick={handleOpenPlanets} position={props.position} {...props} dispose={null} onPointerOver={() => { document.body.style.cursor = 'pointer'; }} onPointerOut={() => { document.body.style.cursor = 'auto'; }}>
      <group position={[-0.85, 11.24, 0]} rotation={[-Math.PI / 2, -0.11, 0]} scale={0.004}>
        <points geometry={nodes.Object_2.geometry} material={materials.nuages} />
        <points geometry={nodes.Object_3.geometry} material={materials.nuages} />
      </group>
    </group>
  )
}

useGLTF.preload('/src/assets/models/gal-transformed.glb')
