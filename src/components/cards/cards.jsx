import { NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./cards.css";

export const Card = ({ title, description, skills, link }) => {
  return (
    <div
      className="group relative w-full h-full p-8 rounded-3xl bg-[#120F1F]/60 backdrop-blur-xl border border-purple-500/20 shadow-lg shadow-purple-900/20 flex flex-col hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(168,85,247,0.2)] hover:border-purple-400/50 transition-all duration-500 overflow-hidden"
    >
      {/* Inner hover glow */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 via-purple-600/0 to-purple-600/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 z-0"></div>

      <div className="relative z-10 flex flex-col flex-1">
        <h1 className="text-2xl font-bold text-gray-100 mb-3 tracking-wide group-hover:text-purple-300 transition-colors duration-300 line-clamp-1">
          {title}
        </h1>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-1 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        <div className="mt-auto">
          <p className="font-semibold text-purple-400 mb-3 text-sm tracking-widest uppercase">Tech Stack</p>
          <div className="flex gap-2 flex-wrap mb-6">
            {skills?.map((skill, index) => (
              <span
                key={index}
                className="bg-purple-900/40 text-purple-300 px-3 py-1.5 text-xs font-semibold tracking-wide rounded-full border border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.1)] hover:bg-purple-700/50 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {link && (
            <NavLink
              to={link}
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm md:text-base font-bold tracking-wide transition-all group-hover:gap-3"
            >
              View More <FiArrowRight className="transition-all" />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
