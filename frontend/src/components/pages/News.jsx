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
height: 150vh;
width: 100%;
scroll-snap-align: center;
display:flex;
align-items: center;
justify-content: center;
@media only screen and (max-width:768px){
    height: 110vh;
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
flex:1;
position: relative;
display:flex;
justify-content: center;
flex-direction: column;
align-items: end;
padding-right: 20px;
padding-top: 10px;
@media only screen and (max-width:768px){
    display: none;
}
`
const Title = styled.h1`
font-size:30px;
padding-bottom: 30px;
text-align: center;
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