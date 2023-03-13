import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";


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
 flex: 2;
 display: flex;
 flex-direction: column;
 justify-content: center;
 gap: 20px;
`
const Title = styled.h1`
font-size:74px;

`
const Subtitle = styled.p`
font-size: 24px;
`

const Button = styled.button`
background-color: #0099ff;
color:white;
cursor: pointer;
border: none;
border-radius: 5px;
width: 15vh;
padding:7px;
`

const Right = styled.div`
flex:3;
position: relative;
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

const Home = () => {
    const scrollToSection = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <Section id='Home'>
            <Container>
                <Left>
                    <Title>Explore. Learn. Interact.</Title>
                    <Subtitle>Immerse yourself in a 3-Dimensional space of our own Solar System.</Subtitle>
                    <Button><a href="#About" onClick={scrollToSection}>Learn more</a></Button>
                </Left>
                <Right>
                    <Canvas camera={{fov:25, position: [5,5,5]}}>
                        <OrbitControls enableZoom = {false} autoRotate/>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[3,2,1]}/>
                        <Sphere args={[1,100,200]} scale={1.3}>
                        <MeshDistortMaterial color="#751947" attach="material" distort={0.5} speed={2}/>
                        </Sphere>
                    </Canvas>
                    <Img src="/src/assets/img/astroBook.png"/>
                </Right>
            </Container>
        </Section>
    )
}

export default Home