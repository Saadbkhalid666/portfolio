"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import projectOneLogo from "../assets/project1.png";
import projectTwoLogo from "../assets/project2.png";
import projectThreeLogo from "../assets/project3.png";
import projectFourLogo from "../assets/project4.png";
import projectFiveLogo from "../assets/project5.png";

gsap.registerPlugin(ScrollTrigger);
export const FeaturedProjects = () => {
const sectionRef = useRef(null);
const trackRef = useRef(null);
  const projects = [
    {
      id: "nexchat",
      title: "NexChat Platform",
      category: "01 • Real-Time Communication",
      description:
        "NexChat is a high-performance real-time messaging platform with secure authentication, Socket.IO communication, an admin dashboard, and a modern UI built for speed and scalability.",
      image: projectOneLogo,
      liveUrl: "https://nexchat-live.vercel.app",
      githubUrl: "https://github.com/Saadbkhalid666/nexchat",
    },
    {
      id: "autolog-ai",
      title: "AutoLog.AI",
      category: "02 • Smart Automotive AI",
      description:
        "An AI-powered vehicle management platform featuring OCR receipt scanning, chatbot assistance, expense tracking, and automated service reminders.",
      image: projectThreeLogo,
      githubUrl: "https://github.com/Saadbkhalid666/autolog.ai",
    },
    {
      id: "neurovisionx",
      title: "NeuroVisionX",
      category: "03 • Computer Vision",
      description:
        "Browser-based computer vision application performing real-time face and hand detection using modern AI models with React and Tailwind CSS.",
      image: projectFourLogo,
      githubUrl: "https://github.com/Saadbkhalid666/neurovisionx",
    },
    {
      id: "ks-traders",
      title: "KS Traders",
      category: "04 • B2B Commerce",
      description:
        "Wholesale e-commerce platform built with Next.js, Redux Toolkit, secure checkout, and a responsive admin-friendly architecture.",
      image: projectTwoLogo,
      githubUrl: "https://github.com",
    },
    {
      id: "mrs-enterprise",
      title: "M.R.S Enterprise",
      category: "05 • Business Management",
      description:
        "Enterprise management software for handling workflows, inventory, client operations, and reporting with a scalable backend.",
      image: projectSixLogo,
      githubUrl: "https://github.com/Saadbkhalid666/m.r.s-enterprise",
    },
  ];

useEffect(() => {
  const section = sectionRef.current;
  const track = trackRef.current;

  if (!section || !track) return;

  const ctx = gsap.context(() => {

    const totalScroll = track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: -totalScroll,
      ease: "none",

      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScroll}`,
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    gsap.from(".project-card", {
      opacity: 0,
      y: 80,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top center",
      },
    });

  }, section);

  return () => ctx.revert();

}, []);



 return (
<section
    ref={sectionRef}
    className="relative h-[500vh] bg-[#050505]"
>

<div className="sticky top-0 h-screen overflow-hidden">

<div
    ref={trackRef}
    className="flex h-full"
>
    {projects.map((project, index) => (
  <section
    key={project.id}
    className="flex h-screen w-screen shrink-0 items-center justify-center px-8 lg:px-20"
  >
    <div className="project-card mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">

      {/* LEFT - Image */}
      <div className="flex justify-center">
        <div className="group relative">

          {/* Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-purple-500/20 blur-3xl transition-all duration-700 group-hover:scale-110" />

          {/* Card */}
          <div className="relative overflow-hidden rounded-4xl border border-zinc-800 bg-linear-to-br from-zinc-900 to-black p-10 shadow-[0_30px_100px_rgba(0,0,0,.5)]">

            <Image
              src={project.image}
              alt={project.title}
              priority={index === 0}
              quality={100}
              className="h-auto w-full max-w-xl object-contain transition-all duration-700 group-hover:scale-110 group-hover:-rotate-2"
            />

          </div>

        </div>
      </div>

      {/* RIGHT */}
      <div>

        <span className="font-mono text-sm uppercase tracking-[0.35em] text-purple-400">
          {project.category}
        </span>

        <h2 className="mt-6 font-ancizar text-5xl font-bold leading-tight text-white lg:text-7xl">
          {project.title}
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-5">

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Live Demo →
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-700 px-8 py-4 text-white transition-all duration-300 hover:border-purple-500 hover:bg-zinc-900"
          >
            GitHub
          </a>

        </div>

        {/* Counter */}

        <div className="mt-20 flex items-center gap-6">

          <span className="text-6xl font-bold text-zinc-700">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="h-px flex-1 bg-zinc-800"></div>

          <span className="text-zinc-500">
            {String(projects.length).padStart(2, "0")}
          </span>

        </div>

      </div>

    </div>
  </section>
))}
      </div>
    </div>

    {/* Progress Indicator */}
    <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-3">

      {projects.map((_, i) => (
        <div
          key={i}
          className="h-1 w-12 overflow-hidden rounded-full bg-zinc-800"
        >
          <div
            className={`h-full transition-all duration-500 ${
              i <= index
                ? "w-full bg-purple-500"
                : "w-0"
            }`}
          />
        </div>
      ))}

    </div>

    {/* Background Decoration */}
    <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

    <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

  </section>
))}

</div>

</div>

</section>
);
};
