import React, { useState, useRef, useEffect } from 'react'
import { MeshDistortMaterial, Ring, Sphere, Torus } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useLoader, useThree } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useGLTF} from '@react-three/drei'
import {Html} from '@react-three/drei'
import gsap from 'gsap'
import '/src/index.css'

export default function Planets(props) {
    const { nodes, materials } = useGLTF('/src/assets/models/solar-transformed.glb')
    const [sunMap, mercMap, venusMap, earthMap, marsMap, jupiterMap, saturnMap, uraMap, nepMap] = useLoader(TextureLoader, [
        './src/assets/img/sunMap.jpg',
        './src/assets/img/mercMap.jpg',
        './src/assets/img/venusTexture.jpg',
        './src/assets/img/EarthTexture.jpg',
        './src/assets/img/marsTexture.jpg',
        './src/assets/img/jupiterTexture.jpg',
        './src/assets/img/saturnMap.jpg',
        './src/assets/img/uranusTexture.jpg',
        './src/assets/img/neptuneTexture.jpg'
    ])

    const { camera } = useThree();

    const sun = useRef();
    const mercury = useRef();
    const venus = useRef();
    const earth = useRef();
    const mars = useRef();
    const jupiter = useRef();
    const saturn = useRef();
    const uranus = useRef();
    const neptune = useRef();
    const saturnRings = useRef();
    const uranusRings = useRef();
    const neptuneRings = useRef();

    const [isRotating, setIsRotating] = useState(false);

    const [isHoveredSun, setIsHoveredSun] = useState(false);
    const [isHoveredMercury, setIsHoveredMercury] = useState(false);
    const [isHoveredVenus, setIsHoveredVenus] = useState(false);
    const [isHoveredEarth, setIsHoveredEarth] = useState(false);
    const [isHoveredMars, setIsHoveredMars] = useState(false);
    const [isHoveredJupiter, setIsHoveredJupiter] = useState(false);
    const [isHoveredSaturn, setIsHoveredSaturn] = useState(false);
    const [isHoveredUranus, setIsHoveredUranus] = useState(false);
    const [isHoveredNeptune, setIsHoveredNeptune] = useState(false);
  
    useFrame(({ mouse }) => {
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(sun.current); setIsHoveredSun(intersects.length > 0);
      const intersects1= raycaster.intersectObject(mercury.current); setIsHoveredMercury(intersects1.length > 0);
      const intersects2 = raycaster.intersectObject(venus.current); setIsHoveredVenus(intersects2.length > 0);
      const intersects3 = raycaster.intersectObject(earth.current); setIsHoveredEarth(intersects3.length > 0);
      const intersects4 = raycaster.intersectObject(mars.current); setIsHoveredMars(intersects4.length > 0);
      const intersects5 = raycaster.intersectObject(jupiter.current); setIsHoveredJupiter(intersects5.length > 0);
      const intersects6 = raycaster.intersectObject(saturn.current); setIsHoveredSaturn(intersects6.length > 0);
      const intersects7 = raycaster.intersectObject(uranus.current); setIsHoveredUranus(intersects7.length > 0);
      const intersects8 = raycaster.intersectObject(neptune.current); setIsHoveredNeptune(intersects8.length > 0);
    });

    const toggleRotation = () => {
        setIsRotating(!isRotating);
    };

    useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.code === 'Space') {
            setIsRotating(!isRotating);
        }
    };
    window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isRotating]);

  
    useFrame((state) => {
      if (isRotating) {
        sun.current.rotation.y += 0.004;
        mercury.current.rotation.y += 0.009;
        venus.current.rotation.y += 0.008;
        earth.current.rotation.y += 0.007;
        mars.current.rotation.y += 0.006;
        jupiter.current.rotation.y += 0.005;
        saturn.current.rotation.y += 0.004;
        uranus.current.rotation.y += 0.003;
        neptune.current.rotation.y += 0.002;
        saturnRings.current.rotation.y += 0.004;
        uranusRings.current.rotation.y += 0.003;
        neptuneRings.current.rotation.y += 0.002;
      }
    });
    return (
      <group {...props} dispose={null}>
        {isHoveredSun && <Html position={[sun.current.position]}><div id='container'><h1 id='name'>The Sun</h1><p id='planet'>The sun is a star, a hot ball of glowing gases at the heart of our solar system. Its influence extends far beyond the orbits of distant Neptune and Pluto. Without the sun’s intense energy and heat, there would be no life on Earth. And though it is special to us, there are billions of stars like our sun scattered across the Milky Way galaxy. If the sun were as tall as a typical front door, the Earth would be the size of a U.S. nickel. The temperature at the sun’s core is about 27 million degrees Fahrenheit.</p></div></Html>}
        {isHoveredMercury && <Html position={[mercury.current.position]}><div id='container'><h1 id='name'>Mercury</h1><p id='planet'>The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth’s Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.</p></div></Html>}
        {isHoveredVenus && <Html position={[venus.current.position]}><div id='container'><h1 id='name'>Venus</h1><p id='planet'>Venus is a dim world of intense heat and volcanic activity. Similar in structure and size to Earth, Venus’ thick, toxic atmosphere traps heat in a runaway ‘greenhouse effect.’ The scorched world has temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains. Venus spins slowly in the opposite direction of most planet</p></div></Html>}
        {isHoveredEarth && <Html position={[earth.current.position]}><div id='container'><h1 id='name'>Earth</h1><p id='planet'>Our home planet Earth is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons, plains and so much more. Earth is special because it is an ocean planet. Water covers 70% of Earth’s surface. Earth’s atmosphere is made mostly of nitrogen and has plenty of oxygen for us to breathe. The atmosphere also protects us from incoming meteoroids, most of which break up before they can hit the surface.</p></div></Html>}
        {isHoveredMars && <Html position={[mars.current.position]}><div id='container'><h1 id='name'>Mars</h1><p id='planet'>Mars is a cold desert world. It is half the size of Earth. Mars is sometimes called the Red Planet. It’s red because of rusty iron in the ground. Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons, and weather. It has a very thin atmosphere made of carbon dioxide, nitrogen, and argon. There are signs of ancient floods on Mars, but now water mostly exists in icy dirt and thin clouds. On some Martian hillsides, there is evidence of liquid salty water in the ground.</p></div></Html>}
        {isHoveredJupiter && <Html position={[jupiter.current.position]}><div id='container'><h1 id='name'>Jupiter</h1><p id='planet'>Jupiter is the biggest planet in our solar system. It’s similar to a star, but it never got big enough to start burning. Jupiter is covered in swirling cloud stripes. It has big storms like the Great Red Spot, which has been going for hundreds of years. Jupiter is a gas giant and doesn’t have a solid surface, but it may have a solid inner core about the size of Earth. Jupiter also has rings, but they’re too faint to see very well.</p></div></Html>}
        {isHoveredSaturn && <Html position={[saturn.current.position]}><div id='container'><h1 id='name'>Saturn</h1><p id='planet'>Saturn isn’t the only planet to have rings, but it definitely has the most beautiful ones. The rings we see are made of groups of tiny ringlets that surround Saturn. They’re made of chunks of ice and rock. Like Jupiter, Saturn is mostly a ball of hydrogen and helium.</p></div></Html>}
        {isHoveredUranus && <Html position={[uranus.current.position]}><div id='container'><h1 id='name'>Uranus</h1><p id='planet'>Uranus is made of water, methane, and ammonia fluids above a small rocky center. Its atmosphere is made of hydrogen and helium like Jupiter and Saturn, but it also has methane. The methane makes Uranus blue. Uranus also has faint rings. The inner rings are narrow and dark. The outer rings are brightly colored and easier to see. Like Venus, Uranus rotates in the opposite direction as most other planets. And unlike any other planet, Uranus rotates on its side.</p></div></Html>}
        {isHoveredNeptune && <Html position={[neptune.current.position]}><div id='container'><h1 id='name'>Neptune</h1><p id='planet'>Neptune is dark, cold, and very windy. It’s the last of the planets in our solar system. It’s more than 30 times as far from the Sun as Earth is. Neptune is very similar to Uranus. It’s made of a thick soup of water, ammonia, and methane over an Earth-sized solid center. Its atmosphere is made of hydrogen, helium, and methane. The methane gives Neptune the same blue color as Uranus. Neptune has six rings, but they’re very hard to see.</p></div></Html>}

        <mesh ref={sun}>
            <Sphere args={[1,100,200]} scale={8.0} position={[0,0,0]}>
            <meshStandardMaterial map={sunMap}/>
            </Sphere>
        </mesh>
       
        <mesh ref={mercury}>
            <Sphere args={[1,100,200]} scale={1} position={[12,0,0]}>
                <meshStandardMaterial map={mercMap}/>
            </Sphere>
        </mesh>
    
        <mesh ref={venus}>
            <Sphere args={[1,100,200]} scale={1.2} position={[18,0,0]}>
                <meshStandardMaterial map={venusMap}/>
            </Sphere>
        </mesh>
        
        <mesh ref={earth}>
            <Sphere args={[1,100,200]} scale={1.4} position={[24,0,0]}>
                <meshStandardMaterial map={earthMap}/>
            </Sphere>
        </mesh>
        
        <mesh ref={mars}>
            <Sphere args={[1,100,200]} scale={1.3} position={[30,0,0]}>
                <meshStandardMaterial map={marsMap}/>
            </Sphere>
        </mesh>
        
        <mesh ref={jupiter}>
            <Sphere args={[1,100,200]} scale={3.8} position={[39,0,0]}>
                <meshStandardMaterial map={jupiterMap}/>
            </Sphere>
        </mesh>
        
        <mesh ref={saturn}>
            <Sphere args={[1,100,200]} scale={2.2} position={[50,0,0]} rotation={[-Math.PI / 2, 1, Math.PI / 2]}>
                <meshStandardMaterial map={saturnMap}/>
            </Sphere>
        </mesh>
        
        <group ref={saturnRings}>
        <mesh>
            <Ring args={[3,3.2,100]} position={[50,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#696b58'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[3.5,3.6,100]} position={[50,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#e0e4c0'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[3.7,4.2,100]} position={[50,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#60615b'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[3.8,3.9,100]} position={[50,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#494945'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[4,4.1,100]} position={[50,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#d0d1c7'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[4.2,4.3,100]} position={[50,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#64645f'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[4.4,4.5,100]} position={[50,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#e7e9e0'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[4.5,5,100]} position={[50,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#494945'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[5,5.1,100]} position={[50,0,0]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#210099'}/>
            </Ring>
        </mesh>
        </group>

        <mesh ref={uranus}>
            <Sphere args={[1,100,200]} scale={1.8} position={[60,0,0]}>
                <meshStandardMaterial map={uraMap}/>
            </Sphere>
        </mesh>
        
        <group ref={uranusRings}>
        <mesh>
            <Ring args={[3,3.2,100]} position={[60,0,0]} rotation={[-Math.PI / 2, 4.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#8aedff'} opacity={'0.5'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[3.4,3.5,100]} position={[60,0,0]} rotation={[-Math.PI / 2, 4.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#01c0a7'}opacity={'0.5'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[3.7,3.9,100]} position={[60,0,0]} rotation={[-Math.PI / 2, 4.8, Math.PI / 2]}>
                <meshStandardMaterial color={'#98fcff'}opacity={'0.5'}/>
            </Ring>
        </mesh>
        </group>
        
        <mesh ref={neptune}>
            <Sphere args={[1,100,200]} scale={1.8} position={[70,0,0]}>
                <meshStandardMaterial map={nepMap}/>
            </Sphere>
        </mesh>

        <group ref={neptuneRings}>
        <mesh>
            <Ring args={[3.4,3.45,100]} position={[70,0,0]} rotation={[-Math.PI / 2, 6.1, Math.PI / 2]}>
                <meshStandardMaterial color={'#383838'} opacity={'0.5'}/>
            </Ring>
        </mesh>
        <mesh>
            <Ring args={[3.6,3.65,100]} position={[70,0,0]} rotation={[-Math.PI / 2, 6.1, Math.PI / 2]}>
                <meshStandardMaterial color={'#313131'}opacity={'0.5'}/>
            </Ring>
        </mesh>
        </group>
      </group>
      
      
    )
  }