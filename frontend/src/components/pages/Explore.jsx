import React, { useRef, useState } from "react";
import styled from "styled-components";
import HandleExplore from "../models/Galaxy";



const Section = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;
display:flex;
align-items: center;
justify-content: center;
@media only screen and (max-width:768px){
    height: 200vh;
}

`

const Explore = () => {

    return (
        <Section id='Explore'>
                <HandleExplore />
        </Section>
    )
}

export default Explore