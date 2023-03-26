import React, { useRef, useState } from "react";
import { useFrame, useThree } from '@react-three/fiber'
import styled from "styled-components";
import { Canvas } from '@react-three/fiber'
import Planet from '../models/PlanetRTF'
import { Html, useCursor } from "@react-three/drei";
import SunLight from "../models/sunlight";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import HandleExplore from "../models/Galaxy";
import Test from "../models/Tests/test2";


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
top:0px;
@media only screen and (max-width:900px){
    height: 200vh;

}
`

const Container = styled.div`
height: 100%;
display:flex;
justify-content: center;
-webkit-appearance: none;
@media only screen and (max-width:900px){
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 570px;
}
`

const Explore = () => {

    return (
        <Section id='Explore'>
            <Container>
                <HandleExplore />
            </Container>
        </Section>
    )
}

export default Explore