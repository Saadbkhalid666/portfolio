"use client";

import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

export const CustomCursor = () => {
  const cursorRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.7, duration: 0.25, ease: "power3.out" });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { autoAlpha: 1, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { autoAlpha: 0, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    gsap.ticker.add(() => {
      posRef.current.x += (mouseRef.current.x - posRef.current.x) * 0.15;
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * 0.15;
      gsap.set(cursor, { x: posRef.current.x, y: posRef.current.y });
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-9999 hidden md:block invisible"
      style={{
        width: 26,
        height: 26,
        borderRadius: "9999px",
        background: "radial-gradient(circle at 35% 30%, #ffffff, #e8e8ec 60%, #d4d4d8 100%)",
        boxShadow:
          "0 0 12px rgba(255,255,255,0.5), 0 0 4px rgba(255,255,255,0.8), inset 0 0 6px rgba(0,0,0,0.08)",
        mixBlendMode: "difference",
      }}
    />
  );
};