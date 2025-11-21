import CountUp from "../../components/CountUp/CountUp";
export const StatsNAcheivments = () => {
  return (
    <div className="container text-white h-screen w-full flex flex-row justify-around mx-auto  text-6xl font-extrabold">
      <div className="contributions">
        <CountUp
          from={0}
          to={1000}
          direction="up"
          duration={1}
          className="count-up-text inline text-white "
        />
      </div>
      <div className="projects">
        <CountUp
          from={0}
          to={1000}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text text-white "
        />
      </div>
      <div className="stack">
        <CountUp
          from={0}
          to={1000}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text text-white "
        />
      </div>
      <div className="followers">
        <CountUp
          from={0}
          to={1000}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text text-white "
        />
      </div>
    </div>
  );
};
