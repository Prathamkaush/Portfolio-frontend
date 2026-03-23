import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";

function InteractiveShapes() {
  const sphereRef = useRef(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere ref={sphereRef} args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#9333ea"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
            metalness={0.8}
            wireframe={false}
          />
        </Sphere>
      </Float>

      <Float speed={3} rotationIntensity={2} floatIntensity={3}>
        <Sphere args={[0.5, 32, 32]} position={[2, 1, -2]}>
          <MeshDistortMaterial
            color="#10b981"
            attach="material"
            distort={0.5}
            speed={3}
            roughness={0.2}
            metalness={0.5}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.8, 32, 32]} position={[-2, -1.5, -1]}>
          <MeshDistortMaterial
            color="#a855f7"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={1}
            wireframe={true}
          />
        </Sphere>
      </Float>
    </>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#10b981" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#9333ea" />
        <InteractiveShapes />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
