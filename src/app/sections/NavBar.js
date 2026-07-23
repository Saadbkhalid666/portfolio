"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "CONNECT", href: "#connect" },
];

const ACCENT = "#f5f5f7"; // swap to match your design tokens

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const linksRef = useRef([]);
  const underlineRefs = useRef([]);
  const logoRef = useRef(null);
  const statusRef = useRef(null);
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);
  const drawerLinksRef = useRef([]);
  const tlRef = useRef(null);

  // Entrance animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(logoRef.current, { autoAlpha: 0, y: -12 }, { autoAlpha: 1, y: 0, duration: 0.6 })
      .fromTo(
        linksRef.current,
        { autoAlpha: 0, y: -10 },
        { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 },
        "-=0.35"
      )
      .fromTo(statusRef.current, { autoAlpha: 0, x: 10 }, { autoAlpha: 1, x: 0, duration: 0.5 }, "-=0.3");
  }, []);

  // Background solidifies past a scroll threshold
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile drawer open/close, driven by GSAP instead of CSS transitions
  useEffect(() => {
    if (tlRef.current) tlRef.current.kill();

    if (isOpen) {
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline();
      tl.set(drawerRef.current, { display: "flex" })
        .to(overlayRef.current, { autoAlpha: 1, duration: 0.25 }, 0)
        .fromTo(
          drawerRef.current,
          { xPercent: 100 },
          { xPercent: 0, duration: 0.45, ease: "power4.out" },
          0
        )
        .fromTo(
          drawerLinksRef.current,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.06 },
          "-=0.2"
        );
      tlRef.current = tl;
    } else {
      document.body.style.overflow = "";
      const tl = gsap.timeline();
      tl.to(drawerRef.current, { xPercent: 100, duration: 0.35, ease: "power3.in" })
        .to(overlayRef.current, { autoAlpha: 0, duration: 0.2 }, "-=0.2")
        .set(drawerRef.current, { display: "none" });
      tlRef.current = tl;
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const hoverIn = (i) =>
    gsap.to(underlineRefs.current[i], { scaleX: 1, duration: 0.3, ease: "power2.out" });
  const hoverOut = (i) =>
    gsap.to(underlineRefs.current[i], { scaleX: 0, duration: 0.25, ease: "power2.in" });

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 border-b ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-zinc-800"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto h-20 px-6 md:px-8 flex items-center justify-between">
        <h1
          ref={logoRef}
          className="text-xl font-semibold tracking-wide text-[#f5f5f7] cursor-pointer font-ancizar relative z-50"
          onClick={() => handleNavClick("body")}
        >
          Saad Bin Khalid
        </h1>

        <ul className="hidden md:flex items-center gap-12 text-sm font-mono font-medium text-[#6e6e73]">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              ref={(el) => (linksRef.current[i] = el)}
              className="relative cursor-pointer text-white/60 hover:text-white transition-colors duration-300"
              onClick={() => handleNavClick(link.href)}
              onMouseEnter={() => hoverIn(i)}
              onMouseLeave={() => hoverOut(i)}
            >
              .{link.label}
              <span className="opacity-50">( )</span>
              <span
                ref={(el) => (underlineRefs.current[i] = el)}
                className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0"
                style={{ backgroundColor: ACCENT }}
              />
            </li>
          ))}
        </ul>

        <div ref={statusRef} className="hidden md:flex items-center gap-2 text-zinc-300">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
              style={{ backgroundColor: ACCENT }}
            />
            <span
              className="relative inline-flex rounded-full h-2.5 w-2.5"
              style={{ backgroundColor: ACCENT }}
            />
          </span>
          <span className="text-sm font-mono">Available for work</span>
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50 space-y-1.5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[#f5f5f7] rounded-sm transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#f5f5f7] rounded-sm transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#f5f5f7] rounded-sm transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden opacity-0 invisible"
        onClick={toggleMenu}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-[#0a0a0a] border-l border-zinc-800 z-40 md:hidden hidden flex-col justify-center px-8"
      >
        <ul className="flex flex-col gap-8 text-lg font-mono font-medium text-[#6e6e73]">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              ref={(el) => (drawerLinksRef.current[i] = el)}
              className="cursor-pointer hover:text-white transition-colors duration-300"
              onClick={() => handleNavClick(link.href)}
            >
              .{link.label}
              <span className="opacity-50">( )</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 text-zinc-300 mt-12 pt-8 border-t border-zinc-800">
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: ACCENT }} />
          <span className="text-sm font-mono">Available for work</span>
        </div>
      </div>
    </header>
  );
};