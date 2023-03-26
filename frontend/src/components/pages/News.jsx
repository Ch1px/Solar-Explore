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
display: flex;
justify-content: center;
@media only screen and (max-width:900px){
    height: 200vh;
}
`
const Container = styled.div`
width:1420px;
padding:10px,0px;
padding-bottom: 5px;
padding-left: 10px;
padding-right: 10px;
height: 100%;
display:flex;
flex-wrap: wrap;
justify-content: center;
@media only screen and (max-width:1450px){
    width: 1200px;
}
`

const Left = styled.div`
flex:1;
position: relative;
display:flex;
justify-content: center;
flex-direction: column;
align-items: end;
padding-right: 20px;
padding-top: 10px;
@media only screen and (max-width:900px){
    display: none;
}

`
const Title = styled.h1`
font-size:30px;
padding-bottom: 30px;
text-align: left;
`

const Right = styled.div`
flex:2;
display:flex;

align-items: center;
 @media only screen and (max-width:1440px){
    display: none;
}
`
const Center = styled.div`
flex:2;
top: -15px;
position: relative;
display:flex;
justify-content: center;
flex-direction: column;
align-items: left;
text-align: left;
@media only screen and (max-width:900px){
    align-items: center;
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
            </Container>
        </Section>
    )
}

export default News