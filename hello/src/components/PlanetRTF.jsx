import React, { useEffect, useRef } from 'react'
import { MeshDistortMaterial, Ring, Sphere, Torus } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useGLTF} from '@react-three/drei'

export default function Planets(props) {
    const { nodes, materials } = useGLTF('/src/assets/models/solar-transformed.glb')
    const [sunMap, mercMap, venusMap, earthMap, marsMap, jupiterMap, saturnMap, uraMap, nepMap] = useLoader(TextureLoader, [
        './src/assets/img/sunMap.jpg',
        './src/assets/img/mercMap.jpg',
        './src/assets/img/venusTexture.jpg',
        './src/assets/img/EarthTexture.jpg',
        './src/assets/img/marsTexture.jpg',
        './src/assets/img/jupiterTexture.jpg',
        './src/assets/img/saturnMap.jpg',
        './src/assets/img/uranusTexture.jpg',
        './src/assets/img/neptuneTexture.jpg'
    ])
    
    const sun = useRef();
    const mercury = useRef();
    const venus = useRef();
    const earth = useRef();
    const mars = useRef();
    const jupiter = useRef();
    const saturn = useRef();
    const uranus = useRef();
    const neptune = useRef();
    const ring = useRef();
    const uRing = useRef();
    
    useFrame(() => {
        sun.current.rotation.y += 0.004;
        mercury.current.rotation.y += 0.009;
        venus.current.rotation.y += 0.008;
        earth.current.rotation.y += 0.007;
        mars.current.rotation.y += 0.006;
        jupiter.current.rotation.y += 0.005;
        saturn.current.rotation.y += 0.004;
        uranus.current.rotation.y += 0.003;
        neptune.current.rotation.y += 0.002;
        ring.current.rotation.y += 0.004;
        uRing.current.rotation.y += 0.003;
      })
    return (
      <group {...props} dispose={null}>

        <mesh ref={sun}>
            <Sphere args={[1,100,200]} scale={8.0} position={[0,0,0]}>
            <meshStandardMaterial map={sunMap}/>
            </Sphere>
        </mesh>
        <mesh ref={mercury}>
            <Sphere args={[1,100,200]} scale={1} position={[12,0,0]}>
                <meshStandardMaterial map={mercMap}/>
            </Sphere>
        </mesh>
        <mesh ref={venus}>
            <Sphere args={[1,100,200]} scale={1.2} position={[18,0,0]}>
                <meshStandardMaterial map={venusMap}/>
            </Sphere>
        </mesh>
        <mesh ref={earth}>
            <Sphere args={[1,100,200]} scale={1.4} position={[24,0,0]}>
                <meshStandardMaterial map={earthMap}/>
            </Sphere>
        </mesh>
        <mesh ref={mars}>
            <Sphere args={[1,100,200]} scale={1.3} position={[30,0,0]}>
                <meshStandardMaterial map={marsMap}/>
            </Sphere>
        </mesh>
        <mesh ref={jupiter}>
            <Sphere args={[1,100,200]} scale={3.8} position={[39,0,0]}>
                <meshStandardMaterial map={jupiterMap}/>
            </Sphere>
        </mesh>
        <mesh ref={saturn}>
            <Sphere args={[1,100,200]} scale={2.2} position={[50,0,0]} rotation={[-Math.PI / 2, 1, Math.PI / 2]}>
                <meshStandardMaterial map={saturnMap}/>
            </Sphere>
        </mesh>
        <group ref={ring}>
        <mesh>
            <Ring args={[3,3.2,100]} position={[50,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#696b58'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[3.5,3.6,100]} position={[50,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#e0e4c0'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[3.7,4.2,100]} position={[50,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#60615b'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[3.8,3.9,100]} position={[50,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#494945'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[4,4.1,100]} position={[50,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#d0d1c7'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[4.2,4.3,100]} position={[50,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#64645f'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[4.4,4.5,100]} position={[50,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#e7e9e0'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[4.5,5,100]} position={[50,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#494945'}/>
            </Ring>
        </mesh>
        </group>
        <mesh ref={uranus}>
            <Sphere args={[1,100,200]} scale={1.8} position={[60,0,0]}>
                <meshStandardMaterial map={uraMap}/>
            </Sphere>
        </mesh>
        <group ref={uRing}>
        <mesh>
            <Ring args={[3,3.2,100]} position={[60,0,0]} rotation={[-Math.PI / 2, 4.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#8aedff'} opacity={'0.5'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[3.4,3.5,100]} position={[60,0,0]} rotation={[-Math.PI / 2, 4.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#01c0a7'}opacity={'0.5'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[3.7,3.9,100]} position={[60,0,0]} rotation={[-Math.PI / 2, 4.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#98fcff'}opacity={'0.5'}/>
            </Ring>
        </mesh>
        </group>
        <mesh ref={neptune}>
            <Sphere args={[1,100,200]} scale={1.8} position={[67,0,0]}>
                <meshStandardMaterial map={nepMap}/>
            </Sphere>
        </mesh>
      </group>
    )
  }

        {/*<group ref={sf} position={[50, 0, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.05}>
                  <group name="Plane" position={[-0.1, -0.02, 0]} rotation={[0.1, 3, -0.63]} scale={400}>
                    <mesh name="Plane_Saturn_Rings_0" geometry={nodes.Plane_Saturn_Rings_0.geometry} material={materials.Saturn_Rings} />
                  </group>
                  <mesh name="Saturn_Saturnus_0" geometry={nodes.Saturn_Saturnus_0.geometry} material={materials.Saturnus} />
                </group>*/}