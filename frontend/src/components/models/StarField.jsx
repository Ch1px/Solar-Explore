import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Starfield = () => {
    const stars = useRef()
    const positions = new Array(5000)
      .fill()
      .map(() => [
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
      ])
  
    const geometry = new THREE.BufferGeometry(1,20,20)
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions.flat(), 3))
  
    useFrame(() => {
      stars.current.rotation.x += 0.001
    })
  
    return (
      <points ref={stars}>
        <bufferGeometry attach="geometry" {...geometry} />
        <pointsMaterial attach="material" size={3} sizeAttenuation color="white" />
      </points>
    )
  }
  
  export default Starfield
