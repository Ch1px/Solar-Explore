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
                <Canvas camera={{fov:50, position: [-20,10,20]}}>
                    <OrbitControls/>
                    <CameraControls/>
                    <ambientLight intensity={0.1}/>
                    <pointLight position={[14,0,0]} intensity={0.5}/>
                    <pointLight position={[0,0,14]} intensity={0.5}/>
                    <pointLight position={[0,0,-14]} intensity={0.5}/>
                    <pointLight position={[14,0,14]} intensity={0.5}/>
                    <pointLight position={[-14,0,0]} intensity={0.5}/>
                    <pointLight position={[-14,0,-14]} intensity={0.5}/>
                    <pointLight position={[0,14,0]} intensity={0.5}/>
                    <pointLight position={[0,-14,0]} intensity={0.5}/>
                    <Planet/>
                </Canvas>
            </Container>
        </Section>
    )
}

export default Explore