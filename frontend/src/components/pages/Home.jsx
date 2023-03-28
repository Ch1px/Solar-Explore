import React from "react";
import styled from "styled-components";
import SphereDistort from "../models/sphereDistort";
import Astro from "/src/assets/img/astroBook.png"
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;
display:flex;
align-items: center;
justify-content: center;
@media only screen and (max-width:768px){
    height: 200vh;
}
@media only screen and (max-height:650px){
    display:none;
}
`
const Container = styled.div`
max-width: 1400px;
margin: 0 auto;
padding:10px,0px;
padding-bottom: 5px;
padding-left: 10px;
padding-right: 10px;
height: 100%;
display: flex;
justify-content: space-between;
@media only screen and (max-width:768px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`
const Right = styled.div`
flex:1;
position: relative;
`

const Left = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 justify-content: center;
 gap: 20px;
 @media only screen and (max-width:768px){
    align-items: center;
    text-align: center;
    flex:1;
    padding-left: 0px;
    
}
`
const Title = styled.h1`
font-size:74px;
font-weight: 600;
@media only screen and (max-width:768px){
    text-align:center;
    font-size: 50px;
}

`
const Subtitle = styled.p`
font-size: 20px;
padding-bottom: 10px;
padding-right: 50px;
@media only screen and (max-width:768px){
    padding:20px;
    text-align: center;
}
`

const Button = styled.button`
color:white;
cursor: pointer;
border: none;
border-radius: 5px;
width: 15vh;
padding:7px;
background: linear-gradient(to right, #eb42ce ,  #0099ff 50%, #0099ff 50%);
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  &:hover{
    background-position: 0 100%;
  }
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
        transform: translateY(30px);
    }
}
@media only screen and (max-width:768px){
    width: 300px;
    height:300px;
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
                    <Subtitle>Submerse yourself and explore the wonders of our Solar System in an interactive 3-Dimensional learning environment. Discover the secrets that each planet has to offer, and what lies beyond the outer edges.</Subtitle>
                    <Button><a href="#About" onClick={scrollToSection}>Get Started</a></Button>
                </Left>
                <Right>

                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }} style={{ width: '100%', height: '100%' }}>
                        <SphereDistort />
                    </Canvas>

                    <Img src={Astro} />
                </Right>
            </Container>
        </Section>
    )
}

export default Home
