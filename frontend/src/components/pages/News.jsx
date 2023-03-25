import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Articles from "../newItems/Articles";
import ImgArticles from "../newItems/ImgArticle";
import Earth from '../models/Earth'
import Starfield from "../models/StarField";
import Model from "../models/Satellite";

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
width:100%;
height: 100%;
display:flex;
flex-wrap: wrap;
justify-content: center;
@media only screen and (max-width:900px){

}
`

const Left = styled.div`
flex:1;
position: relative;
display:flex;
flex-wrap: wrap;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: left;
padding-top: 10px;
left:15vh;
top:2vh;
@media only screen and (max-width:900px){
    display: none;
}

`
const Title = styled.h1`
font-size:30px;
font-weight: bold;
padding-bottom: 30px;
text-align: left;
`

const Right = styled.div`
flex:2;
position: relative;
display:flex;
flex-wrap: wrap;
justify-content: center;
flex-direction: column;
align-items: center;
@media only screen and (max-width:900px){
    display:none;
}

`
const Center = styled.div`
flex:2;
padding-left: 10px;
position: relative;
display:flex;
flex-wrap: wrap;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: left;
@media only screen and (max-width:900px){
    width: 20vh;
}
`

const Img = styled.img`
    width:250px;
    animation: animate 2s infinite ease alternate;
    @keyframes animate {
    to{
        transform: translateY(20px);
    }
}
`


const News = () => {
    return (
        <Section id='News'>
            <Container>
                <Left>
                    <ImgArticles />
                </Left>
                <Center><Title>Astronomy & Space News</Title>
                    <Articles /></Center>
                <Right><Canvas camera={{ fov: 50, position: [0, 80, 0] }}>
                    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
                    <ambientLight intensity={1} />
                    <directionalLight position={[3, 2, 1]} />
                    <Model />
                    <Earth />
                    <Starfield />
                </Canvas></Right>
            </Container>
        </Section>
    )
}

export default News