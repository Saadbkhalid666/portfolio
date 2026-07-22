"use client";

import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

// --- SKILLS DATA ---
const SKILLS_DATA = [
  { name: "Next.js", proficiency: 92, category: "Frontend" },
  { name: "Angular", proficiency: 75, category: "Frontend" },
  { name: "Flask", proficiency: 80, category: "Backend" },
  { name: "Node.js", proficiency: 95, category: "Backend" },
  { name: "React Native", proficiency: 50, category: "Frontend" },
  { name: "Django", proficiency: 60, category: "Backend" },
  { name: "JavaScript", proficiency: 95, category: "Language" },
  { name: "TypeScript", proficiency: 85, category: "Language" },
];

// --- RADAR CHART COMPONENT ---
const SkillsRadar = () => {
  const data = {
    labels: SKILLS_DATA.map((skill) => skill.name),
    datasets: [
      {
        label: "Proficiency Index",
        data: SKILLS_DATA.map((skill) => skill.proficiency),
        backgroundColor: "rgba(245, 245, 247, 0.15)",
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
        angleLines: { color: "#6E6E73" },
        grid: { color: "#6E6E73" },
        pointLabels: {
          color: "#F5F5F7",
          font: { family: "'JetBrains Mono', monospace", size: 12, weight: "600" },
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
        bodyColor: "#6E6E73",
        bodyFont: { family: "'JetBrains Mono', monospace" },
        titleFont: { family: "'JetBrains Mono', monospace" },
        borderColor: "#6E6E73",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => ` PROFICIENCY: ${context.raw}%`,
        },
      },
    },
  };

  return (
    <div className="w-full h-95 sm:h-112.5 relative flex items-center justify-center p-2">
      <Radar data={data} options={options} />
    </div>
  );
};

// --- MAIN TECH STACK SECTION ---
export const TechStackSection = () => {
  return (
    <section className="w-full   text-[#F5F5F7] py-16 px-6 border-t border-[#6E6E73]">
      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <header className="mb-12 border-b border-[#6E6E73] pb-6">
          <div className="font-instrument text-[#6E6E73] text-xs tracking-widest uppercase mb-2">
             04 - TECHNICAL_CAPABILITIES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-[#F5F5F7]">
            SKILLS & ARCHITECTURE
          </h2>
        </header>

        {/* RADAR GRAPH & SKILLS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: RADAR CHART */}
          <div className="  p-6 bg-[#000000]">
            <SkillsRadar />
          </div>

          {/* RIGHT: SKILLS LIST */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILLS_DATA.map((skill) => (
              <div
                key={skill.name}
                className="p-5  shadow-sm hover:scale-105  transition-all ease-in-out shadow-[#f5f5f7] flex flex-col justify-between hover:border-[#F5F5F7]   duration-300"
              >
                <div>
                  <div className="font-mono text-[10px] text-[#f5f5f7] uppercase tracking-wider mb-1">
                    {skill.category}
                  </div>
                  <div className="text-[#F5F5F7] font-bold text-lg mb-3">
                    {skill.name}
                  </div>
                </div>

                {/* PROFICIENCY BAR */}
                <div>
                  <div className="flex justify-between items-center font-mono text-[10px] text-[#6E6E73] mb-1">
                    <span>INDEX</span>
                    <span className="text-[#F5F5F7] font-semibold">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-1 bg-[#6E6E73]/40 overflow-hidden">
                    <div
                      className="h-full bg-[#F5F5F7]"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;