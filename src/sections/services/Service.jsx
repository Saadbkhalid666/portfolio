export const Services = () => {
  const services = [
    {
      num: "02",
      title: "Frontend Development",
      desc: "Elegant interfaces woven with clean code and classic UI principles, shaped for modern users.",
    },
    {
      num: "03",
      title: "Backend Development",
      desc: "Strong, reliable, tradition-focused server logic ensuring smooth performance and security.",
    },
    {
      num: "04",
      title: "App Development",
      desc: "Crafting mobile experiences rooted in simplicity, speed, and long-lasting value.",
    },
    {
      num: "05",
      title: "SaaS Development",
      desc: "Elegant interfaces woven with clean code and classic UI principles, shaped for modern users.",
    },
    {
      num: "06",
      title: "AI Integration",
      desc: "Strong, reliable, tradition-focused server logic ensuring smooth performance and security.",
    },
    {
      num: "07",
      title: "API Development",
      desc: "Crafting mobile experiences rooted in simplicity, speed, and long-lasting value.",
    },
     
  ];

  return (
    <div
      id="services"
      className="container w-full min-h-screen mx-auto mt-20 pt-10"
    >
      <h1 className="lg:text-6xl text-4xl font-extrabold bg-linear-to-r from-[#a070ef] to-white bg-clip-text text-transparent text-center">
        My Quality Services
      </h1>

      {/* Full Stack (Main One) */}
      <div className="bg-linear-to-r mt-4 text-white md:mx-20 from-[#8a66c4] to-[#691ad0] py-6 px-6 grid md:grid-cols-4 grid-cols-1 gap-6">
        <h1 className="text-2xl font-extrabold col-span-1">
          <span className="text-purple-900 mr-6">01</span> Full Stack Development
        </h1>
        <p className="col-span-3">
          End-to-end systems built with precision, from frontend aesthetics to
          backend power — crafted with timeless discipline.
        </p>
      </div>

      {/* Loop Services */}
      {services.map((s, i) => (
        <div
          key={i}
          className="bg-linear-to-r mt-4 text-white md:mx-20 py-6 px-6 grid md:grid-cols-4 grid-cols-1 gap-6"
        >
          <h1 className="text-2xl font-extrabold col-span-1">
            <span className="text-purple-900 mr-6">{s.num}</span> {s.title}
          </h1>
          <p className="col-span-3">{s.desc}</p>
        </div>
      ))}
    </div>
  );
};
