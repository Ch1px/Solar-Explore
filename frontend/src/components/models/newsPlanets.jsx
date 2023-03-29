import React, { useEffect, useRef } from "react";
import { Ring, Sphere } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber'
import gsap from 'gsap'
import MercTexture from '/src/assets/img/700_mercMap.jpg'
import VenTexture from '/src/assets/img/700_venus_atmosphere.jpg'
import EarthTexture from '/src/assets/img/2k_earth.jpg'
import MarsTexture from '/src/assets/img/2k_mars.jpg'
import JupiterTexture from '/src/assets/img/2k_jupiter.jpeg'
import SaturnTexture from '/src/assets/img/700_saturn.jpg'
import SatRingTexture from '/src/assets/img/Ring2.png';
import UraTexture from '/src/assets/img/uranus.png'
import NepTexture from '/src/assets/img/700_neptuneTexture.jpg'



const NewsPlanets = () => {
    const planetsRef = useRef()

    const saturnTextureRing = useLoader(TextureLoader, SatRingTexture);

    const saturnRingMaterial = new THREE.MeshBasicMaterial({
        map: saturnTextureRing,
        transparent: true,
        side: THREE.DoubleSide,
    });

    useFrame(() => {
        planetsRef.current.rotation.y += 0.002
    });
    return (
        <group ref={planetsRef}>
            <mesh position={[0, -10, 0]} onPointerOver={(e) => e.object.scale.set(0.3, 0.3, 0.3)} onPointerOut={(e) => e.object.scale.set(0.2, 0.2, 0.2)}>
                <Sphere args={[1, 25, 25]} scale={0.2}>
                    <meshStandardMaterial map={useLoader(THREE.TextureLoader, MercTexture)} />
                </Sphere>
            </mesh>
            <mesh position={[0, -8, 0]} onPointerOver={(e) => e.object.scale.set(0.5, 0.5, 0.5)} onPointerOut={(e) => e.object.scale.set(0.4, 0.4, 0.4)}>
                <Sphere args={[1, 25, 25]} scale={0.4}>
                    <meshStandardMaterial map={useLoader(THREE.TextureLoader, VenTexture)} />
                </Sphere>
            </mesh>
            <mesh position={[0, -5.4, 0]} onPointerOver={(e) => e.object.scale.set(0.6, 0.6, 0.6)} onPointerOut={(e) => e.object.scale.set(0.5, 0.5, 0.5)}>
                <Sphere args={[1, 25, 25]} scale={0.5}>
                    <meshStandardMaterial map={useLoader(THREE.TextureLoader, EarthTexture)} />
                </Sphere>
            </mesh>
            <mesh position={[0, -3, 0]} onPointerOver={(e) => e.object.scale.set(0.4, 0.4, 0.4)} onPointerOut={(e) => e.object.scale.set(0.3, 0.3, 0.3)}>
                <Sphere args={[1, 25, 25]} scale={0.3}>
                    <meshStandardMaterial map={useLoader(THREE.TextureLoader, MarsTexture)} />
                </Sphere>
            </mesh>
            <mesh position={[0, 0, 0]} onPointerOver={(e) => e.object.scale.set(1.0, 1.0, 1.0)} onPointerOut={(e) => e.object.scale.set(0.9, 0.9, 0.9)}>
                <Sphere args={[1, 25, 25]} scale={0.9}>
                    <meshStandardMaterial map={useLoader(THREE.TextureLoader, JupiterTexture)} />
                </Sphere>
            </mesh>
            <mesh position={[0, 4, 0]} onPointerOver={(e) => e.object.scale.set(0.7, 0.7, 0.7)} onPointerOut={(e) => e.object.scale.set(0.6, 0.6, 0.6)}>
                <Sphere args={[1, 25, 25]} scale={0.6}>
                    <meshStandardMaterial map={useLoader(THREE.TextureLoader, SaturnTexture)} />
                </Sphere>   
            </mesh>
            <Ring args={[1, 3.4, 15]} position={[0, 4, 0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]} material={saturnRingMaterial} scale={0.5} />
            <mesh position={[0, 7, 0]} onPointerOver={(e) => e.object.scale.set(0.6, 0.6, 0.6)} onPointerOut={(e) => e.object.scale.set(0.5, 0.5, 0.5)}>
                <Sphere args={[1, 25, 25]} scale={0.5}>
                    <meshStandardMaterial map={useLoader(THREE.TextureLoader, UraTexture)} />
                </Sphere>
            </mesh>
            <mesh position={[0, 10, 0]} onPointerOver={(e) => e.object.scale.set(0.6, 0.6, 0.6)} onPointerOut={(e) => e.object.scale.set(0.5, 0.5, 0.5)}>
                <Sphere args={[1, 25, 25]} scale={0.5}>
                    <meshStandardMaterial map={useLoader(THREE.TextureLoader, NepTexture)} />
                </Sphere>
            </mesh>
        </group>
    )
}

export default NewsPlanets