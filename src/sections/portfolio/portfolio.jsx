import { Card } from "../../components/cards/cards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export const Portfolio = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(".card-wrapper");
    if (!cards.length) return;

    // Reset styles
    gsap.set(cards, { opacity: 0, y: 50, scale: 0.95 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="portfolio" className="relative w-full py-24 px-4 md:px-10 lg:px-20 overflow-hidden text-white">
      
      {/* Background ambient glows */}
      <div className="absolute left-[-10%] top-[10%] w-160 h-160 bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute right-[-10%] bottom-[10%] w-160 h-160 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="text-center mb-16 md:mb-24 relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-300 to-white inline-block pb-2">
          My Quality Work
        </h1>
        <div className="h-1 w-24 bg-linear-to-r from-purple-600 to-purple-300 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
        <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          A showcase of my recent full-stack projects, demonstrating my expertise in building scalable, interactive, and modern web applications.
        </p>
      </div>

      <div
        ref={containerRef}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 place-items-stretch relative z-10"
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
          <div className="card-wrapper flex" key={i}>
            <Card {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};
