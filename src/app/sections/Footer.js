"use client";

import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
} from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaArrowUpRightFromSquare,
  FaXmark,
  FaCircleExclamation,
} from "react-icons/fa6";
import { MdOutlineMail, MdOutlineHourglassTop } from "react-icons/md";
import { gsap, ScrollTrigger } from "../lib/gsap";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Saadbkhalid666",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/saadbinkhalid666",
    Icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/sagit_saad",
    Icon: FaInstagram,
  },
  {
    label: "Email",
    href: "mailto:saadbkhalid666@gmail.com",
    Icon: MdOutlineMail,
  },
];

function useTerminalClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-GB", { hour12: false }) + " PKT");
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function CollaborateModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const overlayRef = useRef(null);
  const dialogRef = useRef(null);

  const handleClose = useCallback(() => {
    const tl = gsap.timeline({
      onComplete: onClose,
    });
    tl.to(dialogRef.current, {
      autoAlpha: 0,
      y: 15,
      scale: 0.95,
      duration: 0.2,
      ease: "power2.in",
    }).to(overlayRef.current, { autoAlpha: 0, duration: 0.2 }, "-=0.1");
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);

    const tl = gsap.timeline();
    tl.fromTo(
      overlayRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.25, ease: "power2.out" },
    ).fromTo(
      dialogRef.current,
      { autoAlpha: 0, y: 26, scale: 0.95 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, ease: "back.out(1.4)" },
      "-=0.15",
    );

    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose, open]);

  if (!open) return null;

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
        }),
 
      });
      
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#050608]/75 backdrop-blur-md"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Start a collaboration"
        className="w-full max-w-md bg-[#0A0B0D] border border-white/10 shadow-[0_0_0_1px_rgba(47,110,255,0.06),0_24px_60px_rgba(0,0,0,0.6)] font-mono"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="w-1.75 h-1.75 rounded-full bg-[#2F6FFF] inline-block shadow-[0_0_8px_#2F6FFF]" />
            new_message.sh
          </div>
          <button
            onClick={handleClose}
            aria-label="Close"
            className="bg-transparent border border-white/12 text-zinc-400 w-6.5 h-6.5 grid place-items-center cursor-pointer hover:text-white hover:border-white/20 transition-colors"
          >
            <FaXmark size={14} />
          </button>
        </div>

        <div className="p-5">
          <p className="text-[#4B7BFF] text-xs tracking-wider mb-1">
            .CONNECT( )
          </p>
          <h3 className="text-zinc-100 font-sans text-6xl font-semibold mb-4.5 tracking-wide">
            Let&apos;s build something worth shipping.
          </h3>

          {status === "sent" ? (
            <div className="flex gap-2.5 items-start p-3.5 border border-green-400/25 bg-green-400/6">
              <FaCheckCircle
                size={18}
                className="text-green-400 shrink-0 mt-0.5"
              />
              <div>
                <p className="text-zinc-200 text-xs font-sans">
                  Message sent. I&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-2.5 bg-transparent border-none text-[#4B7BFF] text-xs cursor-pointer p-0 font-inherit hover:underline"
                >
                  close ✕
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit}>
              <Field
                label="> name"
                value={form.name}
                onChange={update("name")}
                placeholder="Your name"
              />
              <Field
                label="> email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@company.com"
                type="email"
              />
              <Field
                label="> message"
                value={form.message}
                onChange={update("message")}
                placeholder="Tell me about the project..."
                textarea
              />

              {status === "error" && (
                <div className="flex gap-2 items-center text-red-400 text-xs mb-3 font-sans">
                  <FaCircleExclamation size={14} />
                  Something went wrong. Please try again, or email directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full mt-1 p-3 border-none font-semibold text-xs tracking-wide flex items-center justify-center gap-2 font-sans transition-colors duration-150 ${
                  status === "sending"
                    ? "bg-[#f5f5f7]/40 text-[#0A0B0D] cursor-not-allowed"
                    : "bg-[#6e6e73] text-[#f5f5f7] hover:bg-[#6e6e73] cursor-pointer"
                }`}
              >
                {status === "sending" ? (
                  <>
                    <MdOutlineHourglassTop size={14} className="animate-spin" />{" "}
                    sending...
                  </>
                ) : (
                  <>send_message()</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, textarea, ...props }) {
  const Comp = textarea ? "textarea" : "input";
  return (
    <label className="block mb-3.5">
      <span className="block text-[11px] text-zinc-500 mb-1.5 tracking-wide">
        {label}
      </span>
      <Comp
        required
        rows={textarea ? 4 : undefined}
        {...props}
        className="w-full bg-[#0F1012] border border-white/12 text-zinc-200 px-3 py-2.5 text-xs font-sans outline-none focus:border-[#2F6FFF] transition-colors duration-150 box-border resize-y"
      />
    </label>
  );
}

export const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const time = useTerminalClock();

  const footerRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const ctaRef = useRef(null);
  const navRef = useRef(null);
  const socialsRef = useRef(null);
  const bottomRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: { trigger: footerRef.current, start: "top 85%" },
      });

      tl.fromTo(
        labelRef.current,
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.5 },
      )
        .fromTo(
          headingRef.current,
          { autoAlpha: 0, y: 32 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "-=0.25",
        )
        .fromTo(
          ctaRef.current,
          { autoAlpha: 0, scale: 0.9 },
          { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.4",
        )
        .fromTo(
          navRef.current.children,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.06 },
          "-=0.2",
        )
        .fromTo(
          socialsRef.current.children,
          { autoAlpha: 0, scale: 0.6 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.06,
            ease: "back.out(2)",
          },
          "-=0.3",
        )
        .fromTo(
          bottomRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.6 },
          "-=0.1",
        );

      // Animated links on Hover
      const navLinks = Array.from(navRef.current.children);
      navLinks.forEach((link) => {
        const xTo = gsap.quickTo(link, "x", {
          duration: 0.3,
          ease: "power2.out",
        });

        link.addEventListener("mouseenter", () => {
          gsap.to(link, { color: "#2F6FFF", duration: 0.2 });
          xTo(4);
        });
        link.addEventListener("mouseleave", () => {
          gsap.to(link, { color: "#9CA3AF", duration: 0.2 });
          xTo(0);
        });
      });

      // Animated Social Icons on Hover
      const socialIcons = Array.from(socialsRef.current.children);
      socialIcons.forEach((icon) => {
        const yTo = gsap.quickTo(icon, "y", {
          duration: 0.3,
          ease: "power2.out",
        });

        icon.addEventListener("mouseenter", () => {
          yTo(-4);
          gsap.to(icon, { scale: 1.1, duration: 0.2, ease: "power2.out" });
        });
        icon.addEventListener("mouseleave", () => {
          yTo(0);
          gsap.to(icon, { scale: 1, duration: 0.2, ease: "power2.out" });
        });
      });

      ScrollTrigger.refresh();
    }, footerRef);

    return () => ctx.revert();
  }, []);

  // CTA Magnetic Effect
  useEffect(() => {
    const btn = ctaRef.current;
    if (!btn) return;

    const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3.out" });

    const onMove = (e) => {
      const rect = btn.getBoundingClientRect();
      xTo((e.clientX - rect.left - rect.width / 2) * 0.35);
      yTo((e.clientY - rect.top - rect.height / 2) * 0.35);
    };

    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);

    return () => {
      btn.removeEventListener("mousemove", onMove);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Smooth Scroll Handler
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <footer
        ref={footerRef}
        id="connect"
        className="bg-[#08090A] text-zinc-200 border-t border-white/8 font-sans"
      >
        <div className="max-w-6xl mx-auto px-8 pt-24 pb-10">
          <p
            ref={labelRef}
            className="text-xs tracking-wider text-[#f5f5f7] mb-5 font-instrument"
          >
            05 — GET IN TOUCH
          </p>

          <div className="flex flex-wrap items-end justify-between gap-8 pb-14 border-b border-white/8">
            <h2
              ref={headingRef}
              className="font-sans font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.08] tracking-wide max-w-2xl"
            >
              Let&apos;s build something
              <br />
              worth shipping.
            </h2>

            <button
              ref={ctaRef}
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-6.5 py-4 bg-transparent border border-[#6e6e73] text-[#6e6e73] font-mono text-xs tracking-wide cursor-pointer whitespace-nowrap hover:bg-[#6e6e73] hover:text-[#f5f5f7] transition-colors duration-150 group"
            >
              Let&apos;s collaborate{" "}
              <FaArrowUpRightFromSquare
                size={16}
                className="text-[#6e6e73] group-hover:text-[#08090A] transition-colors duration-150"
              />
            </button>
          </div>

          <div className="flex flex-wrap gap-8 justify-between py-9 border-b border-white/8">
            <nav ref={navRef} className="flex gap-6 flex-wrap">
              {["ABOUT", "WORK", "CONNECT"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="text-zinc-400 font-mono text-xs no-underline tracking-wide inline-block"
                >
                  .{item}()
                </a>
              ))}
            </nav>

            <div ref={socialsRef} className="flex gap-2.5">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9.5 h-9.5 grid place-items-center border border-white/14 text-zinc-400 hover:bg-zinc-600   hover:text-[#08090A] transition-all duration-150 group"
                >
                  <Icon
                    size={16}
                    className="group-hover:text-[#08090A] transition-colors duration-150"
                  />
                </a>
              ))}
            </div>
          </div>

          <div
            ref={bottomRef}
            className="flex flex-wrap gap-2 justify-between items-center pt-6 font-mono text-xs text-zinc-600"
          >
            <p className="m-0">
              saad@fullstack:~$ status --available
              <span className="text-green-400"> ● online</span>
            </p>
            <p className="m-0">
              © {new Date().getFullYear()} Saad Bin Khalid — {time}
            </p>
          </div>
        </div>

        <CollaborateModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </footer>
    </div>
  );
};
