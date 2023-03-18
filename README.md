# Solar-Explorer

Clone into directory:
https://github.com/Ch1px/Solar-Explorer.git


Enter correct path:
cd hello


To install all dependenices:
npm install


To run the website use:
npm run dev


const Explore = () => {
    const [isCanvasOpen, setIsCanvasOpen] = useState(false);

    const handleOpenPlanets = () => {
      camera.position.set(-30, 0, 150);
      setIsCanvasOpen(true);

    };
    const handleClosePlanets = () => {
        camera.position.set(0, 50, 0);
        setIsCanvasOpen(false);
      };

      useFrame(() => {
        camera.lookAt(0, 0, 0);
      });
    
    return (
        <Section id='Explore'>

                {!isCanvasOpen ? (
                    <Container>
                    {/*<button onClick={handleOpenCanvas}>Open Solar Explore</button>*/}
                    <Canvas style={{background: '#020202d3' }}>
                    <ambientLight intensity={1}/>
                        <directionalLight position={[3,2,1]}/>
                        <Galaxy onClick={handleOpenPlanets}/>
                        
                        <Html position={[null]}>
                        <Center><Title>Solar Explorer</Title></Center>
                        <Left><Disc>Welcome to Solar Explorer! Here we have built a 3D model of our own solar system. Immerse youself in the experience.
                            Here you can Explore. Learn. Interact. with all of the planets contained within our Solar System.<Disc><br></br>Click on the Solar System in the center to Dive in!</Disc>
                        </Disc></Left>
                        <Right><SolarTitle>Why is it Called the Solar System?</SolarTitle>
                        <Disc>There are many planetary systems like ours in the universe, with planets orbiting a host star. Our planetary system is called “the solar system” because we use the word “solar” to describe things related to our star, after the Latin word for Sun, "solis." </Disc>
                        </Right></Html>
                    </Canvas>
                    </Container>
                ) : (
                <Container>
                <Canvas style={{background: '#040005'}}>
                    <Html position={[null]}><div id='titleContainer'><h1 id='solarTitle'>Solar Explore</h1></div></Html>
                    <Html position={[null]}>
                        <div id = 'containerText'>
                            <p>- Scroll to Zoom
                            <br/>- Hover mouse over planets to learn some facts!
                            <br/>- Click on planet to focus
                            <br/>- Click 'The Sun' to recenter the camera
                            </p>
                        </div>
                    </Html>
                    <rectAreaLight rotation={[0,0,0]} color={'#f8f1e7'} intensity={10} position={[0,0,9.8]}/>
                    <rectAreaLight rotation={[3,0,0]} color={'#fad400'} intensity={10} position={[0,0,-9.8]}/>
                    <rectAreaLight rotation={[-1.5,0,0]} color={'#ff970f'} intensity={10} position={[0,9.8,0]}/>
                    <rectAreaLight rotation={[0,2,0]} color={'#ffffff'} intensity={10} position={[9.8,0,0]}/>
                    <rectAreaLight rotation={[0,-1,0]} color={'#ffffff'} intensity={10} position={[-9.8,0,0]}/>
                    <rectAreaLight rotation={[1,0,0]} color={'#ffae00'} intensity={10} position={[0,-9.8,0]}/>
                    <rectAreaLight rotation={[0,5,0]} color={'orange'} intensity={4} position={[9.8,0,0]}/>
                    <rectAreaLight rotation={[0,2,0]} color={'orange'} intensity={4} position={[-9.8,0,0]}/>
                    <rectAreaLight rotation={[0,3,0]} color={'orange'} intensity={4} position={[0,0,9.8]}/>
                    <rectAreaLight rotation={[0,0,0]} color={'orange'} intensity={4} position={[0,0,-9.8]}/>
                    <SunLight position={[0, 0, 0]} />
                    <ambientLight intensity={0.03}/>
                    <Planet/>
                    <Html position={[null]}><button id='close'  onClick={handleClosePlanets}>Close</button></Html>
                </Canvas>
                </Container>
                )}
        </Section>
    )
}




          <Html position={[null]}>
            <Center><Title>Solar Explorer</Title></Center>
            <Left><Disc>Welcome to Solar Explorer! Here we have built a 3D model of our own solar system. Immerse youself in the experience.
              Here you can Explore. Learn. Interact. with all of the planets contained within our Solar System.<Disc><br></br>Click on the Solar System in the center to Dive in!</Disc>
            </Disc></Left>
            <Right><SolarTitle>Why is it Called the Solar System?</SolarTitle>
              <Disc>There are many planetary systems like ours in the universe, with planets orbiting a host star. Our planetary system is called “the solar system” because we use the word “solar” to describe things related to our star, after the Latin word for Sun, "solis." </Disc>
            </Right></Html>