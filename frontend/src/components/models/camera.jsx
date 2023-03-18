import React, { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { gsap } from 'gsap';

const Camera = () => {
  const cameraRef = useRef();
  const { size } = useThree();

  useEffect(() => {
    gsap.to(cameraRef.current.position, {
      x: 0,
      y: 0,
      z: 10,
      duration: 7,
      delay: 0.5,
    });
  }, []);

  return (
    <perspectiveCamera
      ref={cameraRef}
      position={[0, 0, 500]}
      aspect={size.width / size.height}
      near={0.1}
      far={10000}
    >
    </perspectiveCamera>
  );
};

export default Camera;