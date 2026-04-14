import { useLayoutEffect, useRef } from "react";
import { SkillCard } from "../../components/SkillCard/SkillCard";

import { 
  FaHtml5, FaCss3, FaJs, FaPython 
} from "react-icons/fa";

import { 
  SiTypescript, SiC, SiMongodb, SiSqlite, SiNodedotjs,
  SiExpress, SiFlask, SiDjango, SiReact, SiAngular,
  SiTailwindcss
} from "react-icons/si";

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

    // Reset styles manually in case of re-mount
    gsap.set(cards, { opacity: 0, y: 50, scale: 0.9 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.05,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
    
    // cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="resume" className="relative w-full py-24 px-4 md:px-10 lg:px-20 text-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute left-[-10%] top-[10%] w-[40rem] h-[40rem] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute right-[-10%] bottom-[10%] w-[30rem] h-[30rem] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="text-center mb-16 md:mb-20 relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-300 to-white inline-block pb-2">
          My Tech Stack
        </h1>
        <div className="h-1 w-24 bg-linear-to-r from-purple-600 to-purple-300 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
        <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          The skills, tools, and technologies I utilize to bring digital experiences to life:
        </p>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto flex flex-col gap-16 lg:gap-20 relative z-10">
        
        {/* Category: Frontend */}
        <div>
          <div className="flex flex-col items-center md:items-start mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-purple-300 to-white">Frontend Development</h2>
            <div className="h-0.5 w-16 bg-purple-500/50 mt-3 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            <SkillCard className="skill-card" title="HTML" color="text-[#ff6b35]" icon={<FaHtml5 />} />
            <SkillCard className="skill-card" title="CSS" color="text-[#2563eb]" icon={<FaCss3 />} />
            <SkillCard className="skill-card" title="JavaScript" color="text-[#facc15]" icon={<FaJs />} />
            <SkillCard className="skill-card" title="TypeScript" color="text-[#3b82f6]" icon={<SiTypescript />} />
            <SkillCard className="skill-card" title="React" color="text-[#67e8f9]" icon={<SiReact />} />
            <SkillCard className="skill-card" title="ReactNative" color="text-[#38bdf8]" icon={<SiReact />} />
            <SkillCard className="skill-card" title="Angular" color="text-[#ef4444]" icon={<SiAngular />} />
            <SkillCard className="skill-card" title="TailwindCSS" color="text-[#38bdf8]" icon={<SiTailwindcss />} />
          </div>
        </div>

        {/* Category: Backend & Databases */}
        <div>
          <div className="flex flex-col items-center md:items-start mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-purple-300 to-white">Backend & Databases</h2>
            <div className="h-0.5 w-16 bg-purple-500/50 mt-3 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            <SkillCard className="skill-card" title="Node.js" color="text-[#22c55e]" icon={<SiNodedotjs />} />
            <SkillCard className="skill-card" title="Express.js" color="text-gray-300" icon={<SiExpress />} />
            <SkillCard className="skill-card" title="Python" color="text-[#3b82f6]" icon={<FaPython />} />
            <SkillCard className="skill-card" title="Django" color="text-[#16a34a]" icon={<SiDjango />} />
            <SkillCard className="skill-card" title="Flask" color="text-gray-300" icon={<SiFlask />} />
            <SkillCard className="skill-card" title="C Language" color="text-[#06b6d4]" icon={<SiC />} />
            <SkillCard className="skill-card" title="MongoDB" color="text-[#22c55e]" icon={<SiMongodb />} />
            <SkillCard className="skill-card" title="SQLite" color="text-[#60a5fa]" icon={<SiSqlite />} />
          </div>
        </div>

      </div>
    </section>
  );
};
