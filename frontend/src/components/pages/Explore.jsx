import React, {useRef}from "react";
import styled from "styled-components";
import { Canvas } from '@react-three/fiber'
import Planet from '../models/PlanetRTF'
import { Html } from "@react-three/drei";

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

const Explore = () => {
    return (
        <Section id='Explore'>
            <Container>
                <Canvas camera={{fov:50, position: [-30,0,65]}} style={{background: '#040005'}}>
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
                    <rectAreaLight lookAt={[0,0,0]} color={'orange'} intensity={10} position={[0,0,9.8]}/>
                    <rectAreaLight rotation={[3,0,0]} color={'orange'} intensity={10} position={[0,0,-9.8]}/>
                    <rectAreaLight rotation={[-1.5,0,0]} color={'orange'} intensity={10} position={[0,9.8,0]}/>
                    <rectAreaLight rotation={[0,2,0]} color={'orange'} intensity={10} position={[9.8,0,0]}/>
                    <rectAreaLight rotation={[0,-1,0]} color={'orange'} intensity={10} position={[-9.8,0,0]}/>
                    <rectAreaLight rotation={[1,0,0]} color={'orange'} intensity={10} position={[0,-9.8,0]}/>
                    <ambientLight intensity={0.02}/>
                    <pointLight position={[14,0,0]} intensity={0.3}/>
                    <pointLight position={[0,0,14]} intensity={0.3}/>
                    <pointLight position={[0,0,-14]} intensity={0.3}/>
                    <pointLight position={[14,0,14]} intensity={0.3}/>
                    <pointLight position={[-14,0,0]} intensity={0.3}/>
                    <pointLight position={[-14,0,-14]} intensity={0.3}/>
                    <pointLight position={[0,14,0]} intensity={0.3}/>
                    <pointLight position={[0,-14,0]} intensity={0.3}/>
                    <Planet/>
                </Canvas>
            </Container>
        </Section>
    )
}

export default Explore