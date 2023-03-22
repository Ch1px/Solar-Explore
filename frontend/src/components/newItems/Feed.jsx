import React from "react";
import styled from "styled-components";

const A = styled.a`
    
`
const Title = styled.h1`
    font-weight:bold;
    width: 70vh;
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
    @media only screen and (max-width:900px){
    width: 40vh;
}
`
const ADate = styled.p`
padding-bottom: 30px;
@media only screen and (max-width:900px){
    padding-bottom:10px;
}

`

const Feed = ({title, link, date}) => {

    let formatted = {day: "numeric", month: "long", year: "numeric"}
    let articleDate = new Date(date).toLocaleDateString("en-GB", formatted)

    return(
        <>
            <A href={link} target="_blank" rel="noopener noreferrer">
            <Title>{title}</Title>
            <ADate>{articleDate}</ADate></A>
        </>
    )
}

export default Feed;