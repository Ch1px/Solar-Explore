import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Map from "../map/Map";
import Map2 from "../map/Map2";
import Earth from '../models/Earth'
import Starfield from "../models/StarField";
import Model from "../models/Satellite";

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
@media only screen and (max-width:900px){
    height: 100vh;
}
`
const Container = styled.div`
width:1420px;
padding:10px,0px;
padding-bottom: 5px;
padding-left: 10px;
padding-right: 10px;
height: 100%;
display:flex;
flex-wrap: wrap;
@media only screen and (max-width:900px){
    
}

`

const Left = styled.div`
flex: 1;
@media only screen and (max-width:1450px){
    display:none;
}
`
const Center = styled.div`
flex:1;
position: relative;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: left;
top:-3vh;
@media only screen and (max-width:900px){
}
`

const Title = styled.h1`
color: white;
font-size: 50px;
`
const Form = styled.form`
width: 500px;
display: flex;
flex-direction: column;
gap:25px;
color: black;
@media only screen and (max-width:900px){
    width:40vh;
}

`
const Input = styled.input`
padding: 20px;
border:none;
border-radius: 5px;
`
const Message = styled.textarea`
padding: 20px;
border:none;
border-radius: 5px;
`
const Button = styled.button`
padding:20px;
background-color: #6201d1;
color: white;
font-weight: bold;
cursor:pointer;
border-radius: 5px;
padding: 20px
`
const Sent = styled.div`
color: white;
`

const Right = styled.div`
flex:1;
@media only screen and (max-width:1450px){
    display:none;
}
`

const Footer = styled.div`
width: 100%;
padding: 40px;
position: relative;
background-color: #190035;
@media only screen and (max-width:900px){
    display:none;
}
`


const Contact = () => {
    const ref = useRef()

    const [success, setSuccess] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()

        emailjs.sendForm('service_g2ggs8p', 'template_jw2gizm', ref.current, 'SiI49mnog4ZAd1Qyh')
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
            }, (error) => {
                console.log(error.text);
                setSuccess(false)
            });

    }
    return (
        <Section id='Contact'>
            <Container>
                <Center><Form ref={ref} onSubmit={handleSubmit}>
                    <Title>Contact.</Title>
                    <Input placeholder="Name" name="name"></Input>
                    <Input placeholder="Email" name="email"></Input>
                    <Message placeholder="Message" name="message" rows={10}></Message>
                    <Button>Send</Button>
                    <Sent>{success && "Your message has been sent. We'll get back to you ASAP :)"}</Sent>
                </Form></Center>
                <Right><Canvas camera={{ fov: 50, position: [0, 80, 0] }} style={{width:'100%', height:'90%'}}>
                    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
                    <ambientLight intensity={1} />
                    <directionalLight position={[3, 2, 1]} />
                    <Model />
                    <Earth />
                    <Starfield />
                </Canvas></Right>
            </Container>
        </Section>
    )
}

export default Contact