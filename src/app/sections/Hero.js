"use client";

import Scene from "../components/Scene";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

export const Hero = () => {
  const heroRef = useRef(null);
  const sceneRef = useRef(null);
  const greetingRef = useRef(null);
  const nameRef = useRef(null);
  const roleLabelRef = useRef(null);
  const roleLine1Ref = useRef(null);
  const roleLine2Ref = useRef(null);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saad Bin Khalid",
    "jobTitle": "Full-Stack Engineer",
    "description": "Portfolio of Saad Bin Khalid, a Full-Stack Engineer specializing in modern web applications.",
    "knowsAbout": ["Full-Stack Development", "Web Development", "React", "Next.js", "Node.js"]
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        sceneRef.current,
        { autoAlpha: 0, scale: 0.92 },
        { autoAlpha: 1, scale: 1, duration: 1.4, ease: "power3.out" }
      )
        .fromTo(
          greetingRef.current,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "-=1.1"
        )
        .fromTo(
          nameRef.current.querySelectorAll(".hero-line"),
          { autoAlpha: 0, y: 46, skewY: 4 },
          { autoAlpha: 1, y: 0, skewY: 0, duration: 0.9, stagger: 0.12 },
          "-=0.5"
        )
        .fromTo(
          roleLabelRef.current,
          { autoAlpha: 0, x: 24 },
          { autoAlpha: 1, x: 0, duration: 0.6 },
          "-=0.55"
        )
        .fromTo(
          [roleLine1Ref.current, roleLine2Ref.current],
          { autoAlpha: 0, y: 34 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1 },
          "-=0.45"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} aria-label="Introduction" className="relative h-screen overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div
        ref={sceneRef}
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <Scene />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 grid md:grid-cols-3 items-center">
        <header className="flex flex-col justify-center mt-10 sm:mt-0">
          <p ref={greetingRef} className="text-zinc-400 text-lg mb-2 font-inter">
            Hello I&apos;m
          </p>

          <h1 ref={nameRef} className="text-5xl md:text-6xl font-semibold text-[#f5f5f7] font-ancizar overflow-hidden">
            <span className="hero-line block">Saad</span>
            <span className="hero-line block">Bin Khalid</span>
          </h1>
        </header>

        <div aria-hidden="true"></div>

        <div className="flex justify-end mt-30">
          <div className="leading-none">
            <h2 ref={roleLabelRef} className="text-[#6e6e73] font-instrument text-base font-normal">
              01 - Role
            </h2>

            <p
              ref={roleLine1Ref}
              className="font-ancizar block text-5xl font-semibold md:text-6xl bg-linear-to-b from-white to-black bg-clip-text text-transparent"
            >
              Full-Stack
            </p>

            <p
              ref={roleLine2Ref}
              className="text-right font-ancizar block md:text-6xl text-white text-5xl font-semibold -mt-4"
            >
              Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};