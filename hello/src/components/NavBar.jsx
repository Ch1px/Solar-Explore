import React from "react";
import styled from "styled-components";

const Section = styled.div`
display: flex;
justify-content: center;
`
const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
align-items: center;
padding:10px,0px;
`
const Links = styled.div`
display: flex;
align-items: center;
gap: 50px;
`
const Logo = styled.img`
padding-top: 10px;
height: 40px;
`
const List = styled.ul`
padding-top:10px;
display: flex;
gap:40px;
list-style: none;
`
const ListItem = styled.li`
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
const Icons = styled.div`
display: flex;
align-items: center;
gap:20px;
`
const Icon = styled.img`
height:30px;
cursor: pointer;
`
const Icon2 = styled.img`
height:30px;
cursor: pointer;
`

const NavBar = () => {
    const scrollToSection = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <Section>
            <Container>
            <Links>
            <Logo src="./src/assets/img/planetllooo.png"/>
            <List>
                <ListItem><a href="#Home" onClick={scrollToSection}>Home</a></ListItem>
                <ListItem><a href="#About" onClick={scrollToSection}>About</a></ListItem>
                <ListItem><a href="#News" onClick={scrollToSection}>News</a></ListItem>
                <ListItem><a href="#Explore" onClick={scrollToSection}>Our Solar System</a></ListItem>
                <ListItem><a href="#Contact" onClick={scrollToSection}>Contact</a></ListItem>
            </List>
            </Links>
            <Icons>
                <a href="https://github.com/Ch1px/Solar-Explorer">
                    <Icon src="./src/assets/img/gitLogo2.png" />
                </a>
                <a href="https://www.instagram.com/dan_glancy/">
                    <Icon2 src="./src/assets/img/insta.png"/>
                </a>
            </Icons>
            </Container>
        </Section>
    )
}

export default NavBar