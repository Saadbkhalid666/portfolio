"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { MagneticButton } from "../components/MagneticButton";

import projectOneLogo from "../assets/project1.png";
import projectTwoLogo from "../assets/project2.png";
import projectThreeLogo from "../assets/project3.png";
import projectFourLogo from "../assets/project4.png";
import projectFiveLogo from "../assets/project5.png";

export const FeaturedProjects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressBarRef = useRef(null);
  const counterRef = useRef(null);

  const projects = [
    {
      id: "nexchat",
      title: "NexChat Platform",
      category: "01 • Real-Time Communication",
      description:
        "NexChat is a high-performance real-time messaging platform with secure authentication, Socket.IO communication, an admin dashboard, and a modern UI built for speed and scalability.",
      image: projectOneLogo,
      githubUrl: "https://github.com/Saadbkhalid666/nexchat",
      bgGlow: "from-purple-900/20 via-indigo-950/10 to-transparent",
    },
    {
      id: "autolog-ai",
      title: "AutoLog.AI",
      category: "02 • Smart Automotive AI",
      description:
        "An AI-powered vehicle management platform featuring OCR receipt scanning, chatbot assistance, expense tracking, and automated service reminders.",
      image: projectThreeLogo,
      githubUrl: "https://github.com/Saadbkhalid666/autolog.ai",
      bgGlow: "from-blue-900/20 via-cyan-950/10 to-transparent",
    },
    {
      id: "neurovisionx",
      title: "NeuroVisionX",
      category: "03 • Computer Vision",
      description:
        "Browser-based computer vision application performing real-time face and hand detection using modern AI models with React and Tailwind CSS.",
      image: projectFourLogo,
      githubUrl: "https://github.com/Saadbkhalid666/neurovisionx",
      bgGlow: "from-emerald-900/20 via-teal-950/10 to-transparent",
    },
    {
      id: "ks-traders",
      title: "KS Traders",
      category: "04 • B2B Commerce",
      description:
        "Wholesale e-commerce platform built with Next.js, Redux Toolkit, secure checkout, and a responsive admin-friendly architecture.",
      image: projectTwoLogo,
      liveUrl:"https://kstraders.vercel.app",
      githubUrl: "https://github.com",
      bgGlow: "from-amber-900/20 via-zinc-950/10 to-transparent",
    },
    {
      id: "mrs-enterprise",
      title: "M.R.S Enterprise",
      category: "05 • Business Management",
      description:
        "Enterprise management software for handling workflows, inventory, client operations, and reporting with a scalable backend.",
      image: projectFiveLogo,
      liveUrl:"https://mrsenterprise.vercel.app",
      githubUrl: "https://github.com/Saadbkhalid666/m.r.s-enterprise",
      bgGlow: "from-rose-900/20 via-slate-950/10 to-transparent",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const totalProjects = projects.length;
        const totalScrollWidth = track.scrollWidth - window.innerWidth;

        const mainTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalScrollWidth}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressBarRef.current) {
                gsap.set(progressBarRef.current, {
                  scaleX: self.progress,
                  transformOrigin: "left center",
                });
              }

              if (counterRef.current) {
                const currentIdx = Math.min(
                  Math.floor(self.progress * totalProjects) + 1,
                  totalProjects
                );
                counterRef.current.innerText = String(currentIdx).padStart(2, "0");
              }
            },
          },
        });

        mainTimeline.to(track, {
          x: -totalScrollWidth,
          ease: "none",
        });

        const cards = gsap.utils.toArray(".project-item");

        cards.forEach((card, i) => {
          const imageBox = card.querySelector(".project-image-box");
          const imageInner = card.querySelector(".project-image-inner");
          const category = card.querySelector(".project-category");
          const title = card.querySelector(".project-title");
          const desc = card.querySelector(".project-desc");
          const buttons = card.querySelectorAll(".project-btn");

          gsap.fromTo(
            imageBox,
            { scale: 0.92, opacity: 0.3 },
            {
              scale: 1,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                containerAnimation: mainTimeline,
                start: "left 85%",
                end: "left 35%",
                scrub: true,
              },
            }
          );

          gsap.fromTo(
            imageInner,
            { x: -60, scale: 1.05 },
            {
              x: 60,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: mainTimeline,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );

          const contentTl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              containerAnimation: mainTimeline,
              start: "left 70%",
              toggleActions: "play reverse play reverse",
            },
          });

          contentTl
            .fromTo(
              category,
              { y: 25, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
            )
            .fromTo(
              title,
              { y: 35, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
              "-=0.4"
            )
            .fromTo(
              desc,
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
              "-=0.5"
            )
            .fromTo(
              buttons,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
              "-=0.4"
            );
        });
      });

      mm.add("(max-width: 1023px)", () => {
        const cards = gsap.utils.toArray(".project-item");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
              },
            }
          );
        });
      });
    }, section);

    return () => ctx.revert();
  }, [projects.length]);

  return (
    <section ref={sectionRef} className="relative bg-[#050505] text-[#f5f5f7] overflow-hidden mt-20">
      <div className="relative lg:h-screen lg:w-full lg:overflow-hidden flex flex-col justify-between">
            <p className="text-center font-instrument text-zinc-400 uppercase tracking-[0.3em] text-sm">
               03 - Production Logs
            </p>

            <h2 className="mt-3 text-center text-5xl font-bold">Selected Projects</h2>
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row h-full w-full lg:will-change-transform"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-item relative shrink-0 w-full lg:w-screen h-auto lg:h-screen flex items-center justify-center px-6 sm:px-12 lg:px-20 py-16 lg:py-0 border-b border-zinc-900/50 lg:border-b-0"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-linear-to-br ${project.bgGlow} opacity-60 blur-[130px]`}
              />

              <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 lg:gap-16 lg:grid-cols-12 items-center">
                
                <div className="lg:col-span-7 flex justify-center w-full">
                  <div className="project-image-box group relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/10 via-zinc-900/80 to-black p-4 sm:p-8 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-white/20">
                    
                    <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-radial from-white/15 to-transparent blur-md" />

                    <div className="project-image-inner relative w-full aspect-16/10 overflow-hidden rounded-2xl bg-black/50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        priority={index === 0}
                        quality={95}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-contain p-4 sm:p-6 transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="project-category font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-zinc-400">
                    {project.category}
                  </span>

                  <h2 className="project-title mt-4 font-ancizar text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                    {project.title}
                  </h2>

                  <p className="project-desc mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-400 font-normal">
                    {project.description}
                  </p>

                  <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                    {project.liveUrl && (
                      <MagneticButton
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,255,255,0.4)]"
                      >
                        Live Demo <span className="ml-2">↗</span>
                      </MagneticButton>
                    )}

                    <MagneticButton
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn rounded-full border border-zinc-700/80 bg-zinc-900/60 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:border-zinc-400 hover:bg-zinc-800"
                    >
                      GitHub
                    </MagneticButton>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-7xl px-20 items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-sm tracking-widest text-zinc-400">
            <span ref={counterRef} className="text-white font-bold text-lg">
              01
            </span>
            <span>/</span>
            <span>{String(projects.length).padStart(2, "0")}</span>
          </div>

          <div className="relative h-0.5 w-64 bg-zinc-800 overflow-hidden rounded-full">
            <div
              ref={progressBarRef}
              className="absolute inset-0 bg-linear-to-r from-zinc-400 to-white will-change-transform scale-x-0"
            />
          </div>
        </div>

      </div>
    </section>
  );
};