import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Planet from '../models/PlanetRTF'
import { Html } from "@react-three/drei";
import SunLight from "../models/sunlight";

function CanvasButton() {
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);

  const handleOpenCanvas = () => {
    setIsCanvasOpen(true);
  };

  const handleCloseCanvas = () => {
    setIsCanvasOpen(false);
  };

  return (
    <div>
      {!isCanvasOpen ? (
        <button onClick={handleOpenCanvas}>Open Canvas</button>
      ) : (
        <Canvas camera={{fov:15, position: [-30,0,150]}} style={{background: '#040005'}}>
                    <Html position={[null]}><div id='titleContainer'><h1 id='solarTitle'>Solar Explore</h1></div></Html>
                    <Html position={[null]}>
                        <div id = 'containerText'>
                            <p>- Scroll to Zoom
                            <br/>- Hover mouse over planets to learn some facts!
                            <br/>- Click on planet to focus
                            <br/>- Click 'The Sun' to recenter the camera
                            </p>
                        </div>
                    </Html>
                    <rectAreaLight rotation={[0,0,0]} color={'#f8f1e7'} intensity={10} position={[0,0,9.8]}/>
                    <rectAreaLight rotation={[3,0,0]} color={'#fad400'} intensity={10} position={[0,0,-9.8]}/>
                    <rectAreaLight rotation={[-1.5,0,0]} color={'#ff970f'} intensity={10} position={[0,9.8,0]}/>
                    <rectAreaLight rotation={[0,2,0]} color={'#ffffff'} intensity={10} position={[9.8,0,0]}/>
                    <rectAreaLight rotation={[0,-1,0]} color={'#ffffff'} intensity={10} position={[-9.8,0,0]}/>
                    <rectAreaLight rotation={[1,0,0]} color={'#ffae00'} intensity={10} position={[0,-9.8,0]}/>
                    <rectAreaLight rotation={[0,5,0]} color={'orange'} intensity={4} position={[9.8,0,0]}/>
                    <rectAreaLight rotation={[0,2,0]} color={'orange'} intensity={4} position={[-9.8,0,0]}/>
                    <rectAreaLight rotation={[0,3,0]} color={'orange'} intensity={4} position={[0,0,9.8]}/>
                    <rectAreaLight rotation={[0,0,0]} color={'orange'} intensity={4} position={[0,0,-9.8]}/>
                    <SunLight position={[0, 0, 0]} />
                    <ambientLight intensity={0.03}/>
                    <Planet/>
                </Canvas>
      )}
    </div>
  );
}

function CanvasCloseButton(props) {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} onClick={props.onClick}>
      <boxBufferGeometry args={[0.2, 0.2, 0.2]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}


export default CanvasButton