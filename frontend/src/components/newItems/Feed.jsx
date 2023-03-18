import React from "react";
import styled from "styled-components";

const A = styled.a`
    
`
const Title = styled.h1`
    padding-top:-49px;
    font-weight:bold;
    cursor: pointer;
    background: linear-gradient(to right, #3fb2ff, #eb42ce 50%, #ffffff 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 275ms ease;
    &:hover{
        background-position: 0 100%;
    }
`
const ADate = styled.p`
`
const Img = styled.div`
    width:100px;
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
align-items: left;
text-align: left;
padding-left: 40px;
`
const NewsTitle = styled.h1`
font-size:50px;
font-weight: bold;

`

const Right = styled.div`
flex:1;
position: relative;
`
const Center = styled.div`
flex:1;
position: relative;
display:flex;
justify-content: center;
flex-direction: column;
align-items: left;
text-align: left;
top:0vh
`

const Feed = ({title, link, date, image}) => {

    let formatted = {day: "numeric", month: "long", year: "numeric"}
    let articleDate = new Date(date).toLocaleDateString("en-GB", formatted)

    return(
        <Container>
        <Left>
            <A href={link} target="_blank" rel="noopener noreferrer"></A>
            <Title>{title}</Title>
            <ADate>{articleDate}</ADate></Left>

            <Right><Img>{image && <img src={image} alt="article"/>}</Img></Right>
            
        </Container>
    )
}

export default Feed;