import { useLayoutEffect, useRef } from "react";
import { SkillCard } from "../../components/SkillCard/SkillCard";

import { 
  FaHtml5, FaCss3, FaJs, FaPython 
} from "react-icons/fa";

import { 
  SiTypescript, SiC, SiDart, SiMongodb, SiSqlite, SiNodedotjs,
  SiExpress, SiFlask, SiDjango, SiReact, SiAngular, SiFlutter,
  SiTailwindcss, SiGit, SiGithub, SiPostman
} from "react-icons/si";

import { VscVscodeInsiders } from "react-icons/vsc";
import { PiOpenAiLogo } from "react-icons/pi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(".skill-card");
    if (!cards.length) return;

    gsap.from(cards, {
      opacity: 0,
      y: 50,
      scale: 0.9,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section id="resume" className="py-16 text-white">
      <h1 className="bg-clip-text text-transparent
        bg-linear-to-r to-purple-800 via-purple-300 from-white
        text-4xl sm:text-5xl md:text-6xl 
        text-center font-extrabold font-serif overflow-hidden mb-12">My Tech Stack</h1>

      <div ref={containerRef} className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* ===== LANGUAGES ===== */}
        <SkillCard className="skill-card" title="HTML" color="text-[#ff6b35]" icon={<FaHtml5 />} />
        <SkillCard className="skill-card" title="CSS" color="text-[#2563eb]" icon={<FaCss3 />} />
        <SkillCard className="skill-card" title="JavaScript" color="text-[#facc15]" icon={<FaJs />} />
        <SkillCard className="skill-card" title="TypeScript" color="text-[#3b82f6]" icon={<SiTypescript />} />
        <SkillCard className="skill-card" title="Python" color="text-[#eab308]" icon={<FaPython />} />
        <SkillCard className="skill-card" title="C Language" color="text-[#06b6d4]" icon={<SiC />} />
        <SkillCard className="skill-card" title="Dart" color="text-[#38bdf8]" icon={<SiDart />} />

        {/* ===== DATABASES ===== */}
        <SkillCard className="skill-card" title="MongoDB" color="text-[#22c55e]" icon={<SiMongodb />} />
        <SkillCard className="skill-card" title="SQLite" color="text-[#60a5fa]" icon={<SiSqlite />} />

        {/* ===== BACKEND ===== */}
        <SkillCard className="skill-card" title="Node.js" color="text-[#22c55e]" icon={<SiNodedotjs />} />
        <SkillCard className="skill-card" title="Express.js" color="text-white" icon={<SiExpress />} />
        <SkillCard className="skill-card" title="Flask" color="text-white" icon={<SiFlask />} />
        <SkillCard className="skill-card" title="Django" color="text-[#16a34a]" icon={<SiDjango />} />

        {/* ===== FRONTEND ===== */}
        <SkillCard className="skill-card" title="React" color="text-[#67e8f9]" icon={<SiReact />} />
        <SkillCard className="skill-card" title="Angular" color="text-[#ef4444]" icon={<SiAngular />} />
        <SkillCard className="skill-card" title="Flutter" color="text-[#60a5fa]" icon={<SiFlutter />} />
        <SkillCard className="skill-card" title="TailwindCSS" color="text-[#38bdf8]" icon={<SiTailwindcss />} />

        {/* ===== VERSION CONTROL ===== */}
        <SkillCard className="skill-card" title="Git" color="text-[#ef4444]" icon={<SiGit />} />
        <SkillCard className="skill-card" title="GitHub" color="text-white" icon={<SiGithub />} />

        {/* ===== TOOLS ===== */}
        <SkillCard className="skill-card" title="VS Code" color="text-[#3b82f6]" icon={<VscVscodeInsiders />} />
        <SkillCard className="skill-card" title="Postman" color="text-[#f97316]" icon={<SiPostman />} />
        <SkillCard className="skill-card" title="ChatGPT" color="text-[#fff]" icon={<PiOpenAiLogo />} />
      </div>
    </section>
  );
};
