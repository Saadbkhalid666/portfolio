"use client";

import { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Keyboard,
  Mousewheel,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import projectOneLogo from "../assets/project1.png";
import projectTwoLogo from "../assets/project2.png";
import projectThreeLogo from "../assets/project3.png";
import projectFourLogo from "../assets/project4.png";
import projectFiveLogo from "../assets/project5.png";
import projectSixLogo from "../assets/project6.png";

export const FeaturedProjects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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

  return (
    <section className="bg-[#050505] py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 flex items-center justify-between">
          <div>
            <p className="font-instrument text-zinc-400 uppercase tracking-[0.3em] text-sm">
               03 - Production Logs
            </p>

            <h2 className="mt-3 text-5xl font-bold">Selected Projects</h2>
          </div>

          <div className="hidden gap-3 md:flex">
            <button
              ref={prevRef}
              className="grid h-12 w-12 place-items-center rounded-full border border-zinc-800 transition hover:border-white"
            >
              ←
            </button>

            <button
              ref={nextRef}
              className="grid h-12 w-12 place-items-center rounded-full border border-zinc-800 transition hover:border-white"
            >
              →
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
          slidesPerView={1}
          speed={700}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          mousewheel={{
            forceToAxis: true,
          }}
          pagination={{
            clickable: true,
          }}
          onBeforeInit={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          className="featuredSwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <div className="grid min-h-150 grid-cols-1 items-center gap-12 lg:grid-cols-2 mb-6 ">
                {/* Image */}
                <div className="flex justify-center ">
      <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-linear-to-br from-zinc-900 to-black p-8 shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      priority={index === 0}
                      quality={100}
                     className="h-auto w-full max-w-lg object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-zinc-400">
                    {project.category}
                  </p>

                  <h3 className="font-ancizar text-4xl font-semibold leading-tight text-white lg:text-6xl">
                    {project.title}
                  </h3>

                  <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="mt-10 flex flex-wrap gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-white px-7 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200"
                      >
                        Live Demo ↗
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-zinc-700 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-zinc-900"
                    >
                      Source Code
                    </a>
                  </div>

                  {/* Slide Counter */}
                  <div className="mt-12 flex items-center gap-4">
                    <span className="text-4xl font-bold text-zinc-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="h-px flex-1 bg-zinc-800"></div>

                    <span className="text-zinc-500">
                      {String(projects.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
