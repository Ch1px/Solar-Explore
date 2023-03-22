import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { Canvas} from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import Earth from '../models/Earth'
import Map from "../map/Map";
import Map2 from "../map/Map2";

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
width:100%;
height: 100%;
width: 100vw;
display:flex;
justify-content: center;
@media only screen and (max-width:900px){
    
}

`

const Left = styled.div`
flex: 1;
@media only screen and (max-width:900px){
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
font-weight: 700;
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
@media only screen and (max-width:900px){
    display:none;
}
`


const Contact = () => {
    const ref = useRef()

    const [success,setSuccess] = useState(null)

    const handleSubmit =e=>{
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
                <Map2/>
                {/*<Canvas camera={{fov:50, position: [5,5,5]}}>
                    <OrbitControls enableZoom = {false} autoRotate enablePan={false}/>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[3,2,1]}/>
                    <Earth/>
                </Canvas>*/}
                </Left>
                <Center><Form ref={ref} onSubmit={handleSubmit}>
                        <Title>Contact.</Title>
                        <Input placeholder="Name" name="name"></Input>
                        <Input placeholder="Email" name="email"></Input>
                        <Message placeholder="Message" name="message" rows={10}></Message>
                        <Button>Send</Button>
                        <Sent>{success && "Your message has been sent. We'll get back to you ASAP :)"}</Sent>
                    </Form></Center>
                <Right>
                    <Map/>
                </Right>
            </Container>
        </Section>
    )
}

export default Contact