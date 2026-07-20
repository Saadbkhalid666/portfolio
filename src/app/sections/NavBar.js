import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto h-20 px-6 md:px-8 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-wide text-[#f5f5f7] cursor-pointer font-ancizar relative z-50">
          Saad Bin Khalid
        </h1>

        <ul className="hidden md:flex items-center gap-12 text-sm font-medium text-[#6e6e73]">
          <li className="cursor-pointer hover:text-white transition-colors duration-300">
            .ABOUT<span>( )</span>
          </li>
          <li className="cursor-pointer hover:text-white transition-colors duration-300">
            .WORK<span>( )</span>
          </li>
          <li className="cursor-pointer hover:text-white transition-colors duration-300">
            .CONNECT<span>( )</span>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-2 text-zinc-300">
          <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm">Available for work</span>
        </div>



        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50 space-y-1.5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#f5f5f7] rounded-sm transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#f5f5f7] rounded-sm transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#f5f5f7] rounded-sm transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-[#0a0a0a] border-l border-zinc-800 z-40 flex flex-col justify-center px-8 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-8 text-lg font-medium text-[#6e6e73]">
          <li
            className="cursor-pointer hover:text-white transition-colors duration-300"
            onClick={toggleMenu}
          >
            .ABOUT<span>( )</span>
          </li>
          <li
            className="cursor-pointer hover:text-white transition-colors duration-300"
            onClick={toggleMenu}
          >
            .WORK<span>( )</span>
          </li>
          <li
            className="cursor-pointer hover:text-white transition-colors duration-300"
            onClick={toggleMenu}
          >
            .CONNECT<span>( )</span>
          </li>
        </ul>

        <div className="flex items-center gap-2 text-zinc-300 mt-12 pt-8 border-t border-zinc-800">
          <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm">Available for work</span>
        </div>
      </div>
    </header>
  );
};