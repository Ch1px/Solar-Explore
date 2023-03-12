import React from "react";
import styled from "styled-components";
import Planets from "./planets";
import { Canvas } from '@react-three/fiber'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`

const Explore = () => {
    return (
        <Section id='Explore'>
            {/*<Planets/>*/}
        </Section>
    )
}

export default Explore