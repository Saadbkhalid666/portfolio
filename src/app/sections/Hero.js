import Scene from "../components/Scene";

export const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <Scene />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-8  grid   md:grid-cols-3 items-center">
        <div className="flex flex-col justify-center mt-10 sm:mt-0">
          <p className="text-purple-400 text-lg mb-2 font-inter ">Hello I&apos;m</p>

          <h1 className="text-5xl font-semibold text-[#f5f5f7] font-ancizar ">
            Saad
            <br />
            Bin Khalid
          </h1>
        </div>

        <div></div>

        <div className="flex justify-end mt-30">
          <h2 className=" leading-none">
<p className="text-[#6e6e73] font-instrument ">01 - Role</p>
            <span className="font-ancizar block text-5xl font-semibold bg-linear-to-b from-white to-black bg-clip-text text-transparent">
              Full-Stack
            </span>

            <span className="text-right font-ancizar block text-purple-300 text-5xl font-semibold -mt-4 mr-2">
              Engineer
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};
