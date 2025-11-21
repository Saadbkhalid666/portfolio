import { FaChevronCircleUp } from "react-icons/fa";
import { NavBar } from "./components/navbar/navbar";
import { Hero } from "./sections/hero/hero";
import { StatsNAcheivments } from "./sections/stats/Stats";

function App() {
  return (
    <div className="relative">
      <NavBar />
      <Hero />
<StatsNAcheivments   />
      <FaChevronCircleUp className="fixed right-10 bottom-10 animate-pulse text-purple-600  hover:scale-110 transition-all duration-150 ease-in-out hover:cursor-pointer drop-shadow-[0px_0px_10px_purple]  text-4xl" />





    </div>
  );
}

export default App;
