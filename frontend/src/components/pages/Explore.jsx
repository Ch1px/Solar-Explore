import React, {useRef}from "react";
import styled from "styled-components";
import { Canvas } from '@react-three/fiber'
import Planet from '../models/PlanetRTF'
import { Html } from "@react-three/drei";
import SunLight from "../models/sunlight";

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`
const Container = styled.div`
  padding: 0px !important;;
  margin: 0px !important;;
  height: 100%;
  width: auto;
  align-items: center;

`

const Explore = () => {
    return (
        <Section id='Explore'>
            <Container>
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
            </Container>
        </Section>
    )
}

export default Explore