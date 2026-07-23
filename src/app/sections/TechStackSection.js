"use client";

import React, { useLayoutEffect, useRef } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import {
  SiNextdotjs,
  SiAngular,
  SiFlask,
  SiNodedotjs,
  SiReact,
  SiDjango,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { gsap, ScrollTrigger } from "../lib/gsap";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

const SKILLS_DATA = [
  {
    name: "Next.js",
    category: "Frontend Framework",
    proficiency: 92,
    description: "SSR/SSG applications, SEO optimization, App Router, and serverless API routes.",
    icon: SiNextdotjs,
    iconColor: "#FFFFFF",
  },
  {
    name: "TypeScript",
    category: "Programming Language",
    proficiency: 85,
    description: "Type-safe application architecture, complex interfaces, and scalable codebases.",
    icon: SiTypescript,
    iconColor: "#3178C6",
  },
  {
    name: "Node.js",
    category: "Backend Environment",
    proficiency: 95,
    description: "Scalable microservices, RESTful APIs, real-time WebSocket communication.",
    icon: SiNodedotjs,
    iconColor: "#5FA04E",
  },
  {
    name: "JavaScript",
    category: "Core Language",
    proficiency: 95,
    description: "ES6+ standards, asynchronous execution, DOM manipulation, and Web APIs.",
    icon: SiJavascript,
    iconColor: "#F7DF1E",
  },
  {
    name: "Flask",
    category: "Backend Framework",
    proficiency: 80,
    description: "Lightweight Python microservices, REST APIs, and AI/ML model deployment wrappers.",
    icon: SiFlask,
    iconColor: "#FFFFFF",
  },
  {
    name: "Angular",
    category: "Frontend Framework",
    proficiency: 75,
    description: "Enterprise web apps, RxJS reactive programming, dependency injection patterns.",
    icon: SiAngular,
    iconColor: "#DD0031",
  },
  {
    name: "Django",
    category: "Backend Framework",
    proficiency: 60,
    description: "Full-stack Python web apps, ORM management, secure user authentication systems.",
    icon: SiDjango,
    iconColor: "#092E20",
  },
  {
    name: "React Native",
    category: "Mobile Framework",
    proficiency: 50,
    description: "Cross-platform mobile applications for iOS and Android using a shared codebase.",
    icon: SiReact,
    iconColor: "#61DAFB",
  },
];

const SkillsRadar = () => {
  const data = {
    labels: SKILLS_DATA.map((skill) => skill.name),
    datasets: [
      {
        label: "Skill Competency",
        data: SKILLS_DATA.map((skill) => skill.proficiency),
        backgroundColor: "rgba(245, 245, 247, 0.12)",
        borderColor: "#F5F5F7",
        pointBackgroundColor: "#F5F5F7",
        pointBorderColor: "#000000",
        pointHoverBackgroundColor: "#000000",
        pointHoverBorderColor: "#F5F5F7",
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { color: "rgba(110, 110, 115, 0.4)" },
        grid: { color: "rgba(110, 110, 115, 0.3)" },
        pointLabels: {
          color: "#F5F5F7",
          font: { family: "var(--font-geist-mono), monospace", size: 12, weight: "600" },
        },
        ticks: { display: false, stepSize: 20 },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#000000",
        titleColor: "#F5F5F7",
        bodyColor: "#86868B",
        bodyFont: { family: "var(--font-geist-mono), monospace" },
        titleFont: { family: "var(--font-geist-mono), monospace" },
        borderColor: "rgba(110, 110, 115, 0.5)",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => ` LEVEL: ${context.raw}%`,
        },
      },
    },
  };

  return (
    <div className="w-full h-80 sm:h-100 max-w-xl mx-auto relative flex items-center justify-center p-2">
      <Radar data={data} options={options} />
    </div>
  );
};

export const TechStackSection = () => {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const radarRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [labelRef.current, headingRef.current, subRef.current],
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );

      gsap.fromTo(
        radarRef.current,
        { autoAlpha: 0, scale: 0.9 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: { trigger: radarRef.current, start: "top 80%" },
        }
      );

      const cards = gsap.utils.toArray(".skill-card");
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 82%" },
        }
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="tech-stack-heading"
      className="w-full bg-[#000000] text-[#F5F5F7] py-20 px-4 sm:px-8 border-t border-[#6E6E73]/30"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center border-b border-[#6E6E73]/30 pb-8 max-w-3xl mx-auto">
          <p ref={labelRef} className="font-instrument text-[#86868B] text-xs tracking-widest uppercase mb-3">
            04 — TECHNICAL_CAPABILITIES
          </p>
          <h2
            ref={headingRef}
            id="tech-stack-heading"
            className="text-3xl sm:text-5xl font-ancizar font-extrabold tracking-tight uppercase text-[#F5F5F7]"
          >
            Skills & Software Architecture
          </h2>
          <p ref={subRef} className="mt-4 text-[#86868B] text-sm font-lily sm:text-base leading-relaxed">
            A comprehensive overview of core technologies, frontend and backend frameworks,
            and modern architectural competencies.
          </p>
        </header>

        <div className="mb-16 flex justify-center w-full">
          <div
            ref={radarRef}
            className="w-full max-w-2xl bg-[#0A0A0A] border border-[#6E6E73]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl"
          >
            <SkillsRadar />
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <article
                key={skill.name}
                className="skill-card group relative bg-[#0A0A0A] border border-[#6E6E73]/30 hover:border-[#F5F5F7] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-[#86868B] uppercase tracking-wider">
                      {skill.category}
                    </span>
                    <div
                      className="p-2 rounded-lg bg-[#161618] border border-[#6E6E73]/20 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: skill.iconColor }}
                      aria-hidden="true"
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-[#F5F5F7] font-bold text-xl mb-2 group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-[#86868B] text-xs leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};