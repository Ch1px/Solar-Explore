import { useEffect} from 'react';
import { Canvas } from '@react-three/fiber'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap'
import MouseMeshInteraction from '@danielblagy/three-mmi/module/three_mmi.js';
import {CSS2DRenderer, CSS2DObject} from 'three/examples/jsm/renderers/CSS2DRenderer'

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
import { MeshLambertMaterial } from 'three';


function Planets() {
  useEffect(() => {
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setClearColor(0xffffff)

camera.position.setZ(200);
camera.position.setY(10);
camera.position.setX(0);
renderer.render(scene, camera);


const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
labelRenderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(labelRenderer.domElement);

const p = document.createElement('p')
p.className = 'tip';
const pContainer = document.createElement('div');
pContainer.appendChild(p)
const cPointLabel = new CSS2DObject(pContainer)
scene.add(cPointLabel);

const mousePos = new THREE.Vector2();
const raycaster = new THREE.Raycaster();


//Create objects

const group = new THREE.Group();

//Create sun
const sun = new THREE.Mesh( 
  new THREE.SphereGeometry( 70,50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: sunVertexShader,
    fragmentShader: sunFragmentShader,
    uniforms:{
      sunTexture: {
        value: new THREE.TextureLoader().load('src/assets/img/sunTexture.jpg')
      }
    }
   } ));
sun.name = 'sun'
sun.position.set(-170,0,0);
group.add(sun);

//Add shaders
const sunAtmosphere = new THREE.Mesh( 
  new THREE.SphereGeometry( 70, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: sunAVertexShader,
    fragmentShader: sunAFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
   } )
);
sunAtmosphere.scale.set(1.05,1.05,1.05)
sunAtmosphere.position.set(-170,0,0);
scene.add(sunAtmosphere);


//create mercury
const mercury = new THREE.Mesh(
  new THREE.SphereGeometry( 1.6, 50, 50 ), 
  new THREE.ShaderMaterial( { 
    vertexShader: merVertexShader,
    fragmentShader: merFragmentShader,
    uniforms:{
      mercuryTexture:{
        value: new THREE.TextureLoader().load('src/assets/img/mercuryTexture.jpg')
      }
    }
   } ) );
mercury.name = 'mercury';
mercury.position.set(-90,0,0);
group.add(mercury);

//add shaders



//create venus
const venus = new THREE.Mesh(
  new THREE.SphereGeometry( 2.2, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: venusVertexShader,
    fragmentShader: venusFragmentShader,
    uniforms:{
      venusTexture:{
        value: new THREE.TextureLoader().load('src/assets/img/venusTexture.jpg')
      }
    }
  } ) );
venus.name = 'venus'
venus.position.set(-75,0,0);
group.add(venus);

//add shaders
const venusAtmosphere = new THREE.Mesh( 
  new THREE.SphereGeometry( 2.2, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: venusAVertexShader,
    fragmentShader: venusAFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
   } )
);
venusAtmosphere.scale.set(1.07,1.07,1.07)
venusAtmosphere.position.set(-75,0,0);
scene.add(venusAtmosphere);


//create earth
const earth = new THREE.Mesh(
  new THREE.SphereGeometry( 3, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: earthVertexShader,
    fragmentShader: earthFragmentShader,
    uniforms:{
      earthTexture:{
        value: new THREE.TextureLoader().load('src/assets/img/EarthTexture.jpg')
      }
    }
  } ) );
earth.name = 'earth'
earth.position.set(-60,0,0);
group.add(earth);

//add shaders
const earthAtmosphere = new THREE.Mesh( 
  new THREE.SphereGeometry( 3, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: earthAVertexShader,
    fragmentShader: earthAFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
   } )
);
earthAtmosphere.scale.set(1.07,1.07,1.07)
earthAtmosphere.position.set(-60,0,0);
scene.add(earthAtmosphere);


//create moon
const moon = new THREE.Mesh(
  new THREE.SphereGeometry( 0.6, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: moonVertexShader,
    fragmentShader: moonFragmentShader,
    uniforms:{
      moonTexture:{
        value: new THREE.TextureLoader().load('src/assets/img/moonTexture.jpg')
      }
    }
   } )
);
moon.name = 'moon'
moon.position.set(-55,1.5,0);
group.add(moon);

//add shaders
const moonAtmosphere = new THREE.Mesh( 
  new THREE.SphereGeometry( 0.6, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: moonAVertexShader,
    fragmentShader: moonAFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
   } )
);
moonAtmosphere.scale.set(1.03,1.03,1.03)
moonAtmosphere.position.set(-55,1.5,0);
scene.add(moonAtmosphere);


//create mars
const mars = new THREE.Mesh(
  new THREE.SphereGeometry( 2, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: marsVertexShader,
    fragmentShader: marsFragmentShader,
    uniforms:{
      marsTexture:{
        value: new THREE.TextureLoader().load('src/assets/img/marsTexture.jpg')
      }
    }
  } ) );
mars.name = 'mars'
mars.position.set(-43,0,0);
group.add(mars);

//add shaders
const marsAtmosphere = new THREE.Mesh( 
  new THREE.SphereGeometry( 2, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: marsAVertexShader,
    fragmentShader: marsAFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
   } )
);
marsAtmosphere.scale.set(1.07,1.07,1.07)
marsAtmosphere.position.set(-43,0,0);
scene.add(marsAtmosphere);



//create jupiter
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry( 20, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: jupiterVertexShader,
    fragmentShader: jupiterFragmentShader,
    uniforms:{
      jupiterTexture:{
        value: new THREE.TextureLoader().load('src/assets/img/jupiterTexture.jpg')
      }
    }
  } ) );
jupiter.name = 'jupiter'
jupiter.position.set(0,0,0);
group.add(jupiter);

//add shaders
const jupiterAtmosphere = new THREE.Mesh( 
  new THREE.SphereGeometry( 20, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: jupiterAVertexShader,
    fragmentShader: jupiterAFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
   } )
);
jupiterAtmosphere.scale.set(1.07,1.07,1.07)
jupiterAtmosphere.position.set(0,0,0);
scene.add(jupiterAtmosphere);



//create saturn
const saturn = new THREE.Mesh(
  new THREE.SphereGeometry( 10, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: saturnVertexShader,
    fragmentShader: saturnFragmentShader,
    uniforms:{
      saturnTexture:{
        value: new THREE.TextureLoader().load('src/assets/img/saturnTexture.jpg')
      }
    }
   } )
);
saturn.name = 'saturn'
saturn.rotateX(-4);
saturn.position.set(70,0,0);
group.add(saturn);

const saturnAtmosphere = new THREE.Mesh( 
  new THREE.SphereGeometry( 10, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: saturnAVertexShader,
    fragmentShader: saturnAFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
   } )
);
saturnAtmosphere.scale.set(1.07,1.07,1.07)
saturnAtmosphere.position.set(70,0,0);
scene.add(saturnAtmosphere);

//create saturn ring
const ring = new THREE.Mesh(
  new THREE.TorusGeometry( 20, 3, 2, 40 ),
  new THREE.ShaderMaterial( {
    vertexShader: ringVertexShader,
    fragmentShader: ringFragmentShader,
    uniforms:{
      ringTexture:{
        value: new THREE.TextureLoader().load('src/assets/img/ringTexture.jpg')
      }
    }
   } )
);
ring.rotateY(7.7)
ring.rotateX(7.2);
ring.position.set(70,0,0);
scene.add( ring );

//add shaders
const ringAtmosphere = new THREE.Mesh( 
  new THREE.TorusGeometry( 19, 6, 2, 40 ),
  new THREE.ShaderMaterial( {
    vertexShader: ringAVertexShader,
    fragmentShader: ringAFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
   } )
);
ringAtmosphere.scale.set(1.1,1.1,1.1)
ringAtmosphere.rotateY(7.7)
ringAtmosphere.rotateX(7.2);
ringAtmosphere.position.set(70,0,0);
scene.add(ringAtmosphere);



//create uranus
const uranus = new THREE.Mesh(
  new THREE.SphereGeometry( 5, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: uranusVertexShader,
    fragmentShader: uranusFragmentShader,
    uniforms:{
      uranusTexture:{
        value: new THREE.TextureLoader().load('src/assets/img/uranusTexture.jpg')
      }
    } } ));
uranus.name = 'uranus'
uranus.position.set(115,0,0);
group.add(uranus);

//add shaders
const uranusAtmosphere = new THREE.Mesh( 
  new THREE.SphereGeometry( 5, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: uranusAVertexShader,
    fragmentShader: uranusAFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
   } )
);
uranusAtmosphere.scale.set(1.07,1.07,1.07)
uranusAtmosphere.position.set(115,0,0);
scene.add(uranusAtmosphere);


//create neptune
const neptune = new THREE.Mesh(
  new THREE.SphereGeometry( 5, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: neptuneVertexShader,
    fragmentShader: neptuneFragmentShader,
    uniforms:{
      neptuneTexture:{
        value: new THREE.TextureLoader().load('src/assets/img/neptuneTexture.jpg')
      }
    } } ));
neptune.name = 'neptune'
neptune.position.set(155,0,0);
group.add(neptune);

//add shaders
const neptuneAtmosphere = new THREE.Mesh( 
  new THREE.SphereGeometry( 5, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: neptuneAVertexShader,
    fragmentShader: neptuneAFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
   } )
);
neptuneAtmosphere.scale.set(1.07,1.07,1.07)
neptuneAtmosphere.position.set(155,0,0);
scene.add(neptuneAtmosphere);



//create pluto
const pluto = new THREE.Mesh(
  new THREE.SphereGeometry( 1, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: plutoVertexShader,
    fragmentShader: plutoFragmentShader,
    uniforms:{
      plutoTexture:{
        value: new THREE.TextureLoader().load('src/assets/img/plutoTexture.png')
      }
    }
   } )
);
pluto.name = 'pluto';
pluto.position.set(200,0,0);
group.add(pluto);

//add shaders
const plutoAtmosphere = new THREE.Mesh( 
  new THREE.SphereGeometry( 1, 50, 50 ),
  new THREE.ShaderMaterial( {
    vertexShader: plutoAVertexShader,
    fragmentShader: plutoAFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
   } )
);
plutoAtmosphere.scale.set(1.07,1.07,1.07)
plutoAtmosphere.position.set(200,0,0);
scene.add(plutoAtmosphere);

scene.add(group)


/**lighting
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(150,0,0)**/
const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight);

//const gridHelper = new THREE.GridHelper(300,50);
//scene.add(gridHelper);


const controls = new OrbitControls(camera, renderer.domElement);

//Add background stars
function addStar() {
  const geometry = new THREE.SphereGeometry(0.5,24,24);
  const material = new THREE.MeshStandardMaterial( {color: 0xffffff} );
  const star = new THREE.Mesh(geometry,material);

  const [x,y,z] = Array(10000).fill().map(() => THREE.MathUtils.randFloatSpread(3000));

  star.position.set(x,y,z);
  star.rotation.y += 0.01;
  scene.add(star);
}
Array(2000).fill().forEach(addStar)



window.addEventListener('click', function(e) {
  mousePos.x = (e.clientX / this.window.innerWidth) * 2 - 1;
  mousePos.y = (e.clientY / this.window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mousePos, camera);
  const intersects = raycaster.intersectObjects(group);
  if(intersects.length > 0) {
    switch (intersects[0].object.name) {
      case 'sun':
        p.className = 'tip show';
        cPointLabel.position.set(0, 80, 0);
        p.textContent='The sun';
          break;
        default:
          break;
    }
  }
})



//Zoom into planet on click
const mmi = new MouseMeshInteraction(scene, camera);

mmi.addHandler('sun', 'click', function(){
    p.className = 'tip show';
    cPointLabel.position.set(-170, 80, 0);
    p.textContent='The sun';
});

mmi.addHandler('mercury', 'click', function(){
  p.className = 'tip show';
  cPointLabel.position.set(-90, 20, 0);
  p.textContent='Mercury';
});

mmi.addHandler('venus', 'click', function(mesh){
  gsap.to(camera.position, {
    x: -75,
    z:6,
    y:0,
    duration: 4
  });
});

mmi.addHandler('earth', 'click', function(mesh){
  gsap.to(camera.position, {
    x: -60,
    z:7,
    y:0,
    duration: 4
  });
});

mmi.addHandler('moon', 'click', function(mesh){
  gsap.to(camera.position, {
    x: -55,
    z: 2,
    y: 1.5,
    duration: 4
  });
});

mmi.addHandler('mars', 'click', function(mesh){
  gsap.to(camera.position, {
    x: -43,
    z:6,
    y:0,
    duration: 4
  });
});

mmi.addHandler('jupiter', 'click', function(mesh){
  gsap.to(camera.position, {
    x: 0,
    z:40,
    y:0,
    duration: 4
  });
});

mmi.addHandler('saturn', 'click', function(mesh){
  gsap.to(camera.position, {
    x: 70,
    z:30,
    y:0,
    duration: 4
  });
});

mmi.addHandler('uranus', 'click', function(mesh){
  gsap.to(camera.position, {
    x: 115,
    z:11,
    y:0,
    duration: 4
  });
});

mmi.addHandler('neptune', 'click', function(mesh){
  gsap.to(camera.position, {
    x: 155,
    z:11,
    y:0,
    duration: 4
  });
});

mmi.addHandler('pluto', 'click', function(mesh){
  gsap.to(camera.position, {
    x: 200,
    z:5,
    y:0,
    duration: 4
  });
});

window.addEventListener('resize', function() {
  labelRenderer.setSize(this.window.innerWidth, this.window.innerHeight);
})


//create animations/ handle updates
function animate() {

  requestAnimationFrame( animate );

  sun.rotation.y += 0.001;
  mercury.rotation.y += 0.003;
  venus.rotation.y += 0.003;
  earth.rotation.y += 0.002;
  moon.rotation.y += 0.001;
  mars.rotation.y += 0.003;
  jupiter.rotation.y += 0.001;
  saturn.rotation.y += 0.001;
  ring.rotation.z += 0.001
  uranus.rotation.y += 0.003;
  neptune.rotation.y += 0.003;
  pluto.rotation.y += 0.005;

  earth.rotateY(0.004);

  renderer.render(scene,camera);
  labelRenderer.render(scene, camera);
  mmi.update();
  //interactionManager.update();
  controls.update();
}

animate()
  }, []);
}

export default Planets;