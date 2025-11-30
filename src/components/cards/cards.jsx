import { NavLink } from "react-router-dom";
import "./cards.css";

export const Card = ({ title, description, skills, link }) => {
  return (
    <div
      className="
        w-96 p-6 rounded-xl 
        bg-[#0d0e1a] 
        border border-[#1f1f2e] 
        shadow-[0_0_20px_rgba(126,87,255,0.15)]
        hover:shadow-[0_0_30px_rgba(126,87,255,0.35)]
        transition-all duration-300
      "
    >
      <h1 className="text-xl font-semibold text-white mb-2 tracking-wide">
        {title}
      </h1>

      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {description}
      </p>

      <p className="font-medium text-purple-400 mb-2">Skills</p>
      <div className="flex gap-2 flex-wrap mb-4">
        {skills?.map((skill, index) => (
          <span
            key={index}
            className="
              bg-[#1a1a2a] 
              text-gray-200 
              px-3 py-1 
              text-xs rounded-md 
              border border-[#2a2a3a]
              hover:border-purple-500 
              transition-all duration-300
            "
          >
            {skill}
          </span>
        ))}
      </div>

      {link && (
        <NavLink
           to={link}
          className="
            text-purple-400 
            hover:text-purple-300 
            text-sm font-medium 
            tracking-wide 
            transition-all
          "
        >
          View More →
        </NavLink>
      )}
    </div>
  );
};
