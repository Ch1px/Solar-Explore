import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Articles from "../newItems/Articles";
import ImgArticles from "../newItems/ImgArticle";
import '/src/index.css'
import NewsPlanets from "../models/newsPlanets";

const Section = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;
display:flex;
align-items: center;
justify-content: center;
overflow-y: hidden;
overflow-x: hidden;
@media only screen and (max-width:768px){
    height: 100vh;
}
@media only screen and (max-height:500px){
    display:none;
}
`
const Container = styled.div`
margin: 0 auto;
padding:10px,0px;
padding-bottom: 5px;
padding-left: 10px;
padding-right: 10px;
height: 100%;
display: flex;
flex-basis: 1400px;
justify-content: space-between;
@media only screen and (max-width:768px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`

const Left = styled.div`
position: relative;
display:flex;
justify-content: center;
flex-direction: column;
padding-top: 30px;


@media only screen and (max-width:768px){
    display: none;
}
`
const Title = styled.h1`
font-size:30px;
padding-bottom: 30px;
text-align: center;
@media only screen and (max-width:768px){
    text-align: center;
}
`

const Center = styled.div`
flex: 1;
display:flex;
flex-basis: 700px;
justify-content: center;
flex-direction: column;
`
const Right = styled.div`
display:flex;
max-width: 120px;
flex: 1;
justify-content: center;
flex-direction: column;
@media only screen and (max-width:768px){
    display: none;
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
                <Right>
                    <Canvas camera={{ fov: 50, position: [30, 0, 0] }} style={{ width: '100%', height: '100%' }}>
                        <NewsPlanets />
                        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
                        <ambientLight intensity={0.3} />
                        <pointLight position={[0, 0, 40]} />
                    </Canvas>
                </Right>
            </Container>
        </Section>
    )
}

export default News