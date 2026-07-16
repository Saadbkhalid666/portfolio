"use client";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "@/components/Model";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-black overflow-hidden relative">
      {/* Left Text */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 z-10">
        <h1 className="text-white text-6xl font-bold leading-tight">
          Saad <br /> Bin Khalid
        </h1>
      </div>

      {/* Right Text */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 text-right z-10">
        <h2 className="text-gray-300 text-4xl font-semibold">Full Stack</h2>

        <h2 className="text-blue-500 text-4xl font-semibold">Engineer</h2>
      </div>

      <Canvas camera={{ position: [0, 1.6, 3], fov: 35 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={3} />

        <Environment preset="city" />

        <Model />
      </Canvas>
    </main>
  );
}
