import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { MdMenu } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { Link } from "react-scroll";
export const NavBar = () => {
  const [isShow, setIsShow] = useState(true);
  const desktopNavRef = useRef();
  const mobileNavRef = useRef();
  useEffect(() => {
    gsap.from(desktopNavRef.current, {
      y: -100,
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(mobileNavRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      {/* desktop navbar  */}
      <div ref={desktopNavRef} className=" hidden lg:block">
        <div className="w-full flex justify-center">
          <div className="desktop-nav-container pt-6 pb-6 pl-10 pr-10 mt-4 rounded-4xl bg-[#120F1F] w-max mx-auto">
            <nav>
              <ul className="flex flex-row text-white font-bold lg:text-lg text-md justify-center  gap-16  xl:gap-26 2xl:gap-36">
                <Link
                  to="hero"
                  smooth={true}
                  className="hover:scale-110  hover:text-purple-300 transition-all duration-300 ease-in-out hover:cursor-pointer"
                >
                  Home
                </Link>
                <Link className="hover:scale-110 hover:text-purple-300 hover:cursor-pointer transition-all duration-300 ease-in-out">
                  About
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  className="hover:scale-110 hover:text-purple-300 hover:cursor-pointer transition-all duration-300 ease-in-out"
                >
                  Services
                </Link>
                <Link className="lg:text-xl text-lg text-purple-400 hover:scale-110 transition-all duration-150 ease-in-out ">
                  Saad Bin Khalid
                </Link>
                <Link to="resume" smooth={true} className="hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-300 hover:cursor-pointer">
                  Resume
                </Link>
                <Link
                  to="portfolio"
                  smooth={true}
                  className="hover:scale-110 hover:text-purple-300 hover:cursor-pointer transition-all duration-300 ease-in-out"
                >
                  Portfolio
                </Link>
                <Link className="hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-300 hover:cursor-pointer">
                  Contact Us
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* short screens navbar  */}
      <div ref={mobileNavRef} className="container mx-auto  block lg:hidden ">
        <div className="desktop-nav-container  p-4 mt-4 rounded-4xl bg-[#120F1F] ">
          <div className="text-white text-2xl font-bold flex flex-row justify-between">
            <span className="text-purple-400">Saad Bin Khalid</span>
            <span onClick={() => setIsShow((show) => !show)}>
              {isShow ? (
                <span>
                  <MdMenu />
                </span>
              ) : (
                <span className="font-extrabold">
                  <FiX />
                </span>
              )}
            </span>
          </div>
        </div>

        {/* menu  */}
        <div
          className={`mobile-nav-container ${
            isShow ? "hidden" : "block"
          } sticky p-6 mt-1 rounded-4xl bg-[#120F1F] `}
        >
          <nav>
            <ul className="flex flex-col text-white font-bold text-md justify-center gap-4">
              <Link className="hover:scale-110  hover:text-purple-300 transition-all duration-300 ease-in-out hover:cursor-pointer">
                Home
              </Link>
              <Link
                to="services"
                smooth={true}
                className="hover:scale-110 active:text-purple-300 hover:cursor-pointer transition-all duration-300 ease-in-out"
              >
                About
              </Link>
              <Link className="hover:scale-110 hover:text-purple-300 hover:cursor-pointer transition-all duration-300 ease-in-out">
                Services
              </Link>
              <Link to="resume" smooth={true} className="hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-300 hover:cursor-pointer">
                Resume
              </Link>
              <Link
                to="portfolio"
                smooth={true}
                className="hover:scale-110 hover:text-purple-300 hover:cursor-pointer transition-all duration-300 ease-in-out"
              >
                Portfolio
              </Link>
              <Link className="hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-300 hover:cursor-pointer">
                Contact Us
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
