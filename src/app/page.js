"use client";

import { useEffect, useRef } from "react";
import Scene from "./components/Scene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const canvasContainerRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const container = canvasContainerRef.current;
    
    // Create a matchMedia context to handle mobile vs desktop animation rules cleanly
    let mm = gsap.matchMedia();

    mm.add({
      // Define breakpoints
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      let { isDesktop } = context.conditions;

      if (isDesktop) {
        // --- DESKTOP ANIMATION ---
        // Globe starts dead center and shifts left on scroll
        gsap.to(container, {
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1, // Smoothly links the animation to scroll progress
          },
          x: "-25%", // Shift left
          scale: 0.9, // Subtly scale down for the details view
          ease: "none",
        });
      } else {
        // --- MOBILE ANIMATION ---
        // Globe remains centered, but gets pushed up and scaled as the user scrolls
        gsap.to(container, {
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
          y: "-20%", // Parallax upward drift
          scale: 0.75, // Keeps it nicely within vertical boundaries
          ease: "none",
        });
      }
    });

    return () => mm.revert(); // Cleanup GSAP matchMedia & triggers on unmount
  }, []);

  return (
    <main ref={mainRef} className="w-full min-h-[200vh] bg-black text-white relative">
      
      {/* Dynamic Floating 3D WebGL Container */}
      <div 
        ref={canvasContainerRef} 
        className="fixed inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center"
      >
        <Scene />
      </div>

      {/* --- SECTION 1: HERO --- */}
      <section className="w-full h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 relative z-10">
        {/* Left Headline */}
        <div className="mt-20 md:mt-0 flex flex-col text-center md:text-left select-none">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight">
            Saad <br className="hidden md:block"/> Bin Khalid
          </h1>
          <p className="text-gray-400 mt-4 text-sm md:text-base max-w-xs">
            Sculpting digital experiences through precise web design & interactive graphics.
          </p>
        </div>

        {/* Right Headline */}
        <div className="mb-20 md:mb-0 flex flex-col text-center md:text-right select-none">
          <h2 className="text-gray-400 text-3xl md:text-5xl font-semibold">Full Stack</h2>
          <h2 className="text-blue-500 text-3xl md:text-5xl font-extrabold mt-1">Engineer</h2>
        </div>
      </section>

      {/* --- SECTION 2: ABOUT --- */}
      <section className="w-full h-screen flex items-center justify-center md:justify-end px-6 md:px-32 relative z-10">
        {/* On desktop, this is pushed to the right side, avoiding the shifted globe */}
        <div className="max-w-xl bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 mt-32 md:mt-0">
          <h3 className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-2">About Me</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Crafting Interactive Environments</h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
            I specialize in bridging the gap between design and technology. By integrating complex 3D math, 
            GLSL custom shaders, and real-time physics engines right into standard web applications, I build layouts 
            that capture attention and guarantee performance.
          </p>
          <div className="flex gap-4">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Next.js</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Three.js</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">GSAP</span>
          </div>
        </div>
      </section>
      
    </main>
  );
}