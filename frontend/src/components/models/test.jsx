import React, { useState, useRef, useEffect } from 'react'
import { Ring, Sphere } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader } from 'three';
import { useLoader, useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import gsap from 'gsap'
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { Canvas } from '@react-three/fiber'
import SunLight from './sunlight';
import { Vector3 } from 'three';
import earthAVertexShader from '/src/assets/shaders/earth/earthAV.glsl'; import earthAFragmentShader from '/src/assets/shaders/earth/earthAF.glsl';

import '/src/index.css'

//test to position camera on updated planet position  

export default function Test(props) {
  const mercuryGroup = useRef();
  const mercuryObjectGroup = useRef();
  const mercuryObject = useRef();
  const mercAtmosObject = useRef();
  const venusGroup = useRef();
  const venusObject = useRef();
  const venus = useRef();
  const { camera, gl } = useThree();
  const cameraRef = useRef(camera);
  const controlsRef = useRef();

  const [isClickedMercury, setIsClickedMercury] = useState(false);
  const [isClickedVenus, setIsClickedVenus] = useState(false);

  const [isHovered, setIsHovered] = useState(false)
  useFrame(({ mouse }) => {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects1 = raycaster.intersectObject(mercuryGroup.current); setIsHovered(intersects1.length > 0);
  });


  function handleClickMercury() {
    setIsClickedMercury(true)
    setIsClickedVenus(false)

    const { x, y, z } = mercuryObject.current.getWorldPosition(new THREE.Vector3());

    gsap.to(controlsRef.current.target, {

      duration: 2,
      x: x,
      y: y,
      z: z,
      onUpdate: () => {
        controlsRef.current.update(x, y, z);
      },
    });
  }

  function handleClickVenus() {
    setIsClickedMercury(false)
    setIsClickedVenus(true)
    const { x, y, z } = venus.current.getWorldPosition(new THREE.Vector3());

    gsap.to(controlsRef.current.target, {

      duration: 2,
      x: x,
      y: y,
      z: z,
      onUpdate: () => {
        controlsRef.current.update(x, y, z);
      },
    });
  }

  useFrame(() => {
    mercuryGroup.current.rotation.y += 0.0005;
    venusGroup.current.rotation.y += 0.000;
  });

  return (
    <group {...props} dispose={null}>

      {isClickedMercury && <Html position={[null]}><div id='containerMoon'><h1 id='name'>The M</h1><p id='planet'></p></div></Html>}
      {isClickedVenus && <Html position={[null]}><div id='containerMoon'><h1 id='name'>The Moon</h1><p id='planet'></p></div></Html>}
      <group ref={mercuryGroup} position={[0, 0, 0]}>
        <group ref={mercuryObjectGroup} position={[16, 0, 0]}>
          <mesh onPointerOver={() => { document.body.style.cursor = "pointer"; }} onPointerOut={() => { document.body.style.cursor = "auto"; }}>
            <Sphere ref={mercuryObject} args={[1, 80, 80]} scale={1} onClick={handleClickMercury}>
              <meshStandardMaterial map={useLoader(THREE.TextureLoader, "./src/assets/img/700_mercMap.jpg")} />
            </Sphere>
          </mesh>
        </group>
        {isHovered &&
          <group ref={mercAtmosObject} position={[16, 0, 0]}>
            <mesh onPointerOver={() => { document.body.style.cursor = 'pointer'; }} onPointerOut={() => { document.body.style.cursor = 'auto'; }}>
              <Sphere args={[1, 80, 80]} scale={1.1}>
                <shaderMaterial vertexShader={earthAVertexShader} fragmentShader={earthAFragmentShader} blending={THREE.AdditiveBlending} side={THREE.BackSide} />
              </Sphere>
            </mesh>
          </group>}
      </group>

      <group ref={venusGroup} position={[0, 0, 0]}>
        <group ref={venusObject} position={[16, 4, 0]}>
          <mesh onPointerOver={() => { document.body.style.cursor = 'pointer'; }} onPointerOut={() => { document.body.style.cursor = 'auto'; }}>
            <Sphere ref={venus} args={[1, 80, 80]} scale={0.3} onClick={handleClickVenus}>
              <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/700_venus_atmosphere.jpg'))} />
            </Sphere>
          </mesh>
        </group>
      </group>
      <OrbitControls ref={controlsRef} enablePan={false} args={[camera, gl.domElement]} />
    </group>
  );
}