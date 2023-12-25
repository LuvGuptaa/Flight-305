import { Float, OrbitControls } from "@react-three/drei";
import Background from "./Background";
import * as THREE from 'three'
import { Airplane } from "./Airplane";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Background />
      <Float floatIntensity={2} speed={2}>
      <Airplane rotation-y={Math.PI /2} scale={[0.2, 0.2, 0.2]} position-y={0.1} />
      </Float>
      <ambientLight intensity={1} />
    </>
  );
};
