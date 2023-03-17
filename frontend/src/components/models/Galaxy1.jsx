/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 galaxy1.gltf --transform
Author: 991519166 (https://sketchfab.com/991519166)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/galaxy-dbb2f075329747a09cc8add2ad05acad
Title: Galaxy
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/src/assets/models/galaxy1-transformed.glb')
  const { actions } = useAnimations(animations, group)

  useFrame(() => {
    group.current.rotation.y += 0.002;
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.06}>
          <group name="a76a404306c24e12b5edf6421ae7203ffbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Galaxy" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh name="Galaxy_Material_#65_0" geometry={nodes['Galaxy_Material_#65_0'].geometry} material={materials.Material_65} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/galaxy1-transformed.glb')