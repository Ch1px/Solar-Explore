import React, { useState, useRef, useEffect } from 'react'
import { Ring, Sphere } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader } from 'three';
import { useLoader, useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import gsap from 'gsap'
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { Canvas } from '@react-three/fiber'
import SunLight from './sunlight';
import { Vector3 } from 'three';

import '/src/index.css'

import sunVertexShader from '/src/assets/shaders/sun/sunVertex.glsl'; import sunFragmentShader from '/src/assets/shaders/sun/sunFragment.glsl';
import sunAVertexShader from '/src/assets/shaders/sun/sunAVertex.glsl'; import sunAFragmentShader from '/src/assets/shaders/sun/sunAFragment.glsl';

import merVertexShader from '/src/assets/shaders//mercury/merVertex.glsl'; import merFragmentShader from '/src/assets/shaders/mercury/merFragment.glsl';
import merAVertexShader from '/src/assets/shaders/mercury/merAVertex.glsl'; import merAFragmentShader from '/src/assets/shaders/mercury/merAFragment.glsl';

import venusVertexShader from '/src/assets/shaders/venus/venusV.glsl'; import venusFragmentShader from '/src/assets/shaders/venus/venusF.glsl';
import venusAVertexShader from '/src/assets/shaders/venus/venusAV.glsl'; import venusAFragmentShader from '/src/assets/shaders/venus/venusAF.glsl';

import earthVertexShader from '/src/assets/shaders/earth/earthV.glsl'; import earthFragmentShader from '/src/assets/shaders/earth/earthF.glsl';
import earthAVertexShader from '/src/assets/shaders/earth/earthAV.glsl'; import earthAFragmentShader from '/src/assets/shaders/earth/earthAF.glsl';

import moonVertexShader from '/src/assets/shaders/moon/moonV.glsl'; import moonFragmentShader from '/src/assets/shaders/moon/moonF.glsl';
import moonAVertexShader from '/src/assets/shaders/moon/moonAV.glsl'; import moonAFragmentShader from '/src/assets/shaders/moon/moonAF.glsl';

import marsVertexShader from '/src/assets/shaders/mars/marsV.glsl'; import marsFragmentShader from '/src/assets/shaders/mars/marsF.glsl';
import marsAVertexShader from '/src/assets/shaders/mars/marsAV.glsl'; import marsAFragmentShader from '/src/assets/shaders/mars/marsAF.glsl';

import jupiterVertexShader from '/src/assets/shaders/jupiter/jupiterV.glsl'; import jupiterFragmentShader from '/src/assets/shaders/jupiter/jupiterF.glsl';
import jupiterAVertexShader from '/src/assets/shaders/jupiter/jupiterAV.glsl'; import jupiterAFragmentShader from '/src/assets/shaders/jupiter/jupiterAF.glsl';

import saturnVertexShader from '/src/assets/shaders/saturn/saturnV.glsl'; import saturnFragmentShader from '/src/assets/shaders/saturn/saturnF.glsl';
import saturnAVertexShader from '/src/assets/shaders/saturn/saturnAV.glsl'; import saturnAFragmentShader from '/src/assets/shaders/saturn/saturnAF.glsl';

import ringVertexShader from '/src/assets/shaders/saturn/ringV.glsl'; import ringFragmentShader from '/src/assets/shaders/saturn/ringF.glsl';
import ringAVertexShader from '/src/assets/shaders/saturn/ringAV.glsl'; import ringAFragmentShader from '/src/assets/shaders/saturn/ringAF.glsl';

import uranusVertexShader from '/src/assets/shaders/uranus/uranusV.glsl'; import uranusFragmentShader from '/src/assets/shaders/uranus/uranusF.glsl';
import uranusAVertexShader from '/src/assets/shaders/uranus/uranusAV.glsl'; import uranusAFragmentShader from '/src/assets/shaders/uranus/uranusAF.glsl'

import neptuneVertexShader from '/src/assets/shaders/neptune/neptuneV.glsl'; import neptuneFragmentShader from '/src/assets/shaders/neptune/neptuneF.glsl';
import neptuneAVertexShader from '/src/assets/shaders/neptune/neptuneAV.glsl'; import neptuneAFragmentShader from '/src/assets/shaders/neptune/neptuneAF.glsl'

import plutoVertexShader from '/src/assets/shaders/pluto/plutoV.glsl'; import plutoFragmentShader from '/src/assets/shaders/pluto/plutoF.glsl';
import plutoAVertexShader from '/src/assets/shaders/pluto/plutoAV.glsl'; import plutoAFragmentShader from '/src/assets/shaders/pluto/plutoAF.glsl';



export default function Planets(props) {

  const sun = useRef();
  const kuiperBelt = useRef();
  const astroidBelt = useRef();
  const mercuryGroup = useRef();
  const mercuryObject = useRef();
  const mercury = useRef();
  const venusGroup = useRef();
  const venusObject = useRef();
  const venus = useRef();
  const earthGroup = useRef();
  const earthObject = useRef();
  const earth = useRef();
  const marsGroup = useRef();
  const marsObject = useRef();
  const mars = useRef();
  const jupiterGroup = useRef();
  const jupiterObject = useRef();
  const jupiter = useRef();
  const saturnGroup = useRef();
  const saturnObject = useRef();
  const saturn = useRef();
  const uranusGroup = useRef();
  const uranusObject = useRef();
  const uranus = useRef();
  const neptuneGroup = useRef();
  const neptuneObject = useRef();
  const neptune = useRef();
  const moonPosEarth = useRef()
  const moonPos = useRef()
  const moonObject = useRef()


  const { camera, gl } = useThree();
  const { invalidate } = useThree();

  const [isRotating, setIsRotating] = useState(false);

  const [isClickedSun, setIsClickedSun] = useState(false);
  const [isClickedMercury, setIsClickedMercury] = useState(false);
  const [isClickedVenus, setIsClickedVenus] = useState(false);
  const [isClickedEarth, setIsClickedEarth] = useState(false);
  const [isClickedMars, setIsClickedMars] = useState(false);
  const [isClickedJupiter, setIsClickedJupiter] = useState(false);
  const [isClickedSaturn, setIsClickedSaturn] = useState(false);
  const [isClickedUranus, setIsClickedUranus] = useState(false);
  const [isClickedNeptune, setIsClickedNeptune] = useState(false);
  const [isClickedBelt, setIsClickedBelt] = useState(false);
  const [isClickedMoon, setIsClickedMoon] = useState(false);

  const [isClickedFact, setIsClickedFact] = useState(false);


  useFrame(({ mouse }) => {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
  });

  const controlsRef = useRef();

  const handleClickSun = () => {
    setIsClickedEarth(false)
    setIsClickedJupiter(false)
    setIsClickedSaturn(false)
    setIsClickedMars(false)
    setIsClickedMercury(false)
    setIsClickedMoon(false)
    setIsClickedNeptune(false)
    setIsClickedVenus(false)
    setIsClickedUranus(false)
    setIsClickedBelt(false)
    setIsClickedSun(true)
    setIsClickedFact(true)
    gsap.to(controlsRef.current.target, {
      duration: 2,
      x: 0,
      y: 0,
      z: 0,
      onUpdate: () => {
        controlsRef.current.update();
      }
    });
  };

  function handleBeltClick() {
    setIsClickedEarth(false)
    setIsClickedJupiter(false)
    setIsClickedSaturn(false)
    setIsClickedMars(false)
    setIsClickedMercury(false)
    setIsClickedMoon(false)
    setIsClickedNeptune(false)
    setIsClickedVenus(false)
    setIsClickedUranus(false)
    setIsClickedBelt(true)
    setIsClickedSun(false)
    setIsClickedFact(true)
  }

  function handleClickMercury() {
    setIsClickedEarth(false)
    setIsClickedJupiter(false)
    setIsClickedSaturn(false)
    setIsClickedMars(false)
    setIsClickedMercury(true)
    setIsClickedMoon(false)
    setIsClickedNeptune(false)
    setIsClickedVenus(false)
    setIsClickedUranus(false)
    setIsClickedBelt(false)
    setIsClickedSun(false)
    setIsClickedFact(true)

    if (!isRotating) {
      // Get the updated position of the mercuryObject after the rotation has been applied
      const { x, y, z } = mercury.current.getWorldPosition(new THREE.Vector3());
      gsap.to(controlsRef.current.target, {
        duration: 2,
        x: x,
        y: y,
        z: z,
        onUpdate: () => {
          controlsRef.current.update(x, y, z);
        },// add some distance from the object
      });
    }
  };
  const handleClickVenus = () => {
    setIsClickedEarth(false)
    setIsClickedJupiter(false)
    setIsClickedSaturn(false)
    setIsClickedMars(false)
    setIsClickedMercury(false)
    setIsClickedMoon(false)
    setIsClickedNeptune(false)
    setIsClickedVenus(true)
    setIsClickedUranus(false)
    setIsClickedBelt(false)
    setIsClickedSun(false)
    setIsClickedFact(true)

    if (!isRotating) {
      const { x, y, z } = venus.current.getWorldPosition(new THREE.Vector3());
      gsap.to(controlsRef.current.target, {
        duration: 2,
        x: x,
        y: y,
        z: z,
        onUpdate: () => {
          controlsRef.current.update(x, y, z);
        },// add some distance from the object
      });
    }
  };
  const handleClickEarth = () => {
    setIsClickedEarth(true)
    setIsClickedJupiter(false)
    setIsClickedSaturn(false)
    setIsClickedMars(false)
    setIsClickedMercury(false)
    setIsClickedMoon(false)
    setIsClickedNeptune(false)
    setIsClickedVenus(false)
    setIsClickedUranus(false)
    setIsClickedBelt(false)
    setIsClickedSun(false)
    setIsClickedFact(true)

    if (!isRotating) {
      // Get the updated position of the mercuryObject after the rotation has been applied
      const { x, y, z } = earth.current.getWorldPosition(new THREE.Vector3());
      gsap.to(controlsRef.current.target, {
        duration: 2,
        x: x,
        y: y,
        z: z,
        onUpdate: () => {
          controlsRef.current.update(x, y, z);
        },// add some distance from the object
      });
    }
  };
  const handleClickMoon = () => {
    setIsClickedEarth(false)
    setIsClickedJupiter(false)
    setIsClickedSaturn(false)
    setIsClickedMars(false)
    setIsClickedMercury(false)
    setIsClickedMoon(true)
    setIsClickedNeptune(false)
    setIsClickedVenus(false)
    setIsClickedUranus(false)
    setIsClickedBelt(false)
    setIsClickedSun(false)
    setIsClickedFact(true)

    if (!isRotating) {
      // Get the updated position of the mercuryObject after the rotation has been applied
      const { x, y, z } = moonPosEarth.current.getWorldPosition(new THREE.Vector3());
      gsap.to(controlsRef.current.target, {
        duration: 2,
        x: x,
        y: y,
        z: z,
        onUpdate: () => {
          controlsRef.current.update(x, y, z);
        },// add some distance from the object
      });
    }
  };
  const handleClickMars = () => {

    setIsClickedEarth(false)
    setIsClickedJupiter(false)
    setIsClickedSaturn(false)
    setIsClickedMars(true)
    setIsClickedMercury(false)
    setIsClickedMoon(false)
    setIsClickedNeptune(false)
    setIsClickedVenus(false)
    setIsClickedUranus(false)
    setIsClickedBelt(false)
    setIsClickedSun(false)
    setIsClickedFact(true)

    if (!isRotating) {
      // Get the updated position of the mercuryObject after the rotation has been applied
      const { x, y, z } = mars.current.getWorldPosition(new THREE.Vector3());
      gsap.to(controlsRef.current.target, {
        duration: 2,
        x: x,
        y: y,
        z: z,
        onUpdate: () => {
          controlsRef.current.update(x, y, z);
        },// add some distance from the object
      });
    }
  };
  const handleClickJupiter = () => {
    setIsClickedEarth(false)
    setIsClickedJupiter(true)
    setIsClickedSaturn(false)
    setIsClickedMars(false)
    setIsClickedMercury(false)
    setIsClickedMoon(false)
    setIsClickedNeptune(false)
    setIsClickedVenus(false)
    setIsClickedUranus(false)
    setIsClickedBelt(false)
    setIsClickedSun(false)
    setIsClickedFact(true)

    if (!isRotating) {
      // Get the updated position of the mercuryObject after the rotation has been applied
      const { x, y, z } = jupiter.current.getWorldPosition(new THREE.Vector3());
      gsap.to(controlsRef.current.target, {
        duration: 2,
        x: x,
        y: y,
        z: z,
        onUpdate: () => {
          controlsRef.current.update(x, y, z);
        },// add some distance from the object
      });
    }
  };
  const handleClickSaturn = () => {
    setIsClickedEarth(false)
    setIsClickedJupiter(false)
    setIsClickedSaturn(true)
    setIsClickedMars(false)
    setIsClickedMercury(false)
    setIsClickedMoon(false)
    setIsClickedNeptune(false)
    setIsClickedVenus(false)
    setIsClickedUranus(false)
    setIsClickedBelt(false)
    setIsClickedSun(false)
    setIsClickedFact(true)

    if (!isRotating) {
      // Get the updated position of the mercuryObject after the rotation has been applied
      const { x, y, z } = saturn.current.getWorldPosition(new THREE.Vector3());
      gsap.to(controlsRef.current.target, {
        duration: 2,
        x: x,
        y: y,
        z: z,
        onUpdate: () => {
          controlsRef.current.update(x, y, z);
        },// add some distance from the object
      });
    }
  };
  const handleClickUranus = () => {
    setIsClickedEarth(false)
    setIsClickedJupiter(false)
    setIsClickedSaturn(false)
    setIsClickedMars(false)
    setIsClickedMercury(false)
    setIsClickedMoon(false)
    setIsClickedNeptune(false)
    setIsClickedVenus(false)
    setIsClickedUranus(true)
    setIsClickedBelt(false)
    setIsClickedSun(false)
    setIsClickedFact(true)

    if (!isRotating) {
      // Get the updated position of the mercuryObject after the rotation has been applied
      const { x, y, z } = uranus.current.getWorldPosition(new THREE.Vector3());
      gsap.to(controlsRef.current.target, {
        duration: 2,
        x: x,
        y: y,
        z: z,
        onUpdate: () => {
          controlsRef.current.update(x, y, z);
        },// add some distance from the object
      });
    }
  };
  const handleClickNeptune = () => {
    setIsClickedEarth(false)
    setIsClickedJupiter(false)
    setIsClickedSaturn(false)
    setIsClickedMars(false)
    setIsClickedMercury(false)
    setIsClickedMoon(false)
    setIsClickedNeptune(true)
    setIsClickedVenus(false)
    setIsClickedUranus(false)
    setIsClickedBelt(false)
    setIsClickedSun(false)
    setIsClickedFact(true)

    if (!isRotating) {
      // Get the updated position of the mercuryObject after the rotation has been applied
      const { x, y, z } = neptune.current.getWorldPosition(new THREE.Vector3());
      gsap.to(controlsRef.current.target, {
        duration: 2,
        x: x,
        y: y,
        z: z,
        onUpdate: () => {
          controlsRef.current.update(x, y, z);
        },// add some distance from the object
      });
    }
  };




  const handleRotateClick = () => {
    setIsRotating(!isRotating);
  };

  useFrame(() => {
    if (isRotating) {
      //set relative orbit speed
      sun.current.rotation.y += 0.0004;
      kuiperBelt.current.rotation.z += 0.00004;
      astroidBelt.current.rotation.z += 0.0004;
      mercuryGroup.current.rotation.y += 0.026;
      venusGroup.current.rotation.y += 0.014;
      earthGroup.current.rotation.y += 0.008;
      marsGroup.current.rotation.y += 0.002;
      jupiterGroup.current.rotation.y += 0.0009;
      saturnGroup.current.rotation.y += 0.0004;
      uranusGroup.current.rotation.y += 0.0001;
      neptuneGroup.current.rotation.y += 0.00007;
      moonPos.current.rotation.y += 0.008;
      moonObject.current.rotation.y += 0.05;
    }
  });



  function handleClick() {
    mercuryGroup.current.rotation.set(0, 0, 0)
    venusGroup.current.rotation.set(0, 0, 0)
    earthGroup.current.rotation.set(0, 0, 0)
    marsGroup.current.rotation.set(0, 0, 0)
    jupiterGroup.current.rotation.set(0, 0, 0)
    saturnGroup.current.rotation.set(0, 0, 0)
    uranusGroup.current.rotation.set(0, 0, 0)
    neptuneGroup.current.rotation.set(0, 0, 0)
    moonPos.current.rotation.set(0, 0, 0)
    moonObject.current.rotation.set(0, 0, 0)
  }

  function handleHideFact() {
    setIsClickedEarth(false)
    setIsClickedJupiter(false)
    setIsClickedSaturn(false)
    setIsClickedMars(false)
    setIsClickedMercury(false)
    setIsClickedMoon(false)
    setIsClickedNeptune(false)
    setIsClickedVenus(false)
    setIsClickedUranus(false)
    setIsClickedBelt(false)
    setIsClickedSun(false)
    setIsClickedFact(false)
  }

  const textureBelt = useLoader(TextureLoader, './src/assets/img/kBelt.png');

  textureBelt.magFilter = THREE.NearestFilter;
  textureBelt.minFilter = THREE.NearestFilter;

  const beltMaterial = new THREE.MeshBasicMaterial({
    map: textureBelt,
    transparent: true,
    side: THREE.DoubleSide,
  });

  return (

    <group {...props} dispose={null}>
      <Html position={[null]}><div id='titleContainer'><h1 id='solarTitle'>Solar Explore</h1></div></Html>
      <Html position={[null]}>
        <div id='containerText'>
          <p>- Scroll to Zoom
            <br />- Click on planet to focus and learn!
            <br />- Click 'The Sun' to recenter the camera
          </p>
        </div>

      </Html>
      <rectAreaLight rotation={[0, 0, 0]} color={'#f8f1e7'} intensity={20} position={[0, 0, 13.8]} />
      <rectAreaLight rotation={[3, 0, 0]} color={'#fad400'} intensity={20} position={[0, 0, -13.8]} />
      <rectAreaLight rotation={[-1.5, 0, 0]} color={'#ff970f'} intensity={20} position={[0, 13.8, 0]} />
      <rectAreaLight rotation={[0, 2, 0]} color={'#ffffff'} intensity={20} position={[13.8, 0, 0]} />
      <rectAreaLight rotation={[0, -1, 0]} color={'#ffffff'} intensity={20} position={[-13.8, 0, 0]} />
      <rectAreaLight rotation={[1, 0, 0]} color={'#ffae00'} intensity={20} position={[0, -13.8, 0]} />
      <rectAreaLight rotation={[0, 5, 0]} color={'orange'} intensity={4} position={[13.8, 0, 0]} />
      <rectAreaLight rotation={[0, 2, 0]} color={'orange'} intensity={4} position={[-13.8, 0, 0]} />
      <rectAreaLight rotation={[0, 3, 0]} color={'orange'} intensity={4} position={[0, 0, 13.8]} />
      <rectAreaLight rotation={[0, 0, 0]} color={'orange'} intensity={4} position={[0, 0, -13.8]} />
      <SunLight position={[0, 0, 0]} />
      <ambientLight intensity={0.05} />

      {isClickedSun && <Html position={[null]}><div id='containerSun'><h1 id='name'>The Sun</h1><p id='planet'>The sun is a star, a hot ball of glowing gases at the heart of our solar system. Its influence extends far beyond the orbits of distant Neptune and Pluto. Without the sun’s intense energy and heat, there would be no life on Earth. And though it is special to us, there are billions of stars like our sun scattered across the Milky Way galaxy. If the sun were as tall as a typical front door, the Earth would be the size of a U.S. nickel. The temperature at the sun’s core is about 27 million degrees Fahrenheit.</p></div></Html>}

      {isClickedMercury && <Html position={[null]}><div id='containerMer'><h1 id='name'>Mercury</h1><p id='planet'>The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth’s Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.</p><h1 id='subtitle'>A year on Mercury is just 88 days long.</h1><p id='planet'>One solar day (the time from noon to noon on the planet’s surface) on Mercury lasts the equivalent of 176 Earth days while the sidereal day (the time for 1 rotation in relation to a fixed point) lasts 59 Earth days. Mercury is nearly tidally locked to the Sun and over time this has slowed the rotation of the planet to almost match its orbit around the Sun. Mercury also has the highest orbital eccentricity of all the planets with its distance from the Sun ranging from 46 to 70 million km.</p></div></Html>}

      {isClickedVenus && <Html position={[null]}><div id='containerVen'><h1 id='name'>Venus</h1><p id='planet'>Venus is a dim world of intense heat and volcanic activity. Similar in structure and size to Earth, Venus’ thick, toxic atmosphere traps heat in a runaway ‘greenhouse effect.’ The scorched world has temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains. Venus spins slowly in the opposite direction of most planet</p><h1 id='subtitle'>A day on Venus lasts longer than a year. </h1><p id='planet'>It takes 243 Earth days to rotate once on its axis (sidereal day). The planet’s orbit around the Sun takes 225 Earth days, compared to the Earth’s 365. A day on the surface of Venus (solar day) takes 117 Earth days.</p><h1 id='subtitle'>Venus is the second brightest object in the night sky.</h1><p id='planet'>Only the Moon is brighter. With a magnitude of between -3.8 to -4.6 Venus is so bright it can be seen during daytime on a clear day.</p></div></Html>}

      {isClickedEarth && <Html position={[null]}><div id='containerEarth'><h1 id='name'>Earth</h1><p id='planet'>Our home planet Earth is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons, plains and so much more. Earth is special because it is an ocean planet. Water covers 70% of Earth’s surface. Earth’s atmosphere is made mostly of nitrogen and has plenty of oxygen for us to breathe. The atmosphere also protects us from incoming meteoroids, most of which break up before they can hit the surface.</p><h1 id='subtitle'>The Earth was once believed to be the centre of the universe.</h1><p id='planet'>Due to the apparent movements of the Sun and planets in relation to their viewpoint, ancient scientists insisted that the Earth remained static, whilst other celestial bodies travelled in circular orbits around it. Eventually, the view that the Sun was at the centre of the universe was postulated by Copernicus, though this is also not the case.</p></div></Html>}

      {isClickedMars && <Html position={[null]}><div id='containerMars'><h1 id='name'>Mars</h1><p id='planet'>Mars is a cold desert world. It is half the size of Earth. Mars is sometimes called the Red Planet. It’s red because of rusty iron in the ground. Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons, and weather. It has a very thin atmosphere made of carbon dioxide, nitrogen, and argon. There are signs of ancient floods on Mars, but now water mostly exists in icy dirt and thin clouds. On some Martian hillsides, there is evidence of liquid salty water in the ground.</p><h1 id='subtitle'>Olympus Mons</h1><p id='planet'>Mars has the largest volcano in the solar system – Olympus Mons. It measures some 600 kilometres across and rises nearly 27 kilometres above the surrounding terrain. It is a shield volcano built by the continuous action of flowing lava over millions and millions of years that began some 3 billion years ago. Olympus Mons is part of a complex of volcanoes that lie along a volcanic plateau called the Tharsis Bulge. This entire region lies over a hotspot, a place in the planet’s crust that allows magma from deep inside to flow out to the surface. </p></div></Html>}

      {isClickedJupiter && <Html position={[null]}><div id='containerJup'><h1 id='name'>Jupiter</h1><p id='planet'>Jupiter is the biggest planet in our solar system. It’s similar to a star, but it never got big enough to start burning. Jupiter is covered in swirling cloud stripes. It has big storms like the Great Red Spot, which has been going for hundreds of years. Jupiter is a gas giant and doesn’t have a solid surface, but it may have a solid inner core about the size of Earth. Jupiter also has rings, but they’re too faint to see very well.</p><h1 id='subtitle'>Jupiter’s Great Red Spot</h1><p id='planet'>Situated 22° south of Jupiter’s equator, the Great Red Spot is a storm that has been raging for at least 186 years. Upper estimates suggest the storm could have been in existence for over three and a half centuries. The first observation of the Great Red Spot was in the seventeenth century, when telescopes first started to be used. However, it is unknown whether this is the same red spot that we see today, or whether Jupiter has had many such storms that have come and gone. The red spot spins anticlockwise and takes six (Earth) days to rotate completely. Another mystery surrounding the red spot is what makes it red. Scientists have several theories, for instance, the presence of red organic compounds. </p></div></Html>}

      {isClickedSaturn && <Html position={[null]}><div id='containerSat'><h1 id='name'>Saturn</h1><p id='planet'>Saturn isn’t the only planet to have rings, but it definitely has the most beautiful ones. The rings we see are made of groups of tiny ringlets that surround Saturn. They’re made of chunks of ice and rock. Like Jupiter, Saturn is mostly a ball of hydrogen and helium.</p><h1 id='subtitle'>Saturn’s Rings</h1><p id='planet'>While all the gas giants in our solar system have rings none of them are as extensive or distinctive as Saturn’s. The rings were discovered by Galileo Galilei 1610 who observed them with a telescope. The first ‘up close’ view of the rings were by Pioneer 11 spacecraft which flew by Saturn on September 1, 1971. Saturn’s rings are made up of are billions of particles that range in size from tiny dust grains to objects as large as mountains. These are made up of chunks of ice and rock, believed to have come from asteroids comets or even moons, that broke apart before they reached the planet.</p></div></Html>}

      {isClickedUranus && <Html position={[null]}><div id='containerUra'><h1 id='name'>Uranus</h1><p id='planet'>Uranus is made of water, methane, and ammonia fluids above a small rocky center. Its atmosphere is made of hydrogen and helium like Jupiter and Saturn, but it also has methane. The methane makes Uranus blue. Uranus also has faint rings. The inner rings are narrow and dark. The outer rings are brightly colored and easier to see. Like Venus, Uranus rotates in the opposite direction as most other planets. And unlike any other planet, Uranus rotates on its side.</p><h1 id='subtitle'>Uranus hits the coldest temperatures of any planet.</h1><p id='planet'>With minimum atmospheric temperature of -224°C Uranus is nearly coldest planet in the solar system. While Neptune doesn’t get as cold as Uranus it is on average colder. The upper atmosphere of Uranus is covered by a methane haze which hides the storms that take place in the cloud decks.</p></div></Html>}

      {isClickedNeptune && <Html position={[null]}><div id='containerNep'><h1 id='name'>Neptune</h1><p id='planet'>Neptune is dark, cold, and very windy. It’s the last of the planets in our solar system. It’s more than 30 times as far from the Sun as Earth is. Neptune is very similar to Uranus. It’s made of a thick soup of water, ammonia, and methane over an Earth-sized solid center. Its atmosphere is made of hydrogen, helium, and methane. The methane gives Neptune the same blue color as Uranus. Neptune has six rings, but they’re very hard to see.</p><h1 id='subtitle'>Neptune’s Great Dark Spot</h1><p id='planet'>The Great Dark Spot in the southern atmosphere of Neptune was first discovered in 1989 by the Voyager 2 spacecraft. It was an incredibly large rotating storm system with winds of up to 1,500 miles per hour, the strongest winds recorded on any planet. How such powerful winds were discovered on a planet so far from the sun is still considered a mystery to this day. Data from the Voyager 2 spacecraft also showed that the Great Dark Spot varied significantly in size during their brief pass of the planet. When Neptune was viewed by the Hubble Space telescope in 1994 the Great Dark Spot had vanished, although a different dark spot had appeared in Neptune’s northern hemisphere.</p></div></Html>}


      {isClickedBelt && <Html position={[null]}><div id='containerBelt'><h1 id='name'>Kuiper Belt</h1><p id='planet'>Similar to the asteroid belt, the Kuiper Belt is a region of leftovers from the solar system's early history. Like the asteroid belt, it has also been shaped by a giant planet, although it's more of a thick disk (like a donut) than a thin belt<br/><br/>The Kuiper Belt is truly a frontier in space – it's a place we're still just beginning to explore and our understanding is still evolving.<br/><br/>In 1930, Pluto became the first Kuiper Belt object to be discovered. It was found at a time before astronomers had reason to expect a large population of icy worlds beyond Neptune. Today it's known as the "King of the Kuiper Belt" – and it's the largest object in the region.</p></div></Html>}

      {isClickedMoon && <Html position={[null]}><div id='containerMoon'><h1 id='name'>The Moon</h1><p id='planet'>“The prevailing idea is that the Moon was formed in a violent event between the proto-Earth – an early-stage Earth that was much bigger than it is today – and an object (labelled ‘Theia’) about the size of Mars,” explains Robert Massey, deputy executive director of the Royal Astronomical Society. “Debris was ejected into space and then coalesced to form the Moon.” Modern research seems to confirm the Moon is made of material from the early Earth’s crust. Dubbed the ‘Giant Impact Hypothesis,’ this collision is believed to have happened 4.5 billion years ago and would have been 100 million times larger than the event which wiped out the dinosaurs.<br/><br/>“Because the Moon has no protective atmosphere, the surface experiences extreme temperatures, from incredibly cold on the far ‘night’ side and above boiling on the ‘sunny’ near side,” explains Massey. According to NASA, the Moon’s temperature can span from 123 degrees Celsius to -233 degrees Celsius. Its mean surface temperature is 107 degrees Celsius in the day and -153 degrees Celsius at night.</p></div></Html>}

      {isRotating && <Html position={[null]}><div id='speedBox'><h1 id='speedDis'>Orbit Speeds</h1><p id="speed">Mercury - 47.87 km/s</p><p id="speed">Venus- 35.02 km/s</p><p id="speed">Earth- 29.78 km/s</p><p id="speed">Mars - 24.077 km/s</p><p id="speed">Jupiter - 13.07 km/s</p><p id="speed">Saturn - 9.69 km/s</p><p id="speed">Uranus - 6.81 km/s</p><p id="speed">Neptune - 5.43 km/s</p></div></Html>}

      <Html position={[null]}><button id='refresh' onClick={handleClick}>Reset Orbit Position</button></Html>
      <Html position={[null]}><button id='rotate' onClick={handleRotateClick}>Toggle Orbit</button></Html>
      {isClickedFact && <Html position={[null]}><button id='hideFact' onClick={handleHideFact}>Hide Fact</button></Html>}

      {/*Create objects*/}
      <group ref={sun}>
        <mesh onClick={handleClickSun}>
          <Sphere args={[1, 80, 80]} scale={10} position={[0, 0, 0]}>
            <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/700_sunMap.jpg'))} />
          </Sphere>
        </mesh>
        <mesh onClick={handleClickSun} onPointerOver={() => { document.body.style.cursor = 'pointer'; }} onPointerOut={() => { document.body.style.cursor = 'auto'; }}>
          <Sphere args={[1, 80, 80]} scale={10.3} position={[0, 0, 0]}>
            <meshPhysicalMaterial
              roughness={0} reflectivity={1} metalness={0} transmission={1} clearcoat={1} clearcoatRoughness={0} ior={1} color={'yellow'} />
          </Sphere>
        </mesh>
      </group>

      <mesh ref={astroidBelt} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <Ring args={[45, 52, 100]} material={beltMaterial} />
      </mesh>

      <mesh ref={kuiperBelt} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} onClick={handleBeltClick} onPointerOver={() => { document.body.style.cursor = 'pointer'; }} onPointerOut={() => { document.body.style.cursor = 'auto'; }}>
        <Ring args={[135, 210, 100]} material={beltMaterial} />
      </mesh>

      <group ref={mercuryGroup} position={[0, 0, 0]}>
        <group ref={mercuryObject} position={[16, 0, 0]}>
          <mesh onPointerOver={() => { document.body.style.cursor = "pointer"; }} onPointerOut={() => { document.body.style.cursor = "auto"; }}>
            <Sphere ref={mercury} args={[1, 80, 80]} scale={0.1} onClick={handleClickMercury}>
              <meshStandardMaterial map={useLoader(THREE.TextureLoader, "./src/assets/img/700_mercMap.jpg")} />
            </Sphere>
          </mesh>
        </group>
      </group>

      <group ref={venusGroup} position={[0, 0, 0]}>
        <group ref={venusObject} position={[22, 0, 0]}>
          <mesh onPointerOver={() => { document.body.style.cursor = 'pointer'; }} onPointerOut={() => { document.body.style.cursor = 'auto'; }}>
            <Sphere ref={venus} args={[1, 80, 80]} scale={0.3} onClick={handleClickVenus}>
              <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/700_venus_atmosphere.jpg'))} />
            </Sphere>
          </mesh>
        </group>
      </group>

      <group ref={earthGroup} position={[0, 0, 0]}>
        <group ref={earthObject} position={[28, 0, 0]}>
          <mesh onPointerOver={() => { document.body.style.cursor = 'pointer'; }} onPointerOut={() => { document.body.style.cursor = 'auto'; }}>
            <Sphere ref={earth} args={[1, 80, 80]} scale={0.4} rotation={[-Math.PI / 2, 1.8, Math.PI / 2]} onClick={handleClickEarth}>
              <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/2k_earth.jpg'))} />
            </Sphere>
          </mesh>
        </group>
      </group>

      <group ref={moonPos} position={[0, 0, 0]}>
        <group ref={moonObject} position={[28, 0, 0]}>
          <mesh onPointerOver={() => { document.body.style.cursor = 'pointer'; }} onPointerOut={() => { document.body.style.cursor = 'auto'; }}>
            <Sphere ref={moonPosEarth} onClick={handleClickMoon} args={[1, 80, 80]} scale={0.08} position={[1, 0.5, 0]} rotation={[-Math.PI / 2, 1.8, Math.PI / 2]}>
              <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/moonTexture.jpg'))} />
            </Sphere>
          </mesh>
        </group>
      </group>

      <group ref={marsGroup} position={[0, 0, 0]}>
        <group ref={marsObject} position={[36, 0, 0]}>
          <mesh onPointerOver={() => { document.body.style.cursor = 'pointer'; }} onPointerOut={() => { document.body.style.cursor = 'auto'; }}>
            <Sphere ref={mars} args={[1, 80, 80]} scale={0.2} rotation={[-Math.PI / 2, 1.8, Math.PI / 2]} onClick={handleClickMars} >
              <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/2k_mars.jpg'))} />
            </Sphere>
          </mesh>
        </group>
      </group>

      <group ref={jupiterGroup} position={[0, 0, 0]}>
        <group ref={jupiterObject} position={[62, 0, 0]}>
          <mesh onPointerOver={() => { document.body.style.cursor = 'pointer'; }} onPointerOut={() => { document.body.style.cursor = 'auto'; }}>
            <Sphere ref={jupiter} args={[1, 80, 80]} scale={2} rotation={[-Math.PI / 2, 1.7, Math.PI / 2]} onClick={handleClickJupiter}>
              <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/2k_jupiter.jpg'))} />
            </Sphere>
          </mesh>
        </group>
      </group>


      <group ref={saturnGroup} position={[0, 0, 0]}>
        <group ref={saturnObject} position={[85, 0, 0]}>
          <mesh onPointerOver={() => { document.body.style.cursor = 'pointer'; }} onPointerOut={() => { document.body.style.cursor = 'auto'; }}>
            <Sphere ref={saturn} args={[1, 80, 80]} scale={1.3} rotation={[-Math.PI / 2, 1, Math.PI / 2]} onClick={handleClickSaturn}>
              <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/700_saturn.jpg'))} />
            </Sphere>
          </mesh>
        </group>


        <mesh>
          <Ring args={[3, 3.2, 100]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]} position={[85, 0, 0]}>
            <meshPhysicalMaterial
              roughness={0} reflectivity={1} metalness={0} transmission={0.9} clearcoat={1} clearcoatRoughness={0} ior={1} color={'#8a673a'} side={THREE.DoubleSide} />
          </Ring>
        </mesh>
        <mesh>
          <Ring args={[3.3, 3.6, 100]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]} position={[85, 0, 0]}>
            <meshPhysicalMaterial
              roughness={0} reflectivity={1} metalness={0} transmission={0.9} clearcoat={1} clearcoatRoughness={0} ior={1} color={'#fff0e2'} side={THREE.DoubleSide} />
          </Ring>
        </mesh>
        <mesh>
          <Ring args={[3.7, 3.8, 100]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]} position={[85, 0, 0]}>
            <meshPhysicalMaterial
              roughness={0} reflectivity={1} metalness={0} transmission={0.9} clearcoat={1} clearcoatRoughness={0} ior={1} color={'#d8c08c'} side={THREE.DoubleSide} />
          </Ring>
        </mesh>
        <mesh>
          <Ring args={[3.8, 3.9, 100]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]} position={[85, 0, 0]}>
            <meshPhysicalMaterial
              roughness={0} reflectivity={1} metalness={0} transmission={0.9} clearcoat={1} clearcoatRoughness={0} ior={1} color={'#68572a'} side={THREE.DoubleSide} />
          </Ring>
        </mesh>
        <mesh>
          <Ring args={[4, 4.05, 100]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]} position={[85, 0, 0]}>
            <meshPhysicalMaterial
              roughness={0} reflectivity={1} metalness={0} transmission={0.95} clearcoat={1} clearcoatRoughness={0} ior={1} color={'#4c00ff'} side={THREE.DoubleSide} />
          </Ring>
        </mesh>
        <mesh>
          <Ring args={[4.2, 4.3, 100]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]} position={[85, 0, 0]}>
            <meshPhysicalMaterial
              roughness={0} reflectivity={1} metalness={0} transmission={0.9} clearcoat={1} clearcoatRoughness={0} ior={1} color={'#f0da9f'} side={THREE.DoubleSide} />
          </Ring>
        </mesh>
        <mesh>
          <Ring args={[4.4, 4.5, 100]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]} position={[85, 0, 0]}>
            <meshPhysicalMaterial
              roughness={0} reflectivity={1} metalness={0} transmission={0.9} clearcoat={1} clearcoatRoughness={0} ior={1} color={'#fffbf1'} side={THREE.DoubleSide} />
          </Ring>
          <mesh>
            <Ring args={[4.7, 4.8, 100]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]} position={[85, 0, 0]}>
              <meshPhysicalMaterial
                roughness={0} reflectivity={1} metalness={0} transmission={0.9} clearcoat={1} clearcoatRoughness={0} ior={1} color={'#cebfa3'} side={THREE.DoubleSide} />
            </Ring>
          </mesh>
        </mesh>
        <mesh>
          <Ring args={[4.5, 4.7, 100]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]} position={[85, 0, 0]}>
            <meshPhysicalMaterial
              roughness={0} reflectivity={1} metalness={0} transmission={0.9} clearcoat={1} clearcoatRoughness={0} ior={1} color={'#4d3d1c'} side={THREE.DoubleSide} />
          </Ring>
        </mesh>
        <mesh>
          <Ring args={[4.8, 5, 100]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]} position={[85, 0, 0]}>
            <meshPhysicalMaterial
              roughness={0} reflectivity={1} metalness={0} transmission={0.9} clearcoat={1} clearcoatRoughness={0} ior={1} color={'#8f8067'} side={THREE.DoubleSide} />
          </Ring>
        </mesh>
        <mesh>
          <Ring args={[5, 5.05, 100]} rotation={[-Math.PI / 2, 5.8, Math.PI / 2]} position={[85, 0, 0]}>
            <meshPhysicalMaterial
              roughness={0} reflectivity={1} metalness={0} transmission={0.95} clearcoat={1} clearcoatRoughness={0} ior={1} color={'#5900ff'} side={THREE.DoubleSide} />
          </Ring>
        </mesh>
      </group>


      <group ref={uranusGroup} position={[0, 0, 0]}>
        <group ref={uranusObject} position={[105, 0, 0]}>
          <mesh onPointerOver={() => { document.body.style.cursor = 'pointer'; }} onPointerOut={() => { document.body.style.cursor = 'auto'; }}>
            <Sphere ref={uranus} args={[1, 80, 80]} scale={1} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} onClick={handleClickUranus}>
              <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/uranusTexture.jpg'))} />
            </Sphere>
          </mesh>
        </group>

        <mesh>
          <Ring args={[2, 2.1, 100]} rotation={[-Math.PI / 2, 4.8, Math.PI / 2]} position={[105, 0, 0]}>
            <meshPhysicalMaterial
              roughness={0} reflectivity={0} metalness={0} transmission={0.98} clearcoat={0} clearcoatRoughness={0} ior={1} color={'#ffffff'} side={THREE.DoubleSide} />
          </Ring>
        </mesh>
        <mesh>
          <Ring args={[2.2, 2.25, 100]} rotation={[-Math.PI / 2, 4.8, Math.PI / 2]} position={[105, 0, 0]}>
            <meshPhysicalMaterial
              roughness={0} reflectivity={0} metalness={0} transmission={0.95} clearcoat={0} clearcoatRoughness={0} ior={1} color={'#d0fcff'} side={THREE.DoubleSide} />
          </Ring>
        </mesh>
        <mesh>
          <Ring args={[2.3, 2.45, 100]} rotation={[-Math.PI / 2, 4.8, Math.PI / 2]} position={[105, 0, 0]}>
            <meshPhysicalMaterial
              roughness={0} reflectivity={0} metalness={0} transmission={0.98} clearcoat={0} clearcoatRoughness={0} ior={1} color={'#ffffff'} side={THREE.DoubleSide} />
          </Ring>
        </mesh>
      </group>


      <group ref={neptuneGroup} position={[0, 0, 0]}>
        <group ref={neptuneObject} position={[125, 0, 0]}>
          <mesh onPointerOver={() => { document.body.style.cursor = 'pointer'; }} onPointerOut={() => { document.body.style.cursor = 'auto'; }}>
            <Sphere ref={neptune} args={[1, 80, 80]} scale={1} rotation={[-Math.PI / 2, 1.3, Math.PI / 2]} onClick={handleClickNeptune} >
              <meshStandardMaterial map={useLoader(THREE.TextureLoader, ('./src/assets/img/700_neptuneTexture.jpg'))} />
            </Sphere>
          </mesh>
        </group>

        <mesh>
          <Ring args={[2.3, 2.35, 100]} rotation={[-Math.PI / 2, 6.1, Math.PI / 2]} position={[125, 0, 0]}>
            <meshStandardMaterial color={'#383838'} opacity={'0.5'} side={THREE.DoubleSide} />
          </Ring>
        </mesh>
        <mesh>
          <Ring args={[2.4, 2.45, 100]} rotation={[-Math.PI / 2, 6.1, Math.PI / 2]} position={[125, 0, 0]}>
            <meshStandardMaterial color={'#313131'} opacity={'0.5'} side={THREE.DoubleSide} />
          </Ring>
        </mesh>
      </group>
      <OrbitControls ref={controlsRef} enablePan={false} args={[camera, gl.domElement]} />
    </group>

  )
}