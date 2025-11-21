import CountUp from "../../components/CountUp/CountUp";
export const StatsNAcheivments = () => {
  return (
    <div className="container text-white h-screen w-full flex flex-row justify-around mx-auto  text-6xl font-extrabold">
      <div className="contributions ">
        <CountUp
          from={0}
          to={1000}
          direction="up"
          duration={1}
          className="count-up-text inline text-white "
        />
        <span>+</span>
        <p className="text-4xl"> Code Contributions</p>
      </div>
      <div className="projects">
        <CountUp
          from={0}
          to={8}
          direction="up"
          duration={0.1}
          className="count-up-text text-white "
        />
        <span>+</span>
        <p className="text-4xl">Projects</p>
      </div>
      <div className="stack">
        <CountUp
          from={0}
          to={20}
          direction="up"
          duration={1}
          className="count-up-text text-white "
        />
        <span>+</span>
        <p className="text-4xl">Tech Stack Skills</p>
      </div>
      <div className="followers">
        <CountUp
          from={0}
          to={650}
          direction="up"
          duration={1}
          className="count-up-text text-white "
        />
        <span>+</span>
        <p className="text-4xl">Followers</p>
      </div>
    </div>
  );
};
