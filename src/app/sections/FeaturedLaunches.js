"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
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
      liveUrl: "https://kstraders.vercel.app",
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
      liveUrl: "https://mrsenterprise.vercel.app",
      githubUrl: "https://github.com/Saadbkhalid666/m.r.s-enterprise",
      bgGlow: "from-rose-900/20 via-slate-950/10 to-transparent",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Featured Projects & Production Logs",
    "description": "Selected software development projects showcasing real-time apps, AI solutions, computer vision, and e-commerce platforms.",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": project.title,
        "description": project.description,
        "applicationCategory": project.category,
        "url": project.liveUrl || project.githubUrl,
        "sameAs": [project.githubUrl, project.liveUrl].filter(Boolean),
        "image": project.image?.src || "",
      },
    })),
  };

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const cards = gsap.utils.toArray(".project-item");
        let totalWidth = 0;
        cards.forEach((card) => {
          totalWidth += card.getBoundingClientRect().width;
        });
        return totalWidth - window.innerWidth;
      };

      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
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
                Math.floor(self.progress * projects.length) + 1,
                projects.length
              );
              counterRef.current.innerText = String(currentIdx).padStart(2, "0");
            }
          },
        },
      });

      mainTimeline.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
      });

      const cards = gsap.utils.toArray(".project-item");
      cards.forEach((card) => {
        const imageBox = card.querySelector(".project-image-box");
        const category = card.querySelector(".project-category");
        const title = card.querySelector(".project-title");
        const desc = card.querySelector(".project-desc");
        const buttons = card.querySelectorAll(".project-btn");

        gsap.fromTo(
          imageBox,
          { scale: 0.9, opacity: 0.4 },
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: mainTimeline,
              start: "left 90%",
              end: "left 20%",
              scrub: true,
            },
          }
        );

        const contentTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            containerAnimation: mainTimeline,
            start: "left 75%",
            toggleActions: "play reverse play reverse",
          },
        });

        contentTl
          .fromTo(
            category,
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
          )
          .fromTo(
            title,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
            "-=0.2"
          )
          .fromTo(
            desc,
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
            "-=0.3"
          )
          .fromTo(
            buttons,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, stagger: 0.08, ease: "power3.out" },
            "-=0.2"
          );
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, [projects.length]);

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-label="Featured Projects Portfolio"
      className="relative w-full bg-[#050505]  text-[#f5f5f7] mt-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="relative h-screen w-full flex flex-col justify-between pt-4 pb-12 sm:pb-8">

        <div className="relative w-full flex-1 min-h-0 overflow-hidden">
        
        <header className="mt-20 z-20 px-4 text-center shrink-0">
          <p className="font-instrument text-zinc-400 uppercase tracking-[0.25em] text-xs">
            03 - Production Logs
          </p>
          <h2 className="mt-1 font-ancizar text-2xl sm:text-4xl font-bold tracking-tight">
            Selected Projects
          </h2>
        </header>
          <div
            ref={trackRef}
            className="flex flex-row flex-nowrap h-full w-max will-change-transform"
          >
            {projects.map((project, index) => (
              <article
                key={project.id}
                id={`project-${project.id}`}
                aria-label={project.title}
                className="project-item relative shrink-0 w-screen h-full flex items-center justify-center px-4 sm:px-12 lg:px-20"
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 bg-linear-to-br ${project.bgGlow} opacity-60 blur-[100px] sm:blur-[130px]`}
                />

                <div className="relative z-10 mx-auto grid w-full max-w-[calc(100vw-2rem)] sm:max-w-7xl grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-12 items-center">
                  
                  <div className="lg:col-span-7 flex justify-center w-full">
                    <div className="project-image-box group relative w-full max-w-sm lg:max-w-2xl overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-linear-to-b from-white/10 via-zinc-900/80 to-black p-2 sm:p-6 backdrop-blur-xl shadow-2xl transition-all duration-500">
                      <div className="project-image-inner relative w-full aspect-16/10 overflow-hidden rounded-xl sm:rounded-2xl bg-black/50">
                        <Image
                          src={project.image}
                          alt={`${project.title} - Screenshot preview`}
                          priority={index === 0}
                          quality={90}
                          fill
                          sizes="(max-width: 1024px) 85vw, 50vw"
                          className="object-contain p-2 sm:p-6 transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-center text-left">
                    <span className="font-instrument project-category   text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-400">
                      {project.category}
                    </span>

                    <h3 className="project-title mt-1 sm:mt-3 font-ancizar font-bold text-xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
                      {project.title}
                    </h3>

                    <p className="project-desc mt-1.5 sm:mt-4 max-w-xl font-inter text-xs sm:text-base leading-relaxed text-zinc-400 font-normal line-clamp-2 sm:line-clamp-4">
                      {project.description}
                    </p>

                    <nav aria-label={`${project.title} action links`} className="mt-3 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3">
                      {project.liveUrl && (
                        <MagneticButton
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${project.title}`}
                          className="project-btn rounded-full bg-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-black transition-all hover:bg-zinc-200"
                        >
                          Live Demo <span className="ml-1" aria-hidden="true">↗</span>
                        </MagneticButton>
                      )}

                      <MagneticButton
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View GitHub repository for ${project.title}`}
                        className="project-btn rounded-full border border-zinc-700/80 bg-zinc-900/60 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-colors hover:border-zinc-400 hover:bg-zinc-800"
                      >
                        GitHub
                      </MagneticButton>
                    </nav>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 w-full max-w-7xl px-6 sm:px-20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 font-mono text-xs tracking-widest text-zinc-400" aria-live="polite">
            <span ref={counterRef} className="text-white font-bold text-sm sm:text-base">
              01
            </span>
            <span aria-hidden="true">/</span>
            <span>{String(projects.length).padStart(2, "0")}</span>
          </div>

          <div className="relative h-0.5 w-28 sm:w-64 bg-zinc-800 overflow-hidden rounded-full" aria-hidden="true">
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