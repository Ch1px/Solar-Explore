import React from "react";
import styled from "styled-components";
import Planets from "./planets";
import { Canvas } from '@react-three/fiber'
import Solar from "./Solar"
import {OrbitControls} from "@react-three/drei";

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width:190vh;
display: flex;
justify-content: space-between;
`

const Explore = () => {
    return (
        <Section id='Explore'>
            <Planets/>
        </Section>
    )
}

export default Explore