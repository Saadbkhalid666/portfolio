"use client";

import { Canvas } from "@react-three/fiber";
import AnimatedSphere from "./AnimatedSphere";

export default function Scene() {
  return (
    <div className="fixed inset-0 w-full h-full bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        {/* Soft atmospheric lighting */}
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        
        {/* The dynamic 3D wobbly sphere */}
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}