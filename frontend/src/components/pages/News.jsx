import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Canvas} from "@react-three/fiber";
import Articles from "../newItems/Articles";

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display:flex;
flex-direction: column;
align-items: center;

`

const News = () => {
    return (
        <Section id ='News'>
            <Articles/>
        </Section>
    )
}

export default News