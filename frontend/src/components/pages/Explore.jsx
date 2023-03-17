import React, {useRef, useState}from "react";
import { useFrame } from '@react-three/fiber'
import styled from "styled-components";
import { Canvas } from '@react-three/fiber'
import Planet from '../models/PlanetRTF'
import { Html } from "@react-three/drei";
import SunLight from "../models/sunlight";
import Galaxy from "../models/Galaxy1";
import {OrbitControls} from "@react-three/drei";


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`
const Container = styled.div`
width:100%;
height: 100vh;
width: 100vw;
display:flex;
justify-content: center;
`
const Left = styled.div`
flex:2;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
gap: 50px;
padding: 60px;
`
const Right = styled.div`
flex:2;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media only screen and (max-width:820px){
    align-items: center;
    text-align: center;
}
`
const Title = styled.h1`
    font-size:74px;
@media only screen and (max-width:820px){
    font-size: 50px;
}
`
const Disc = styled.p`
font-size:24px;
@media only screen and (max-width:820px){

}
`
const Dive = styled.p`
font-size:24px;
@media only screen and (max-width:820px){

}
`

const Explore = () => {
    const [isCanvasOpen, setIsCanvasOpen] = useState(false);

    const handleOpenPlanets = () => {
      setIsCanvasOpen(true);
    };
    const handleClosePlanets = () => {
        setIsCanvasOpen(false);
      };
    return (
        <Section id='Explore'>

                {!isCanvasOpen ? (
                    <Container>
                    <Right>
                    {/*<button onClick={handleOpenCanvas}>Open Solar Explore</button>*/}
                    <Canvas style={{background: '#020202d3'}} camera={{fov:40, position: [0,20,0]}}>
                    <ambientLight intensity={1}/>
                        <directionalLight position={[3,2,1]}/>
                        <Galaxy onClick={handleOpenPlanets}/>
                    </Canvas></Right>
                    <Left>
                        <Title>Solar Explorer</Title>
                        <Disc>Welcome to Solar Explorer! Here we have built a 3D model of our own solar system. Immerse youself in the experience.
                            Here you can Explore. Learn. Interact. with all of the planets contained within the solar system.
                        </Disc>
                        <Dive>Click on the Solar System to your left to Dive in!</Dive>
                    </Left>
                    </Container>
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
                    <Html position={[null]}><button id='close'  onClick={handleClosePlanets}>Close</button></Html>
                </Canvas>
                )}
        </Section>
    )
}

export default Explore