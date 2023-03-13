import React, {useState, useEffect} from "react";
import Home from "./components/Home"
import About from "./components/About";
import Contact from "./components/Contact";
import Explore from "./components/Explore";
import FAQ from "./components/FAQ";
import NavBar from "./components/NavBar";
import styled from 'styled-components';
import CircleLoader from 'react-spinners/CircleLoader'
import './index.css'

//preloader

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display:flex;
flex-direction: column;
align-items: center;
background: url("/src/assets/img/wallpaper.jpg");
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: #ffffff;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {
  var loader = document.getElementById('preloader');
  window.addEventListener("load", function(){
    loader.style.display = "none";
  })
  return (
    <Section>
    <NavBar/>
    <Container>
      <Home/>
      <About/>
      <FAQ/>
      <Contact/>
      <Explore/>
    </Container>
    </Section>

  )
}

export default App;

