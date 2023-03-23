import React, { useState, useRef, useEffect } from 'react'
import { Circle, Ring, Sphere } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader } from 'three';
import { useLoader, useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import gsap from 'gsap'
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { Canvas } from '@react-three/fiber'
import SunLight from '../sunlight';
import { Vector3 } from 'three';


export default function Test() {

    const textureGalaxy = useLoader(TextureLoader, './src/assets/img/milkyway.png');
    console.log(textureGalaxy)

    textureGalaxy.magFilter = THREE.NearestFilter;
    textureGalaxy.minFilter = THREE.NearestFilter;
    return (
        <Canvas camera={{ fov: 25, position: [0, 0, 50] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <mesh position={[0, 0, 0]} onPointerOver={() => { document.body.style.cursor = 'pointer'; }} onPointerOut={() => { document.body.style.cursor = 'auto'; }}>
                <Circle args={[5, 32]}>
                    <meshStandardMaterial map={textureGalaxy} transparent={true} doubleSide={true} />
                </Circle>
            </mesh>
        </Canvas>
    )
}