import React, {useRef, useState}from "react";
import { useFrame, useThree } from '@react-three/fiber'
import styled from "styled-components";
import { Canvas } from '@react-three/fiber'
import Planet from '../models/PlanetRTF'
import { Html, useCursor } from "@react-three/drei";
import SunLight from "../models/sunlight";
import Galaxy from "../models/Galaxy1";
import {OrbitControls} from "@react-three/drei";
import gsap from "gsap";
import HandleExplore from "../models/Galaxy1";


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`
const Container = styled.div`
width:100%;
height: 100vh;
display:flex;
justify-content: center;

`

const Explore = () => {

    return (
        <Section id='Explore'>
            <Container>
                <HandleExplore/>
            </Container>
        </Section>
    )
}

export default Explore