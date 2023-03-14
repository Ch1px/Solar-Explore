import React from "react";
import styled from "styled-components";
import Planets from "./planets";
import { Canvas } from '@react-three/fiber'
import Solar from "./Solar"
import {OrbitControls} from "@react-three/drei";
import Planet from './PlanetRTF'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width:190vh;
display: flex;
justify-content: space-between;
`

const Explore = () => {
    return (
        <Section id='Explore'>
            <Container>
                <Canvas camera={{fov:50, position: [0,10,65]}}>
                    <OrbitControls/>
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