import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import Starfield from "./StarField";

const SphereDistort = () => {

    return (
        <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <Starfield />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.25}>
                <MeshDistortMaterial color="#751947" attach="material" distort={0.5} speed={2} />
            </Sphere>
        </Canvas>
    )

}

export default SphereDistort;