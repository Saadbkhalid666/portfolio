import { useRef, useEffect, useState } from "react";
import Image from "next/image";

// Import your project images here
import nexChatLogo from "../assets/nexchat.png";
import projectTwoLogo from "../assets/project2.png";

export const FeaturedProjects = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const projects = [
    {
      id: "nexchat",
      title: "NexChat Platform",
      category: "03 - Production Logs",
      description:
        "NexChat is a high-performance, real-time messaging application built for seamless communication. Featuring a modern glassmorphic UI, secure authentication, and a powerful administrative dashboard.",
      image: nexChatLogo,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: "ai-assistant",
      title: "AI Chatbot Engine",
      category: "04 - AI Solution",
      description:
        "An intelligent conversational AI chatbot interface integrated with custom knowledge bases. Built with Next.js and Python (Flask) backend to handle automated customer inquiries with sub-second response times.",
      image: projectTwoLogo,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: "project-three",
      title: "E-Commerce SaaS API",
      category: "05 - Backend Systems",
      description:
        "Scalable microservices architecture designed for high-concurrency order processing, real-time inventory synchronization, and webhooks management.",
      image: nexChatLogo,
      githubUrl: "https://github.com",
    },
    {
      id: "project-four",
      title: "Analytics Dashboard",
      category: "06 - Data Visualization",
      description:
        "Real-time analytics portal featuring custom data visualization widgets, automated report generation, and role-based access management.",
      image: projectTwoLogo,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: "project-five",
      title: "Mobile Workflow App",
      category: "07 - Cross-Platform",
      description:
        "Cross-platform task management tool featuring offline-first capability, real-time sync via WebSockets, and push notifications.",
      image: nexChatLogo,
      githubUrl: "https://github.com",
    },
    {
      id: "project-six",
      title: "AI Agent Orchestrator",
      category: "08 - AI Automation",
      description:
        "Multi-agent AI platform built to execute complex workflows, automated browser interactions, and document parsing for enterprise workflows.",
      image: projectTwoLogo,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  // Calculate vertical-to-horizontal scroll translation ratio
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = height - windowHeight;

      if (totalScrollableDistance <= 0) return;

      const progress = -top / totalScrollableDistance;
      const clampedProgress = Math.max(0, Math.min(1, progress));
      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  // Manual scroll trigger via buttons
  const scrollToProjectIndex = (index) => {
    if (!containerRef.current) return;
    const { height } = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollableDistance = height - windowHeight;
    const step = totalScrollableDistance / (projects.length - 1);
    
    const containerTop = containerRef.current.offsetTop;
    window.scrollTo({
      top: containerTop + step * index,
      behavior: "smooth",
    });
  };

  const currentIndex = Math.min(
    projects.length - 1,
    Math.floor(scrollProgress * projects.length)
  );

  return (
    // Outer Container gives height to scroll through (600vh = 6 screens of scrolling)
    <div ref={containerRef} className="relative h-[600vh] bg-black text-[#f5f5f7]">
      {/* Sticky Viewport Container */}
      <section 
        id="featured-launches"
        aria-labelledby="featured-heading" 
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-6"
      >
        <div className="container mx-auto max-w-7xl w-full">
          {/* Header & Controls Bar */}
          <div className="flex items-end justify-between mb-8 sm:mb-12">
            <div>
              <p className="text-zinc-500 text-sm font-medium tracking-wide mb-1 font-instrument">
                {projects[currentIndex].category}
              </p>
              <h2 
                id="featured-heading"
                className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-white italic"
              >
                Featured Launches
              </h2>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToProjectIndex(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                aria-label="Previous Project"
                className="p-3 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ←
              </button>
              <span className="text-xs text-zinc-500 font-mono">
                0{currentIndex + 1} / 0{projects.length}
              </span>
              <button
                onClick={() => scrollToProjectIndex(Math.min(projects.length - 1, currentIndex + 1))}
                disabled={currentIndex === projects.length - 1}
                aria-label="Next Project"
                className="p-3 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          </div>

          {/* Horizontal Track Area */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${scrollProgress * ((projects.length - 1) / projects.length) * 100}%)`,
                width: `${projects.length * 100}%`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full shrink-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-95"
                  style={{ width: `${100 / projects.length}%` }}
                >
                  {/* Image Box - HIDDEN ON MOBILE (`hidden md:flex`) */}
                  <div className="hidden md:flex lg:col-span-5 justify-center">
                    <div className="w-full aspect-square max-w-md rounded-2xl bg-[#0a0a0a] border border-zinc-900 p-8 flex items-center justify-center transition-all duration-300 hover:border-zinc-700">
                      <div className="relative flex items-center justify-center">
                        <Image
                          src={project.image}
                          alt={`${project.title} Preview`}
                          className="object-contain"
                          priority
                          quality={90}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Details Column */}
                  <article className="col-span-1 lg:col-span-7 flex flex-col justify-center text-left">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6 font-ancizar">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl font-normal mb-8">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-zinc-200"
                        >
                          View Live ↗
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl border border-zinc-700 bg-zinc-900 text-white font-semibold text-sm transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800"
                      >
                        Source Code
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};