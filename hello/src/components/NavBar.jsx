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
height: 90px
`
const List = styled.ul`
display: flex;
gap:40px;
list-style: none;
`
const ListItem = styled.li`
cursor: pointer;
background: linear-gradient(to right, #eb42ce, #3fb2ff 50%, #ffffff 50%);
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
    return (
        <Section>
            <Container>
            <Links>
            <Logo src="./src/assets/img/planetllooo.png"/>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Contact</ListItem>
                <ListItem>Explore</ListItem>
            </List>
            </Links>
            <Icons>
                <a href="https://github.com/Ch1px/Solar-Explore">
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