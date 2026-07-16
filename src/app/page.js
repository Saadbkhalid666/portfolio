"use client";

import Scene from "./components/Scene";


export default function Home() {
  return (
    <main className="w-screen h-screen bg-black overflow-hidden relative select-none">
      
      {/* Left Text Overlay */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <h1 className="text-white text-6xl font-bold leading-tight tracking-tight">
          Saad <br /> Bin Khalid
        </h1>
      </div>

      {/* Right Text Overlay */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 text-right z-10 pointer-events-none">
        <h2 className="text-gray-400 text-4xl font-semibold">Full Stack</h2>
        <h2 className="text-blue-500 text-4xl font-extrabold mt-1">Engineer</h2>
      </div>

      <Scene   />
    </main>
  );
}