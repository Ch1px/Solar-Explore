import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Canvas} from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import NewsList from "./newItems/NewsList";


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width:1400px;
display: flex;
justify-content: space-between;
`

const Left = styled.div`
flex:2;
position: relative;
display: flex;
 flex-direction: column;
 justify-content: center;
 gap: 20px;
`
const Title = styled.h1`
font-size:74px;
`
const Dis = styled.p`
font-size:24px;
`

const Right = styled.div`
flex:3;
position: relative;
`

const News = () => {
    return (
        <Section id ='News'>
            <Container>
                <Left>
                    <p>News<br/>To be built</p>
                </Left>
                <Right>
                </Right>
            </Container>
        </Section>
    )
}

export default News