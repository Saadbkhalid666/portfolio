import Scene from "../components/Scene";

export const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <Scene />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 grid grid-cols-3 items-center">
        
        <div className="flex flex-col justify-center">
          <p className="text-gray-400 text-lg mb-2">
            Hello I&apos;m
          </p>

          <h1 className="text-6xl font-bold text-[#f5f5f7] ">
            Saad
            <br />
            Bin Khalid
          </h1>
        </div>

        <div></div>

        <div className="flex justify-end">
          <h2 className="text-5xl font-semibold  mt-12 text-right">
            Full-Stack
            <br />
            Engineer
          </h2>
        </div>

      </div>
    </section>
  );
};