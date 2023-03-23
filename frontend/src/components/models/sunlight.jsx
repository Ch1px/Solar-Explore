function SunLight(props) {

  return (
    <>
      <mesh position={props.position}>
        <sphereGeometry args={[7, 100, 100]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <pointLight intensity={1} distance={400} shadow={true} />
    </>
  );
}

export default SunLight;