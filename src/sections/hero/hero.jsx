import myimg from "../../assets/images/myimg.png"
import { TypingHero } from "../../components/heading/heading";
import "./hero.css"
export const Hero = () => {
  return (
    <section className="relative text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#a3a3ff]">
            I am Saad
          </h2>
          <TypingHero   />
          <p className="text-gray-300 max-w-xl text-lg">
            Passionate about building web apps with modern technologies. I focus on creating interactive, responsive, and scalable full-stack solutions.
          </p>

          {/* Icons / Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="bg-[#1e1e2f] hover:bg-[#3b3b5c] transition-all duration-300 p-3 rounded-full"
            >
              {/* Example: GitHub Icon */}
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 ... " />
              </svg>
            </a>
            <a
              href="#"
              className="bg-[#1e1e2f] hover:bg-[#3b3b5c] transition-all duration-300 p-3 rounded-full"
            >
              {/* Example: LinkedIn Icon */}
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 ... " />
              </svg>
            </a>
            {/* Add more icons as needed */}
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-64 h-64 rings hover:scale-110 transition-all duration-150 ease-in-out hover:cursor-pointer sm:w-80 sm:h-80 rings  rounded-full ring-1 overflow-hidden  object-cover flex justify-center items-center shadow-lg">
            {/* Placeholder for your avatar or hero image */}
            <img
              src={myimg}
              alt="Saad Avatar"
              className="w-56 h-66 sm:w-72 sm:h-80 rounded-2xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
