import React from "react";
import img from "../../assets/images/devimg.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0b0720] text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="img-container w-full md:w-1/2">
          <img 
            src={img} 
            alt="Saad Bin Khalid - Web Developer" 
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        <div className="content-container w-full md:w-1/2">
          <h2 className="text-4xl font-extrabold mb-4">About Me</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            My name is <strong>Saad Bin Khalid</strong>. I am a <strong>17-year-old</strong> frontend web developer and an aspiring software & AI engineer from Lahore, Pakistan. I am currently studying <strong>Intermediate (Pre-Medical)</strong>, while I build and learn in web development and AI in sha allah.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg mt-4">
            I focus on building fast, accessible, and user-friendly web applications using <strong>React</strong>, <strong>Angular</strong>, <strong>TailwindCSS</strong>, and modern backend tools like <strong>Node.js</strong> and <strong>Flask</strong>. I value clean code, polished UI, and real-world impact.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
            <li><strong>Age:</strong> 17</li>
            <li><strong>Location:</strong> Lahore, Pakistan</li>
            <li><strong>Skills:</strong> React, Angular, TypeScript, TailwindCSS</li>
            <li><strong>Interests:</strong> AI, Web Performance, UX</li>
          </ul>

          <p className="text-gray-400 mt-6">
            I’m open to freelance work and collaboration. If you have a project or idea, click <em>Hire Me</em> to get in touch — I’ll get back to you quickly, jani.
          </p>
        </div>
      </div>
    </section>
  );
};
