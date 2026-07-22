import React, { useState, useMemo } from "react";

// Technical stack data ledger
const TECH_CATEGORIES = [
  { id: "all", label: "00_ALL_DEPENDENCIES" },
  { id: "languages", label: "01_LANGUAGES" },
  { id: "frontend", label: "02_FRONTEND" },
  { id: "backend", label: "03_BACKEND_DB" },
  { id: "ai", label: "04_AI_ENGINEERING" },
  { id: "infra", label: "05_INFRA_DEVOPS" },
];

const TECH_ITEMS = [
  {
    id: "typescript",
    name: "TypeScript",
    category: "languages",
    version: "v5.4+",
    status: "CORE_RUNTIME",
    proficiency: 95,
    description: "Strict type safety across full-stack applications, ensuring zero-runtime type errors and scalable system architecture.",
    tags: ["Type Safety", "Full-Stack", "DX"],
  },
  {
    id: "python",
    name: "Python",
    category: "languages",
    version: "v3.12+",
    status: "AI_PIPELINES",
    proficiency: 90,
    description: "Primary language for computer vision pipelines, LLM agent orchestration, and automated server-side routines.",
    tags: ["AI/ML", "FastAPI", "Automation"],
  },
  {
    id: "cpp",
    name: "C++",
    category: "languages",
    version: "C++20",
    status: "HIGH_PERF",
    proficiency: 80,
    description: "Low-level performance optimization, memory management, and high-throughput algorithm executions.",
    tags: ["Systems", "Memory-Safe", "Algorithms"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    version: "v14/v15",
    status: "PRODUCTION",
    proficiency: 95,
    description: "App Router architecture, React Server Components (RSC), SSR/SSG rendering, and edge network optimizations.",
    tags: ["React", "SSR", "Edge Functions"],
  },
  {
    id: "react-native",
    name: "React Native / Expo",
    category: "frontend",
    version: "v0.74+",
    status: "CROSS_PLATFORM",
    proficiency: 88,
    description: "Native iOS/Android application engineering utilizing JSI, custom native modules, and smooth 60fps gesture interfaces.",
    tags: ["Mobile", "iOS", "Android"],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    version: "v3/v4",
    status: "DESIGN_SYSTEM",
    proficiency: 98,
    description: "Utility-first design architecture enabling responsive, accessible, sub-millisecond layout renderings with zero bundle bloat.",
    tags: ["UI/UX", "Design Systems", "CSS"],
  },
  {
    id: "nodejs",
    name: "Node.js & Express",
    category: "backend",
    version: "v20 LTS",
    status: "SERVICE_ENGINE",
    proficiency: 92,
    description: "Event-driven asynchronous microservices, RESTful APIs, and distributed event-loop clustering.",
    tags: ["Microservices", "REST", "Async"],
  },
  {
    id: "redis",
    name: "Redis",
    category: "backend",
    version: "v7.2+",
    status: "IN_MEMORY_CACHE",
    proficiency: 85,
    description: "Sub-10ms rate limiting, pub/sub WebSocket state synchronization, and high-speed session caching.",
    tags: ["Pub/Sub", "Caching", "Low-Latency"],
  },
  {
    id: "postgresql",
    name: "PostgreSQL & Prisma",
    category: "backend",
    version: "v16",
    status: "RELATIONAL_DB",
    proficiency: 90,
    description: "ACID-compliant relational schemas, indexed query optimization, and automated migration pipelines.",
    tags: ["SQL", "ACID", "ORM"],
  },
  {
    id: "gemini-api",
    name: "Gemini & LLM APIs",
    category: "ai",
    version: "1.5 Pro/Flash",
    status: "AGENTIC_AI",
    proficiency: 88,
    description: "Contextual prompt engineering, multi-modal embeddings, agentic decision trees, and function calling.",
    tags: ["LLM", "Embeddings", "Agents"],
  },
  {
    id: "tensorflow",
    name: "TensorFlow / OpenCV",
    category: "ai",
    version: "v2.15+",
    status: "VISION_CORE",
    proficiency: 82,
    description: "Real-time object detection, face/gesture parsing, spatial tracking, and edge-model inference.",
    tags: ["Computer Vision", "Deep Learning"],
  },
  {
    id: "docker",
    name: "Docker & CI/CD",
    category: "infra",
    version: "v26.0+",
    status: "CONTAINERIZATION",
    proficiency: 85,
    description: "Immutable environment containerization, multi-stage builds, GitHub Actions pipelines, and cloud deployments.",
    tags: ["DevOps", "Containers", "Automation"],
  },
];

export const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter items based on selected category and search input
  const filteredTech = useMemo(() => {
    return TECH_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // JSON-LD Structured Data for SEO optimization
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Technical Stack & Infrastructure Core Dependencies",
    description:
      "Engineered full-stack tools, programming languages, AI models, databases, and infrastructure dependencies.",
    itemListElement: TECH_ITEMS.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "DefinedTerm",
        name: item.name,
        description: item.description,
        termCode: item.status,
      },
    })),
  };

  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
      className="relative w-full bg-[#050505] text-[#F5F5F7] py-24 px-6 border-t border-[#1C1C1C] overflow-hidden"
    >
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Decorative Blueprint Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(#1C1C1C 1px, transparent 1px),
            linear-gradient(90deg, #1C1C1C 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Block */}
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1C1C1C] pb-10">
          <div>
            <div className="font-mono text-[#5A45FF] mb-3 text-xs tracking-widest uppercase flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#5A45FF] animate-pulse rounded-full" />
              05 // TECHNICAL LEDGER
            </div>
            <h2
              id="tech-stack-heading"
              className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-[#F5F5F7]"
            >
              STACK <span className="text-transparent" style={{ WebkitTextStroke: "1px #F5F5F7" }}>ARCHITECTURE</span>
            </h2>
          </div>

          <p className="text-[#8E8E93] max-w-md font-mono text-xs leading-relaxed uppercase tracking-wider">
            Deterministic tool selection engineered for high uptime, sub-100ms response times, and production reliability.
          </p>
        </header>

        {/* System Performance Overview Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 border border-[#1C1C1C] bg-[#0D0D0D] p-4 md:p-6 font-mono text-xs">
          <div className="border-r border-[#1C1C1C] pr-4">
            <span className="text-[#8E8E93] block mb-1">TOTAL_DEPENDENCIES</span>
            <span className="text-xl font-bold text-[#F5F5F7]">{TECH_ITEMS.length} MODULES</span>
          </div>
          <div className="border-r md:border-r border-[#1C1C1C] px-2 md:px-4">
            <span className="text-[#8E8E93] block mb-1">PRIMARY_RUNTIME</span>
            <span className="text-xl font-bold text-[#5A45FF]">NODE / TS / PY</span>
          </div>
          <div className="border-r border-[#1C1C1C] px-2 md:px-4 mt-4 md:mt-0">
            <span className="text-[#8E8E93] block mb-1">SYSTEM_TARGET</span>
            <span className="text-xl font-bold text-green-400">&lt;100ms LATENCY</span>
          </div>
          <div className="pl-2 md:pl-4 mt-4 md:mt-0">
            <span className="text-[#8E8E93] block mb-1">ARCHITECTURE</span>
            <span className="text-xl font-bold text-[#F5F5F7]">MICRO-SERVICES</span>
          </div>
        </div>

        {/* Filter Navigation & Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <nav
            role="tablist"
            aria-label="Filter tech stack categories"
            className="flex flex-wrap gap-2"
          >
            {TECH_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                aria-controls="tech-grid"
                onClick={() => setActiveCategory(cat.id)}
                className={`font-mono text-xs px-4 py-2.5 uppercase transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? "bg-[#5A45FF] text-white border-[#5A45FF] shadow-[0_0_15px_rgba(90,69,255,0.4)]"
                    : "bg-[#0D0D0D] text-[#8E8E93] border-[#1C1C1C] hover:border-[#5A45FF] hover:text-[#F5F5F7]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH_MODULE..."
              aria-label="Search tech stack modules"
              className="w-full bg-[#0D0D0D] border border-[#1C1C1C] px-4 py-2.5 font-mono text-xs text-[#F5F5F7] focus:border-[#5A45FF] outline-none transition-colors placeholder:text-[#8E8E93]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-[#8E8E93] hover:text-white"
              >
                [X]
              </button>
            )}
          </div>
        </div>

        {/* Tech Grid Ledger */}
        <div
          id="tech-grid"
          role="tabpanel"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTech.length > 0 ? (
            filteredTech.map((item) => (
              <article
                key={item.id}
                className="group relative border border-[#1C1C1C] bg-[#0D0D0D] p-6 hover:border-[#5A45FF] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle Hover Glow Effect */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#5A45FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Header Tag */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1C1C1C]">
                    <span className="font-mono text-[10px] bg-[#141414] border border-[#1C1C1C] text-[#5A45FF] px-2 py-0.5 uppercase tracking-wider font-semibold">
                      {item.status}
                    </span>
                    <span className="font-mono text-[10px] text-[#8E8E93]">
                      {item.version}
                    </span>
                  </div>

                  {/* Tech Title */}
                  <h3 className="text-xl font-bold tracking-tight text-[#F5F5F7] group-hover:text-[#5A45FF] transition-colors mb-3">
                    {item.name}
                  </h3>

                  {/* Tech Description */}
                  <p className="text-[#8E8E93] text-xs leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Tech Metric Progress Indicator */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center font-mono text-[10px] text-[#8E8E93] mb-1.5">
                      <span>DEPTH_INDEX</span>
                      <span className="text-[#5A45FF] font-bold">{item.proficiency}%</span>
                    </div>
                    <div className="w-full h-1 bg-[#1C1C1C] overflow-hidden">
                      <div
                        className="h-full bg-[#5A45FF] transition-all duration-500 ease-out"
                        style={{ width: `${item.proficiency}%` }}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1C1C1C]">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-[9px] text-[#8E8E93] bg-[#050505] border border-[#1C1C1C] px-2 py-0.5 uppercase tracking-tight"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full border border-dashed border-[#1C1C1C] p-12 text-center font-mono text-xs text-[#8E8E93]">
              [!] NO_MATCHING_MODULES_FOUND FOR &quot;{searchQuery}&quot;
            </div>
          )}
        </div>

        {/* Footer Specification Note */}
        <footer className="mt-16 pt-8 border-t border-[#1C1C1C] flex flex-col sm:flex-row justify-between items-center font-mono text-[10px] text-[#8E8E93] gap-4 uppercase">
          <div>SECURITY_PROTOCOL: HARDENED_PROD_ENVIRONMENT</div>
          <div>UPDATED: SAAD_SYSTEMS_v1.0.4</div>
        </footer>
      </div>
    </section>
  );
};
