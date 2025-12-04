export const EducationExperience = () => {
  const education = [
    {
      degree: "Intermediate (ICS phy.)",
      institute: "Punjab Group of Colleges, Lahore",
      year: "2024 – 2026 ",
      details:
        "Focused on Computer, Physics, and Mathematics with consistent academic performance.",
    },
    {
      degree: "Matriculation (Science)",
      institute: "Balad ul ilm School System",
      year: "2012 – 2024",
      details: "Achieved excellent grades and earned Student of the Year award.",
    },
    {
      degree: "Web Development & AI (Self-Learning)",
      institute: "Online Certifications",
      year: "2024 – Present",
      details:
        "Practical experience in HTML, CSS, JS, React, Angular, Python, AI and many more.",
    },
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "DaimSoftHub",
      duration: "3-Month Contract (2024)",
      details:
        "Worked on real-world MERN & full-stack applications, writing scalable APIs and modern UI.",
    },
    {
      role: "Leadership Experience",
      company: "Balad ul ilm School System",
      duration: "2019 – 2023",
      details:
        "Served as a student leader for 4 years, managing events, teams, and communication.",
    },
  ];

  return (
    <section
      id="education-experience"
      className="w-full py-16 px-4 md:px-10 lg:px-20 text-white"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-linear-to-r from-purple-600 via-purple-300 to-white mb-14">
        Education & Experience
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT SIDE — EDUCATION */}
        <div>
          <h2 className="text-3xl font-bold text-purple-300 mb-6">Education</h2>

          <div className="flex flex-col gap-8">
            {education.map((item, index) => (
              <div
                key={index}
                className="bg-[#120F1F] border border-purple-400/20 shadow-lg shadow-purple-600/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-purple-300">
                  {item.degree}
                </h3>
                <p className="mt-1 text-gray-300">{item.institute}</p>
                <p className="mt-1 text-purple-400 text-sm">{item.year}</p>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — EXPERIENCE */}
        <div>
          <h2 className="text-3xl font-bold text-purple-300 mb-6">Experience</h2>

          <div className="flex flex-col gap-8">
            {experience.map((item, index) => (
              <div
                key={index}
                className="bg-[#120F1F] border border-purple-400/20 shadow-lg shadow-purple-600/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-purple-300">
                  {item.role}
                </h3>
                <p className="mt-1 text-gray-300 font-medium">{item.company}</p>
                <p className="mt-1 text-purple-400 text-sm">{item.duration}</p>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
