import myimg from "../../assets/images/myimg.png"
import { TypingHero } from "../../components/heading/heading";
import "./hero.css"
import { FaGithub, FaInstagram, FaLinkedinIn, FaSnapchat, FaTiktok, FaTwitter } from "react-icons/fa";
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

<div className="flex gap-4 mt-4 text-3xl">

  <div className="flex gap-5 mt-4 text-3xl">

  {/* GitHub */}
  <a
    href="#"
    className="text-white drop-shadow-[0_0_8px_white] hover:drop-shadow-[0_0_15px_white] hover:scale-110 transition duration-300"
  >
    <FaGithub />
  </a>

  {/* LinkedIn */}
  <a
    href="#"
    className="text-[#0A66C2] drop-shadow-[0_0_8px_#0A66C2] hover:drop-shadow-[0_0_15px_#0A66C2] hover:scale-110 transition duration-300"
  >
    <FaLinkedinIn />
  </a>

  {/* Instagram */}
  <a
    href="#"
    className="text-pink-500 drop-shadow-[0_0_8px_#ec4899] hover:drop-shadow-[0_0_15px_#ec4899] hover:scale-110 transition duration-300"
  >
    <FaInstagram />
  </a>

  {/* Twitter */}
  <a
    href="#"
    className="text-[#1DA1F2] drop-shadow-[0_0_8px_#1DA1F2] hover:drop-shadow-[0_0_15px_#1DA1F2] hover:scale-110 transition duration-300"
  >
    <FaTwitter />
  </a>

  {/* TikTok */}
  <a
    href="#"
    className="text-white drop-shadow-[0_0_8px_#ff0050] hover:drop-shadow-[0_0_15px_#ff0050] hover:scale-110 transition duration-300"
  >
    <FaTiktok />
  </a>

  {/* Snapchat */}
  <a
    href="#"
    className="text-[#FFFC00] drop-shadow-[0_0_8px_#FFFC00] hover:drop-shadow-[0_0_15px_#FFFC00] hover:scale-110 transition duration-300"
  >
    <FaSnapchat />
  </a>

</div>

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
