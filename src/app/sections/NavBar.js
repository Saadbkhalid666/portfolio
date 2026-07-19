export const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-wide text-[#f5f5f7] cursor-pointer font-ancizar">
          Saad Bin Khalid
        </h1>

        {/* Navigation */}
        <ul className="flex items-center gap-12 text-sm font-medium text-[#6e6e73]">
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

        {/* Status */}
        <div className="flex items-center gap-2 text-zinc-300">
          <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm ">Available for work</span>
        </div>
      </nav>
    </header>
  );
};