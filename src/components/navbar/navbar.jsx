import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export const NavBar = () => {
  const navContainerRef = useRef();
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: 0,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);
  return (
    <div ref={navContainerRef} className="container mx-auto   ">
      <div className="desktop-nav-container sticky p-6 mt-4  rounded-4xl bg-[#120F1F]    ">
        <nav>
          <ul className="flex flex-row text-white font-bold   text-lg justify-center gap-36">
            <li className="hover:scale-110 hover:text-purple-300 transition-all duration-300 ease-in-out hover:cursor-pointer">
              Home
            </li>
            <li className="hover:scale-110 hover:text-purple-300 hover:cursor-pointer transition-all duration-300 ease-in-out">
              About
            </li>
            <li className="hover:scale-110 hover:text-purple-300 hover:cursor-pointer transition-all duration-300 ease-in-out">
              Services
            </li>
            <li className="text-xl text-purple-400 ">Saad Bin Khalid</li>
            <li className="hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-300 hover:cursor-pointer">
              Resume
            </li>
            <li className="hover:scale-110 hover:text-purple-300 hover:cursor-pointer transition-all duration-300 ease-in-out">
              Portfolio
            </li>
            <li className="hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-300 hover:cursor-pointer">
              Contact Us
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
