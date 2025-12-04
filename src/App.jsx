import { FaChevronCircleUp } from "react-icons/fa";
import { Hero } from "./sections/hero/hero";

import { StatsNAcheivments } from "./sections/stats/Stats";
import { Services } from "./sections/services/Service";
import { Portfolio } from "./sections/portfolio/portfolio";
import { Skills } from "./sections/skills/skills";
import { AchievementsSlider } from "./sections/Achievements/Achievements";
import { EducationExperience } from "./sections/educations/Education";
import { Testimonials } from "./sections/Testimonial/Testimonial";
import { About } from "./sections/about/about";
import ContactForm from "./sections/contact/Contact";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="">
      <title>Saad Bin Khalid - Portfolio</title>
      <Hero />
      <StatsNAcheivments />
      <About   />

      <Services />
      <Portfolio    />
      <Skills   />
      <AchievementsSlider    />
      <EducationExperience   />
      <Testimonials    />
      <ContactForm   />
<Link to="hero" smooth={true} >
      <FaChevronCircleUp className="fixed right-10 bottom-10 animate-pulse text-purple-600  hover:scale-110 transition-all duration-150 ease-in-out hover:cursor-pointer drop-shadow-[0px_0px_10px_purple]  text-4xl" />
</Link>
    </div>
  );
}

export default App;
