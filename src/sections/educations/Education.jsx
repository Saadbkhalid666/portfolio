import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

export const EducationExperience = () => {
  const education = [
    {
      title: "Intermediate (ICS phy.)",
      subtitle: "Punjab Group of Colleges, Lahore",
      date: "2024 – 2026",
      details:
        "Focused on Computer, Physics, and Mathematics with consistent academic performance.",
    },
    {
      title: "Matriculation (Science)",
      subtitle: "Balad ul ilm School System",
      date: "2012 – 2024",
      details: "Achieved excellent grades and earned Student of the Year award.",
    },
    {
      title: "Web Development & AI (Self-Learning)",
      subtitle: "Online Certifications",
      date: "2024 – Present",
      details:
        "Practical experience in HTML, CSS, JS, React, Angular, Python, AI and many more.",
    },
  ];

  const experience = [
    {
      title: "Full Stack Developer",
      subtitle: "DaimSoftHub",
      date: "3-Month Contract (2024)",
      details:
        "Worked on real-world MERN & full-stack applications, writing scalable APIs and modern UI.",
    },
    {
      title: "Leadership Experience",
      subtitle: "Balad ul ilm School System",
      date: "2019 – 2023",
      details:
        "Served as a student leader for 4 years, managing events, teams, and communication.",
    },
  ];

  return (
    <section
      id="education-experience"
      className="relative w-full py-24 px-4 md:px-10 lg:px-20 text-white overflow-hidden"
    >
      {/* Background glowing effects for the section */}
      <div className="absolute left-0 top-[10%] w-120 h-120 bg-purple-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute right-0 bottom-[10%] w-120 h-120 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="text-center mb-16 md:mb-24 relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-300 to-white inline-block pb-2">
          Education & Experience
        </h1>
        <div className="h-1 w-24 bg-linear-to-r from-purple-600 to-purple-300 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 max-w-7xl mx-auto relative z-10 transition-all">
        
        {/* LEFT SIDE — EDUCATION */}
        <div>
          <div className="flex items-center gap-4 mb-10 pl-2">
            <div className="p-3 bg-purple-600/20 text-purple-400 rounded-xl border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <FaGraduationCap size={28} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-wide">
              Education
            </h2>
          </div>

          <div className="relative border-l-2 border-purple-500/30 ml-6 md:ml-8 flex flex-col gap-10 py-2">
            {education.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-10 group">
                {/* Timeline Dot */}
                <span className="absolute -left-[11px] top-4 h-5 w-5 rounded-full bg-purple-500 border-4 border-[#0b0914] group-hover:bg-purple-300 group-hover:shadow-[0_0_15px_rgba(216,180,254,0.8)] group-hover:scale-125 transition-all duration-300 z-10"></span>

                {/* Card */}
                <div className="relative bg-[#120F1F]/60 backdrop-blur-xl border border-purple-500/20 shadow-lg shadow-purple-900/20 rounded-2xl p-6 md:p-8 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(168,85,247,0.2)] hover:border-purple-400/50 transition-all duration-500 overflow-hidden">
                  
                  {/* Subtle inner glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-400/20 transition-all duration-500 z-0"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-100 group-hover:text-purple-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-3">
                      <span className="font-semibold text-lg text-purple-200">
                        {item.subtitle}
                      </span>
                      <span className="hidden sm:block text-purple-500/50">•</span>
                      <span className="inline-flex items-center gap-1.5 text-purple-300 bg-purple-900/40 w-fit px-3 py-1 rounded-full text-xs md:text-sm font-semibold tracking-wide border border-purple-500/20">
                        <FaCalendarAlt size={12} /> {item.date}
                      </span>
                    </div>

                    <p className="mt-5 text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {item.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — EXPERIENCE */}
        <div>
          <div className="flex items-center gap-4 mb-10 pl-2">
            <div className="p-3 bg-purple-600/20 text-purple-400 rounded-xl border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <FaBriefcase size={26} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-wide">
              Experience
            </h2>
          </div>

          <div className="relative border-l-2 border-purple-500/30 ml-6 md:ml-8 flex flex-col gap-10 py-2">
            {experience.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-10 group">
                {/* Timeline Dot */}
                <span className="absolute -left-[11px] top-4 h-5 w-5 rounded-full bg-purple-500 border-4 border-[#0b0914] group-hover:bg-purple-300 group-hover:shadow-[0_0_15px_rgba(216,180,254,0.8)] group-hover:scale-125 transition-all duration-300 z-10"></span>

                {/* Card */}
                <div className="relative bg-[#120F1F]/60 backdrop-blur-xl border border-purple-500/20 shadow-lg shadow-purple-900/20 rounded-2xl p-6 md:p-8 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(168,85,247,0.2)] hover:border-purple-400/50 transition-all duration-500 overflow-hidden">
                  
                  {/* Subtle inner glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-400/20 transition-all duration-500 z-0"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-100 group-hover:text-purple-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-3">
                      <span className="font-semibold text-lg text-purple-200">
                        {item.subtitle}
                      </span>
                      <span className="hidden sm:block text-purple-500/50">•</span>
                      <span className="inline-flex items-center gap-1.5 text-purple-300 bg-purple-900/40 w-fit px-3 py-1 rounded-full text-xs md:text-sm font-semibold tracking-wide border border-purple-500/20">
                        <FaCalendarAlt size={12} /> {item.date}
                      </span>
                    </div>

                    <p className="mt-5 text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {item.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};;
