import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Canvas} from "@react-three/fiber";
import Articles from "../newItems/Articles";
import ImgArticles from "../newItems/ImgArticle";

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
`

const Left = styled.div`
flex:1;
position: relative;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: left;
padding-top: 10px;
left:20vh;
bottom:1vh;
`
const Title = styled.h1`
font-size:30px;
font-weight: bold;
padding-bottom: 30px;
text-align: left;
`

const Right = styled.div`
flex:1;
position: relative;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const Center = styled.div`
flex:1;
top:-30px;
position: relative;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: left;
`

const Img = styled.img`
    width:250px;
    animation: animate 2s infinite ease alternate;
    @keyframes animate {
    to{
        transform: translateY(20px);
    }
}
`


const News = () => {
    return (
        <Section id ='News'>
            <Container>
                <Left>
                <ImgArticles/>
                </Left>
                <Center><Title>Astronomy & Space News</Title>
                    <Articles/></Center>
                <Right><Img src="/src/assets/img/astro2.png"/></Right>
            </Container>
        </Section>
    )
}

export default News