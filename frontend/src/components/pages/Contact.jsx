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
                <Left>
                    <Title>Contact.</Title>
                    <Form ref={ref} onSubmit={handleSubmit}>
                    <Input placeholder="Name" name="name"></Input>
                    <Input placeholder="Email" name="email"></Input>
                    <Message placeholder="Message" name="message" rows={10}></Message>
                    <Button>Send</Button>
                    <Sent>{success && "Your message has been sent. We'll get back to you ASAP :)"}</Sent>
                </Form></Left>
                <Right><Canvas camera={{ fov: 50, position: [0, 80, 0] }} style={{ width: '100%', height: '90%' }}>
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

const Section = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;
display:flex;
align-items: center;
justify-content: center;
@media only screen and (max-height:600px){
    display:none;
}
`
const Container = styled.div`
max-width: 1400px;
margin: 0 auto;
padding:10px,0px;
padding-bottom: 5px;
padding-left: 10px;
padding-right: 10px;
height: 100%;
display: flex;
justify-content: space-between;

@media only screen and (max-width:768px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`

const Left = styled.div`
 flex: 1;
 width:730px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 @media only screen and (max-width:768px){
    align-items: center;
    text-align: center;
    flex:1;
    width:0px;
    padding-bottom: 100px;
}
`

const Title = styled.h1`
color: white;
font-size: 50px;
`

const Disc = styled.div`
font-size:18px;

@media only screen and (max-width:900px){
font-size: 15px;
}
`
const Form = styled.form`
width: 500px;
display: flex;
flex-direction: column;
gap:25px;
color: black;
@media only screen and (max-width:768px){
    width:300px;
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
position: relative;
display: flex;
align-items: center;
@media only screen and (max-width:1420px){
    display:none;
}
`