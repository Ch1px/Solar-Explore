import React from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Space from '../models/SpaceBoy'

import ArrowR from "/src/assets/img/arrowRight.png"

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
@media only screen and (max-height:600px){
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

const Left = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 justify-content: center;
 @media only screen and (max-width:768px){
    align-items: center;
    text-align: center;
    flex:1;
    padding-left: 0px;  
    padding-bottom: 100px;
}
`
const Title = styled.h1`
    font-size:50px;
    padding-bottom: 0px;
    
@media only screen and (max-width:900px){
    font-size: 50px;
}
`
const Disc = styled.div`
font-size:18px;

@media only screen and (max-width:900px){
font-size: 15px;
}
`

const Right = styled.div`
flex:1;
position: relative;
@media only screen and (max-width:768px){
    display:none;
}
`


const About = () => {
    return (
        <Section id='About'>
            <Container>
                <Left>
                    <Title>What we do.</Title><br />
                    <Disc>
                        Welcome to our website! We are passionate about space and the wonders of the universe.
                        Our website is dedicated to providing you with an interactive and immersive experience of the solar system.
                        We use 3D models to display facts about each planet in the solar system.
                        Our aim is to make learning about space fun and engaging for everyone.
                        Our 3D models are designed to be interactive and informative.<br /><br />You can explore each planet in detail and learn about its unique features.
                        We have included a range of information about each planet, including its size, distance from the sun, and composition.
                        Our website is perfect for anyone who is interested in space, from students to space enthusiasts.
                        <br /><br />We hope you enjoy exploring our website and learning about the wonders of the solar system.
                        This project was created using ThreeJS, to get the most out of your interactive planetary experience.
                    </Disc>

                </Left>
                <Right>
                    <Space />
                    {/**/}
                </Right>
            </Container>
        </Section>
    )
}

export default About