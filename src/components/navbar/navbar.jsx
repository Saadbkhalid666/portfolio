export const NavBar = () => {
  return (
    <div className="container mx-auto   ">
      <div className="desktop-nav-container sticky p-6 mt-4  rounded-4xl bg-[#120F1F]    ">
        <nav>
          <ul className="flex flex-row text-white font-bold text-lg justify-center gap-36">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li className="text-xl text-purple-400 ">Saad Bin Khalid</li>
            <li>Resume</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
