export const Services = () => {
const services = [
  {
    num: "02",
    title: "Frontend Engineering",
    desc: "Building fast, responsive, and SEO-friendly interfaces using modern frameworks. Includes: React & Angular applications, TypeScript-based scalable UIs, TailwindCSS responsive design, and pixel-perfect Figma-to-code conversions.",
  },
  {
    num: "03",
    title: "Backend & API Architecture",
    desc: "Developing secure, reliable, and high-performance backend systems. Includes: RESTful API development, MongoDB database architecture, authentication and JWT security, and scalable backend logic for modern applications.",
  },
  {
    num: "04",
    title: "App Development",
    desc: "Creating smooth, high-performance mobile apps for every device using Flutter. Includes: Android/iOS development, clean UI/UX implementation, Firebase integration, API-driven apps, and AI-powered mobile experiences.",
  },
  {
    num: "05",
    title: "AI-Powered Solutions",
    desc: "Delivering smart, automation-driven digital systems using modern AI technologies. Includes: AI chatbots (Gemini/GPT), OCR document scanning, business AI assistants, and predictive analytics dashboards for intelligent decision-making.",
  },
  {
    num: "06",
    title: "Cross-Platform Dashboards",
    desc: "Developing powerful dashboards tailored for business, automotive, and medical industries. Includes: vehicle tracking systems, inventory and logistics dashboards, medical and lab record platforms, and full business management panels.",
  },
  {
    num: "07",
    title: "E-commerce & Storefront Development",
    desc: "Building modern, conversion-optimized online stores with seamless user experiences. Includes: full e-commerce websites, product dashboards, tyre shop systems, payment/carts integration, and secure storefront development.",
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
          <span className="text-purple-900 mr-6">01</span> Full Stack
          Development
        </h1>
        <p className="col-span-3">
          Crafting timeless digital experiences with clean architecture, secure
          backend logic, and smooth modern interfaces. Includes: Custom websites
          SaaS platforms Admin dashboards Authentication systems API development
          (Django, Flask, Express)
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
