"use client";

import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const SkillsRadar = () => {
  // Data matching your original system capability metrics
  const data = {
    labels: [
      "Frontend",
      "Backend",
      "AI/ML",
      "Native",
      "Infrastructure",
      "UI/UX",
    ],
    datasets: [
      {
        label: "System Capability",
        data: [95, 90, 85, 88, 80, 85],
        backgroundColor: "rgba(90, 69, 255, 0.2)", // Ultraviolet with opacity
        borderColor: "#5A45FF", // Solid Ultraviolet
        pointBackgroundColor: "#5A45FF",
        pointBorderColor: "#F5F5F7",
        pointHoverBackgroundColor: "#F5F5F7",
        pointHoverBorderColor: "#5A45FF",
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  // Configuration options matching the blueprint theme
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { 
          color: "#1C1C1C" // Blueprint grid lines
        },
        grid: { 
          color: "#1C1C1C" // Blueprint circular rings
        },
        pointLabels: {
          color: "#8E8E93", // Gray text
          font: { 
            family: "'JetBrains Mono', monospace", 
            size: 11,
            weight: "500"
          },
        },
        ticks: { 
          display: false, // Hide the numbers (0, 20, 40, etc.) on the axis
          stepSize: 20 
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: { 
        display: false // Hide the legend box to keep it clean
      },
      tooltip: {
        backgroundColor: "#0D0D0D",
        titleColor: "#5A45FF",
        bodyColor: "#F5F5F7",
        bodyFont: {
          family: "'JetBrains Mono', monospace",
        },
        titleFont: {
          family: "'JetBrains Mono', monospace",
        },
        borderColor: "#1C1C1C",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return ` DEPTH_INDEX: ${context.raw}%`;
          }
        }
      }
    },
  };

  return (
    <div className="w-full max-w-150 mx-auto h-87.5 max-h-100 relative flex items-center justify-center p-4">
      {/* Optional: Add a subtle background glow behind the chart */}
      <div className="absolute inset-0 bg-[#5A45FF] opacity-5 blur-[100px] rounded-full pointer-events-none" />
      
      <Radar data={data} options={options} />
    </div>
  );
};
