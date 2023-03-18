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
`
const Title = styled.h1`
font-size:30px;
font-weight: bold;
padding-bottom: 20px;
text-align: left;

`

const Right = styled.div`
flex:1;
position: relative;
display:flex;
justify-content: center;
flex-direction: column;
align-items: left;
top: 3vh;
`
const Center = styled.div`
flex:1;
position: relative;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: left;
`


const News = () => {
    return (
        <Section id ='News'>
            <Container>
                <Left>
                </Left>
                <Center><Title>Astronomy & Space News</Title>
                    <Articles/></Center>
                <Right><ImgArticles/></Right>
            </Container>
        </Section>
    )
}

export default News