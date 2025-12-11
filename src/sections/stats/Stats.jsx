import CountUp from "../../components/CountUp/CountUp";

export const StatsNAcheivments = () => {
  return (
    <div className="container mx-auto text-white py-10   ">
      <div className="
        grid 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-10 
        place-items-center 
        text-center
        font-extrabold
      ">
        
        <div>
          <CountUp from={0} to={1000} direction="up" duration={1} className="count-up-text inline text-white text-4xl lg:text-6xl " />
          <span className="lg:text-6xl">+</span>
          <p className="md:text-2xl lg:text-4xl">Code Contributions</p>
        </div>

        <div>
          <CountUp from={0} to={8} direction="up" duration={0.1} className="count-up-text inline text-white lg:text-6xl text-4xl" />
          <span className="lg:text-6xl">+</span>
          <p className="md:text-2xl lg:text-4xl">Projects</p>
        </div>

        <div>
          <CountUp from={0} to={20} direction="up" duration={1} className="count-up-text inline text-white lg:text-6xl text-4xl" />
          <span className="lg:text-6xl">+</span>
          <p className="md:text-2xl lg:text-4xl">Tech Stack Skills</p>
        </div>

        <div>
          <CountUp from={0} to={700} direction="up" duration={1} className="count-up-text inline text-white lg:text-6xl text-4xl" />
          <span className="lg:text-6xl">+</span>
          <p className="md:text-2xl lg:text-4xl">Followers</p>
        </div>

      </div>
    </div>
  );
};
