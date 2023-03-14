import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Canvas} from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import axios from "axios"


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
const Img = styled.img`
object-fit: contain;
position: absolute;
top:0;
bottom:0;
left:0;
right:0;
margin: auto;
max-width: 500px;
height: auto;
animation: animate 2s infinite ease alternate;

@keyframes animate {
    to{
        transform: translateY(50px);
    }
}

`

const News = () => {
    const [articles, setArticles] = useState([]);

    const getArticles = async () => {
        try {
            const res = await axios.get("https://localhost:4000");
            setArticles(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect (() => {
        getArticles();
    })
    return (
        <Section id ='News'>
            <Container>
                <Left>
                    <Title>News.</Title>
                    <Dis>To be built.</Dis>
                </Left>
                <Right>
                <Canvas camera={{fov:25, position: [5,5,5]}}>
                    <OrbitControls enableZoom = {false} autoRotate/>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[3,2,1]}/>
                    <Sphere args={[1,100,200]} scale={1.3}>
                        <MeshDistortMaterial color="#751947" attach="material" distort={0.5} speed={2}/>
                    </Sphere>
                </Canvas>
                    <Img src="/src/assets/img/astro3.png"/>
                </Right>
            </Container>
        </Section>
    )
}

export default News