import Home from "./components/Home"
import About from "./components/About";
import Contact from "./components/Contact";
import Explore from "./components/Explore";
import NavBar from "./components/NavBar";
import styled from 'styled-components';

//preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})

const Container = styled.div`
background: url("/src/assets/img/wallpaper.jpg");
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

  return (
    <Container>
      <Home/>
      <About/>
      <Contact/>
      <Explore/>
    </Container>
  )
}

export default App;

