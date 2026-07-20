import Scene from "../components/Scene";

export const Hero = () => {
  // Structured Data (JSON-LD) for Search Engine Rich Snippets
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saad Bin Khalid",
    "jobTitle": "Full-Stack Engineer",
    "description": "Portfolio of Saad Bin Khalid, a Full-Stack Engineer specializing in modern web applications.",
    "knowsAbout": ["Full-Stack Development", "Web Development", "React", "Next.js", "Node.js"]
  };

  return (
    <section 
      aria-label="Introduction" 
      className="relative h-screen overflow-hidden"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div 
        aria-hidden="true" 
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <Scene />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 grid md:grid-cols-3 items-center">
        <header className="flex flex-col justify-center mt-10 sm:mt-0">
          <p className="text-zinc-400 text-lg mb-2 font-inter">
            Hello I&apos;m
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold text-[#f5f5f7] font-ancizar">
            Saad
            <br />
            Bin Khalid
          </h1>
        </header>

        <div aria-hidden="true"></div>

        <div className="flex justify-end mt-30">
          <div className="leading-none">
            <h2 className="text-[#6e6e73] font-instrument text-base font-normal">
              01 - Role
            </h2>
            
            <p className="font-ancizar block text-5xl font-semibold md:text-6xl bg-linear-to-b from-white to-black bg-clip-text text-transparent">
              Full-Stack
            </p>

            <p className="text-right font-ancizar block md:text-6xl text-white text-5xl font-semibold -mt-4">
              Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};