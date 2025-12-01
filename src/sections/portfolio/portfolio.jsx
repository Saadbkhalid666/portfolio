import { Card } from "../../components/cards/cards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export const Portfolio = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current; // move inside effect
    if (!container) return;

    const cards = container.querySelectorAll(".card");
    if (!cards.length) return;

    gsap.from(cards, {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none reverse",
        markers: true, // can remove later
      },
    });
  }, []);

  return (
    <section id="portfolio" className="w-full py-16 px-4 md:px-10 lg:px-20">
      <h1 className="
        bg-clip-text text-transparent
        bg-linear-to-r from-purple-800 via-purple-300 to-white
        text-4xl sm:text-5xl md:text-6xl 
        text-center font-extrabold font-serif overflow-hidden
      ">
        My Quality Work
      </h1>

      <div
        ref={containerRef}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
      >
        {[
          {
            title: "NeuroVisionX",
            description: "AI-powered computer vision to provide real-time face and hand detection.",
            skills: ["React", "Tailwind", "wasm", "mediapipe"],
            link: "/neurovisionx",
          },
          {
            title: "ChatWat",
            description: "Real time chat solution with instant messaging and clean UI.",
            skills: ["SocketIO", "NodeMailer", "MERN"],
            link: "/chatwat",
          },
          {
            title: "AutoLogAI",
            description: "AI-powered vehicle service and fuel tracking app with OCR and smart reminders.",
            skills: ["Angular", "Flask", "Python", "Gemini"],
            link: "/autologai",
          },
          {
            title: "E-Commerce Website",
            description: "A full e-commerce store built using MERN + Tailwind.",
            skills: ["React", "Tailwind", "NodeJs", "ExpressJs", "Nodemailer"],
            link: "/ks-traders",
          },
          {
            title: "Landing Page",
            description: "Built with React + Tailwind. Clean, elegant, and reusable.",
            skills: ["JavaScript", "React", "Tailwind"],
            link: "/mrs-enterprise",
          },
          {
            title: "Calculator App",
            description: "All-in-one calculation companion for finance, math, health, etc.",
            skills: ["JavaScript", "React", "Tailwind", "API"],
            link: "/calcmate",
          },
        ].map((item, i) => (
          <span className="card" key={i}>
            <Card {...item} />
          </span>
        ))}
      </div>
    </section>
  );
};
