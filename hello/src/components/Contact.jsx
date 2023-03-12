import React from "react";
import styled from "styled-components";
import { Canvas, useFrame} from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import Space from './SpaceBoy'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width:1400px;
display: flex;
justify-content: space-between;
`

const Left = styled.div`
flex:3;
position: relative;
`
const Title = styled.h1`
font-size:74px;
`

const Right = styled.div`
flex:2;
position: relative;
display: flex;
 flex-direction: column;
 justify-content: center;
 gap: 20px;
`
const Img = styled.img`
object-fit: contain;
position: absolute;
top:0;
bottom:0;
left:0;
right:0;
margin: auto;
max-width: 500px;
height: auto;
animation: animate 2s infinite ease alternate;

@keyframes animate {
    to{
        transform: translateY(50px);
    }
}

`

const Contact = () => {
    return (
        <Section id='Contact'>
            <Container>
                <Left>
                <Canvas camera={{fov:25, position: [5,5,5]}}>
                    <OrbitControls enableZoom = {false} autoRotate/>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[3,2,1]}/>
                    <Sphere args={[1,100,200]} scale={1.3}>
                        <MeshDistortMaterial color="#176f92" attach="material" distort={0.5} speed={2}/>
                    </Sphere>
                </Canvas>
                <Img src="/src/assets/img/astro.png"/>
                </Left>
                <Right>
                    <Title>Contact.</Title>
                </Right>
            </Container>
        </Section>
    )
}

export default Contact