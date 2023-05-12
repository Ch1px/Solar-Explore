import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Space from '../models/SpaceBoy'

import ArrowR from "/src/assets/img/arrowRight.png"

const Section = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;
display:flex;
align-items: center;
justify-content: center;
overflow-y: hidden;
overflow-x: hidden;
@media only screen and (max-width:768px){
    display: none;
}
@media only screen and (max-height:500px){
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
justify-content: center;
align-items: center;
@media only screen and (max-width:768px){
    display: none;
}
`


const SandBox = () => {
    const iframeRef = useRef(null);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
      let observer;
      const currentIframe = iframeRef.current;
      
      const loadIframeSrc = () => {
        currentIframe.src = "/public/WB/index.html";
      }
  
      const unloadIframeSrc = () => {
        currentIframe.src = '';
      }
  
      const checkVisibility = () => {
        const rect = currentIframe.getBoundingClientRect();
        const isInViewport = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
  
        if (isInViewport) {
          loadIframeSrc();
        } else {
          unloadIframeSrc();
        }
      }
  
      if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                loadIframeSrc();
              } else {
                unloadIframeSrc();
              }
            });
          },
          { threshold: 0.1 }
        );
        observer.observe(currentIframe);
      } else {
        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);
        checkVisibility();
      }
  
      currentIframe.onerror = () => {
        setIsError(true);
      };
  
      return () => {
        if (observer) {
          observer.unobserve(currentIframe);
        } else {
          window.removeEventListener('scroll', checkVisibility);
          window.removeEventListener('resize', checkVisibility);
        }
        currentIframe.onerror = null;
      };
    }, []);
  
    if (isError) {
      return <div>Error loading iframe content.</div>
    }
  
    return (
      <Section id='SandBox'>
        <Container>
          <iframe ref={iframeRef} width="1920" height="1080"></iframe>
        </Container>
      </Section>
    );
  };

export default SandBox