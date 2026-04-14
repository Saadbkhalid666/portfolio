import React from "react";
import img from "../../assets/images/saad_dev_3d.png";
import {
  FaLaptopCode,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-scroll";

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 w-full px-4 md:px-10 lg:px-20 overflow-hidden text-white"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute left-[-10%] top-[20%] w-120 h-120 bg-purple-900/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute right-[-10%] bottom-[20%] w-120 h-120 bg-purple-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="text-center mb-16 md:mb-20 relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-300 to-white inline-block pb-2">
          About Me
        </h1>
        <div className="h-1 w-24 bg-linear-to-r from-purple-600 to-purple-300 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
        <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          Get to know more about who I am, what I do, and what drives my passion
          for technology.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* ==== IMAGE SECTION ==== */}
        <div className="w-full lg:w-5/12 flex justify-center">
          <div className="relative group w-full max-w-md">
            {/* Glowing offset backdrop blob */}
            <div className="absolute -inset-4 bg-linear-to-tr from-purple-600 to-fuchsia-600 rounded-[3rem] opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>

            {/* Main Image Base */}
            <div className="relative rounded-3xl border-[6px] border-[#120F1F] bg-[#0b0914] overflow-hidden ring-1 ring-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] transition-all duration-700">
              <img
                src={img}
                alt="Saad Bin Khalid 3D Avatar"
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* ==== CONTENT SECTION ==== */}
        <div className="w-full lg:w-7/12">
          <div className="bg-[#120F1F]/60 backdrop-blur-xl border border-purple-500/20 shadow-[0_15px_30px_rgba(168,85,247,0.1)] rounded-3xl p-8 md:p-12 hover:-translate-y-1 transition-all duration-500">
            <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-purple-300 mb-6">
              Hi, I am Saad
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed text-base md:text-lg">
              <p>
                I am a passionate{" "}
                <strong className="text-purple-300 font-semibold">
                  17-year-old
                </strong>{" "}
                ICS (Physics) student and a{" "}
                <strong className="text-purple-300 font-semibold">
                  full stack web & mobile app developer
                </strong>{" "}
                from Lahore, Pakistan. Alongside my academic journey, I am
                actively building real-world applications and continuously
                advancing my skills in software engineering and artificial
                intelligence, in sha allah.
              </p>

              <p>
                I specialize in designing and developing high-performance,
                scalable, and user-centric applications using modern
                technologies like{" "}
                <strong className="text-purple-300 font-semibold">
                  React, Angular, TailwindCSS, and React Native
                </strong>
                . On the backend, I build robust systems using{" "}
                <strong className="text-purple-300 font-semibold">
                  Node.js, Express.js, Flask, and MongoDB
                </strong>
                . I focus on writing clean, maintainable code and delivering
                polished, production-ready solutions that create real-world
                impact.
              </p>
            </div>

            {/* Micro Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 mb-8">
              <div className="flex items-center gap-4 p-4 bg-purple-900/10 border border-purple-500/10 rounded-xl hover:bg-purple-900/20 hover:border-purple-500/30 transition-all group">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                  <FaCalendarAlt size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    Age
                  </p>
                  <p className="font-bold text-gray-200">17 Years</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-purple-900/10 border border-purple-500/10 rounded-xl hover:bg-purple-900/20 hover:border-purple-500/30 transition-all group">
                <div className="p-3 bg-purple-500/10 rounded-lg text-[#38bdf8] group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    Location
                  </p>
                  <p className="font-bold text-gray-200">Lahore, PK</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-purple-900/10 border border-purple-500/10 rounded-xl hover:bg-purple-900/20 hover:border-purple-500/30 transition-all group">
                <div className="p-3 bg-purple-500/10 rounded-lg text-[#22c55e] group-hover:scale-110 transition-transform">
                  <FaLaptopCode size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    Core Focus
                  </p>
                  <p className="font-bold text-gray-200">Full-Stack Web</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-purple-900/10 border border-purple-500/10 rounded-xl hover:bg-purple-900/20 hover:border-purple-500/30 transition-all group">
                <div className="p-3 bg-purple-500/10 rounded-lg text-[#facc15] group-hover:scale-110 transition-transform">
                  <FaStar size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    Interests
                  </p>
                  <p className="font-bold text-gray-200">AI & Web Perf</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-purple-500/20 flex flex-col sm:flex-row items-center gap-6 justify-between">
              <p className="text-gray-400 text-sm md:text-base">
                I’m open to freelance work and collaboration.
              </p>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-50}
                className="w-full sm:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/40 transition-all cursor-pointer text-center"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
