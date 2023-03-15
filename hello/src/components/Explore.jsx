import React from "react";
import styled from "styled-components";
import { Canvas } from '@react-three/fiber'
import {OrbitControls} from "@react-three/drei";
import Planet from './PlanetRTF'
import CameraControls from "./Camera";


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`
const Container = styled.div`
  padding: 0px !important;;
  margin: 0px !important;;
  height: 100vh;
  width: 100vw;
`
const P = styled.p`
font-size: 12px;
 padding-top:40px;
 padding-left: 20px;
 display: flex;
 flex:1;
 justify-content: flex-start;
`
const P2 = styled.p`
font-size: 14px;
 display: flex;
 align-items: center;
 justify-content: center;
`

const Explore = () => {
    return (
        <Section id='Explore'>
            <Container>
            <P>Press 'spacebar' to toggle Planet Orbit<br></br>Press 'R' to reposition the camera</P>
            <P2>Hover mouse over planets to learn some facts!</P2>
                <Canvas camera={{fov:50, position: [-30,0,65]}}>
                    <OrbitControls/>
                    <CameraControls/>
                    <rectAreaLight lookAt={[0,0,0]} color={'orange'} intensity={10} position={[0,0,9.8]}/>
                    <rectAreaLight rotation={[3,0,0]} color={'orange'} intensity={10} position={[0,0,-9.8]}/>
                    <rectAreaLight rotation={[-1.5,0,0]} color={'orange'} intensity={10} position={[0,9.8,0]}/>
                    <rectAreaLight rotation={[0,2,0]} color={'orange'} intensity={10} position={[9.8,0,0]}/>
                    <rectAreaLight rotation={[0,-1,0]} color={'orange'} intensity={10} position={[-9.8,0,0]}/>
                    <rectAreaLight rotation={[1,0,0]} color={'orange'} intensity={10} position={[0,-9.8,0]}/>
                    <ambientLight intensity={0.02}/>
                    <pointLight position={[14,0,0]} intensity={0.2}/>
                    <pointLight position={[0,0,14]} intensity={0.2}/>
                    <pointLight position={[0,0,-14]} intensity={0.2}/>
                    <pointLight position={[14,0,14]} intensity={0.2}/>
                    <pointLight position={[-14,0,0]} intensity={0.2}/>
                    <pointLight position={[-14,0,-14]} intensity={0.2}/>
                    <pointLight position={[0,14,0]} intensity={0.2}/>
                    <pointLight position={[0,-14,0]} intensity={0.2}/>
                    <Planet/>
                </Canvas>
            </Container>
        </Section>
    )
}

export default Explore