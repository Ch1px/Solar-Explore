import React from "react";
import styled from "styled-components";
import { Canvas, useFrame} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
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

const About = () => {
    return (
        <Section>
            <Container>
                <Left>
                        <Space/>
    
                </Left>
                <Right>
                    <Title>What we do.</Title>
                </Right>
            </Container>
        </Section>
    )
}

export default About