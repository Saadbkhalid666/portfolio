import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { MdMenu } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // Dynamic glassmorphism transition on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial load presentation animation
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "bg-[#120F1F]/80 backdrop-blur-2xl border-b border-purple-500/20 shadow-[0_10px_30px_rgba(168,85,247,0.15)] py-3 md:py-4" 
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link 
          to="hero" 
          smooth={true} 
          offset={-80}
          className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-300 to-white cursor-pointer hover:scale-105 transition-transform"
        >
          Saad Bin Khalid
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 font-semibold text-gray-300">
          <NavLink to="/" onClick={() => window.scrollTo(0,0)} className="hover:text-purple-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            Home
          </NavLink>
          <Link to="about" smooth={true} offset={-80} className="hover:text-purple-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            About
          </Link>
          <Link to="resume" smooth={true} offset={-80} className="hover:text-purple-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            Resume
          </Link>
          <Link to="portfolio" smooth={true} offset={-80} className="hover:text-purple-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            Portfolio
          </Link>
          
          {/* Enhanced CTA Button */}
          <Link 
            to="contact" 
            smooth={true} 
            offset={-80} 
            className="px-6 py-2.5 bg-purple-600/10 hover:bg-purple-500/20 text-purple-300 hover:text-white border border-purple-500/30 hover:border-purple-400 rounded-full font-bold tracking-wide shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer ml-4"
          >
            Contact Me
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON & LOGIC */}
        <button 
          className="lg:hidden text-3xl text-purple-400 hover:text-purple-300 transition-colors focus:outline-hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <MdMenu />}
        </button>

      </div>

      {/* MOBILE DROPDOWN SCREEN */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100 border-b border-purple-500/20 shadow-[0_20px_40px_rgba(0,0,0,0.6)]" : "max-h-0 opacity-0"
        } bg-[#120F1F]/95 backdrop-blur-3xl`}
      >
        <nav className="flex flex-col items-center justify-center py-8 gap-6 text-gray-300 font-bold text-lg">
          <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-300 transition-colors tracking-wide" >Home</NavLink>
          <Link to="about" smooth={true} offset={-80} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-300 transition-colors tracking-wide cursor-pointer">About</Link>
          <Link to="resume" smooth={true} offset={-80} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-300 transition-colors tracking-wide cursor-pointer">Resume</Link>
          <Link to="portfolio" smooth={true} offset={-80} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-300 transition-colors tracking-wide cursor-pointer">Portfolio</Link>
          
          <Link to="contact" smooth={true} offset={-80} onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-10 py-3 bg-linear-to-r from-purple-600 to-purple-400 rounded-full text-white font-extrabold shadow-[0_0_20px_rgba(168,85,247,0.4)] tracking-wider">
            Contact Me
          </Link>
        </nav>
      </div>

    </header>
  );
};
