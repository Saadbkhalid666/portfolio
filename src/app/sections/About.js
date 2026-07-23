"use client";

import Image from "next/image";
import myimg from "../assets/myimg.jpg";
import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

export const About = () => {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saad Bin Khalid",
    "jobTitle": "Full-Stack Engineer",
    "description": "Full-Stack Engineer specializing in modern web applications, mobile apps, and custom AI chatbots.",
    "knowsAbout": [
      "Full-Stack Web Development",
      "AI Chatbots",
      "Node.js",
      "Python",
      "Flask",
      "Django",
      "React",
      "Next.js"
    ]
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });

      tl.fromTo(labelRef.current, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.5 })
        .fromTo(
          headingRef.current.querySelectorAll(".about-line"),
          { autoAlpha: 0, y: 34 },
          { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1 },
          "-=0.25"
        )
        .fromTo(
          textRef.current.children,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.35"
        )
        .fromTo(
          imageRef.current,
          { autoAlpha: 0, scale: 0.9, y: 26 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 0.8, ease: "power4.out" },
          "-=0.6"
        );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="relative mt-20 lg:mt-32 px-6 py-12 overflow-hidden text-[#f5f5f7]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <p ref={labelRef} className="font-instrument text-[#6e6e73] text-lg">
          02 - About
        </p>
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between lg:gap-16">
          <article className="max-w-2xl text-center lg:text-left">
            <h2
              ref={headingRef}
              id="about-heading"
              className="font-lily text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight tracking-tight overflow-hidden"
            >
              <span className="about-line block">Transforming</span>
              <span className="about-line block">Ideas Daily;</span>
            </h2>

            <div ref={textRef} className="mt-8 text-base sm:text-lg leading-relaxed text-[#f5f5f7] space-y-6">
              <p>
                I&apos;m a{" "}
                <span className="inline-flex items-center px-2 py-0.5 rounded-md border border-zinc-700 bg-zinc-800 text-white font-semibold transition-all duration-300 hover:border-zinc-500">
                  Full-Stack Engineer
                </span>{" "}
                building modern, scalable, high-performance digital products—ranging from responsive web and mobile applications to custom{" "}
                <span className="inline-flex items-center px-2 py-0.5 rounded-md border border-zinc-700 bg-zinc-800 text-white font-semibold transition-all duration-300 hover:border-zinc-500">
                  AI Chatbots
                </span>.
              </p>

              <p>
                My core stack revolves around{" "}
                <span className="font-semibold text-white underline decoration-zinc-600 underline-offset-4 hover:decoration-white transition-colors">Node.js</span>,{" "}
                <span className="font-semibold text-white underline decoration-zinc-600 underline-offset-4 hover:decoration-white transition-colors">Python (Flask &amp; Django)</span>,{" "}
                <span className="font-semibold text-white underline decoration-zinc-600 underline-offset-4 hover:decoration-white transition-colors">React</span>,{" "}
                <span className="font-semibold text-white underline decoration-zinc-600 underline-offset-4 hover:decoration-white transition-colors">Next.js</span>, and modern{" "}
                <span className="font-semibold text-white underline decoration-zinc-600 underline-offset-4 hover:decoration-white transition-colors">Conversational AI integrations</span>.
              </p>

              <p className="border-l-2 border-zinc-700 pl-4 italic text-zinc-400">
                &ldquo;Good software isn&apos;t just clean code—it solves real business problems, feels effortless to use, and scales reliably.&rdquo;
              </p>

              <p className="font-medium text-white">
                That&apos;s the work I do—and the value I bring.
              </p>
            </div>
          </article>

          <div ref={imageRef} className="relative flex justify-center lg:justify-end group">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60 p-2 transition-colors duration-300 group-hover:border-zinc-600">
              <Image
                src={myimg}
                alt="Saad Bin Khalid - Full-Stack Engineer"
                className="h-auto w-64 sm:w-80 lg:w-80 rounded-xl object-cover transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.01]"
                priority
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};