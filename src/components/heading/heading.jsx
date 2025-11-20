import { useState, useEffect } from "react";
import "./heading.css"
export const TypingHero = () => {
  const words = [
    "Full Stack Developer",
    "App Developer",
    "Flutter Developer",
    "React Developer",
    "Angular Developer",
    "Django Developer",
    "Flask Developer",
    "AI Integrator",
    "SaaS Developer",
    "JavaScript Developer",
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setSpeed(50); // faster deleting
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setSpeed(150); // typing speed
      }

      // If word finished typing
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      // If word finished deleting
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight relative w-fit text-white">
      <span>{text}</span>
      <span className="inline-block w-1 h-full bg-white animate-blink ml-1"></span>
    </h1>
  );
};
