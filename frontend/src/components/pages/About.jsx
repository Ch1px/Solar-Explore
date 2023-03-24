import React from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Space from '../models/SpaceBoy'

import ArrowR from "/src/assets/img/arrowRight.png"

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
@media only screen and (max-width:900px){
    height: 200vh;
}
`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: space-between;
@media only screen and (max-width:900px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 570px;
}
`

const Left = styled.div`
 flex: 2;
 display: flex;
 flex-direction: column;
 justify-content: center;
 position: relative;
padding-left: 270px;

@media only screen and (max-width:900px){
    align-items: center;
    text-align: center;
    padding-left: 0px;
}
`
const Title = styled.h1`
    font-size:50px;
    padding-bottom: 20px;
@media only screen and (max-width:900px){
    font-size: 50px;
}
`
const Disc = styled.div`
font-size:24px;
@media only screen and (max-width:900px){

}
`

const Right = styled.div`
flex:3;
position: relative;
@media only screen and (max-width:900px){
    display: none;
}
`

const Img = styled.img`
object-fit: contain;
position: absolute;
margin: auto;
max-width: 50px;
height: auto;
bottom:9.6vh;
left:80vh;
animation: animate 1s infinite ease alternate;

@keyframes animate {
    to{
        transform: translateY(5px);
    }
}
@media only screen and (max-width:900px){
    display: none;
}

`
const ImgDis = styled.p`
object-fit: contain;
position: absolute;
margin: auto;
bottom:11vh;
left:70vh;
animation: animate 1s infinite ease alternate;

@keyframes animate {
    to{
        transform: translateY(5px);
    }
}
@media only screen and (max-width:900px){
    display: none;
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
                    <Img src={ArrowR}></Img>
                    <ImgDis>Give it a whirl!</ImgDis>

                </Left>
                <Right>
                    <Space />
                </Right>
            </Container>
        </Section>
    )
}

export default About