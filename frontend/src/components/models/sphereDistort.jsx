import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import Starfield from "./StarField";

const SphereDistort = () => {
    const sphereRef = useRef();
    const { size } = useThree();
  
    useFrame(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      
      if (mediaQuery.matches) {
        sphereRef.current.scale.set(0.5, 0.5, 0.5);
      } else {
        sphereRef.current.scale.set(1, 1, 1);
      }
    });

    return (
        <>
            <Starfield />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <mesh ref={sphereRef}>
            <Sphere args={[1, 50, 50]} scale={1.1}>
                <MeshDistortMaterial color="#751947" attach="material" distort={0.5} speed={2} />
            </Sphere>
            </mesh>
        </>
    )

}

export default SphereDistort;
