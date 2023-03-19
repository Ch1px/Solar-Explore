import React from "react";
import styled from "styled-components";
import { Canvas, useFrame} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Space from '../models/SpaceBoy'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
@media only screen and (max-width:820px){
    height: 200vh;
}
`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width:1400px;
display: flex;
justify-content: space-between;
@media only screen and (max-width:820px){
    width: '100%';
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`

const Left = styled.div`
flex:3;
@media only screen and (max-width:820px){
    display: none;
}
`
const Title = styled.h1`
    font-size:74px;
@media only screen and (max-width:820px){
    font-size: 50px;
}
`
const Disc = styled.div`
font-size:24px;
@media only screen and (max-width:820px){

}
`

const Right = styled.div`
flex:2;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
@media only screen and (max-width:820px){
    align-items: center;
    text-align: center;
}
`

const Img = styled.img`
object-fit: contain;
position: absolute;
margin: auto;
max-width: 50px;
height: auto;
bottom:220px;
animation: animate 1s infinite ease alternate;

@keyframes animate {
    to{
        transform: translateY(5px);
    }
}
@media only screen and (max-width:820px){
    display: none;
}

`
const ImgDis = styled.p`
object-fit: contain;
position: absolute;
margin: auto;
bottom:229px;
left:50px;
animation: animate 1s infinite ease alternate;

@keyframes animate {
    to{
        transform: translateY(5px);
    }
}
@media only screen and (max-width:820px){
    display: none;
}

`

const About = () => {
    return (
        <Section id='About'>
            <Container>
                <Left>
                    <Space/>
                </Left>
                <Right>
                    <Title>What we do.</Title><br/>
                    <Disc>
                        We have created an immersive 3D environment of all the planets in our Solar System.
                         You will make your way around the planets in our Solar System, and interact with all it has to offer.
                          Not only will you learn, you will have fun whilst doing it!<br></br><br></br>

                          This project was created using ThreeJS, to get the most out of your interactive planetary experience.
                    </Disc>
                    <Img src="/src/assets/img/arrow.png"></Img>
                    <ImgDis>Give it a whirl!</ImgDis>
                </Right>
            </Container>
        </Section>
    )
}

export default About