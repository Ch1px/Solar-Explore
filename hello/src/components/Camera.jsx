import React, { useRef } from 'react'
import {Html} from '@react-three/drei'
import {useThree,  useFrame, } from '@react-three/fiber'
import gsap from 'gsap'


export default function CameraControls() {
    const { camera } = useThree()
    const buttonRef = useRef()
  
    const handleClick = () => {
      gsap.to(camera.position, {
        x: -30,
        z:65,
        y:10,
        duration: 2
      });
    }
  
    return (
      <>
        <mesh>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial visible={false} />
          <Html>
            <button style={{
          position: 'absolute',
          top: '%',
          left: '50%',
          transform: 'translate(-100%)',
          zIndex: 1,
        }} onClick={handleClick} ref={buttonRef}></button>
          </Html>
        </mesh>
      </>
    )
  }