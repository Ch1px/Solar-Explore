import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Canvas} from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import NewsList from "../newItems/NewsList";


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
const Container = styled.div`
width:100%;
height: 100%;
display:flex;
justify-content: center;
gap: 50px;
padding-left: 20px;
`

const Left = styled.div`
flex:3;
position: relative;
display: flex;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
font-size:74px;
`
const Dis = styled.p`
font-size:24px;
`

const Right = styled.div`
flex:2;
position: relative;
`

const Iframe = styled.iframe`
height: 900px;
width: 100%;
opacity: 90%;

`

const News = () => {
    return (
        <Section id ='News'>
            <Container>
                <Left>
                    <Iframe src="https://www.universetoday.com/" />
                </Left>
                <Right>
                </Right>
            </Container>
        </Section>
    )
}

export default News