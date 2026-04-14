import myimg from "../../assets/images/myimg.png"
import { TypingHero } from "../../components/heading/heading";
import "./hero.css"
import { FaDev, FaGithub, FaInstagram, FaLinkedinIn, FaSnapchat, FaTiktok, FaTwitter } from "react-icons/fa";
import gsap from "gsap"
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";

export const Hero = () => {

  const nameRef = useRef()
  const passionRef = useRef()
  const paraRef = useRef()
  
  useEffect(()=>{
      gsap.from(nameRef.current,{
          x:-200,
          opacity:0,
          duration: 1.2,  
          ease:"power3.out"
      })
      gsap.from(passionRef.current,{
          y:-200,
          opacity:0,
          duration:1.3,
          ease:"power3.out"
      })
      
      gsap.from(paraRef.current,{
          opacity:0,
          duration:1.3,
          ease:"power3.out"
      })
      
  })

  return (
    <section className="relative text-white min-h-screen flex items-center" id="hero">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        

        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-6">
        
          
          <h2 ref={nameRef} className="text-3xl sm:text-4xl font-bold font-serif text-[#a3a3ff]">
            I am Saad
          </h2>

          <span ref={passionRef}>
            <TypingHero />
          </span>

          <p className="text-gray-300 max-w-xl text-lg" ref={paraRef}>
            Passionate about building web apps with modern technologies. I focus on creating interactive, responsive, and scalable full-stack solutions.
          </p>

          {/* 🔥 Hire Me Button */}
          <div className="mt-4">
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-50}
              className="px-6 py-3 bg-[#a3a3ff] text-black font-semibold rounded-md shadow-[0_0_15px_#a3a3ff] hover:shadow-[0_0_25px_#a3a3ff] hover:scale-105 transition-all cursor-pointer"
            >
              Hire Me
            </Link>
          </div>

          {/* Icons / Social Links */}
          <div className="flex gap-4 mt-6 text-3xl">
            <div className="flex gap-5 text-3xl">

              <a href="https://github.com/Saadbkhalid666" className="text-white drop-shadow-[0_0_8px_white] hover:drop-shadow-[0_0_15px_white] hover:scale-110 transition duration-300">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/saadbinkhalid666/" className="text-[#0A66C2] drop-shadow-[0_0_8px_#0A66C2] hover:drop-shadow-[0_0_15px_#0A66C2] hover:scale-110 transition duration-300">
                <FaLinkedinIn />
              </a>

              <a href="https://www.instagram.com/saadbinkhalidd" className="text-pink-500 drop-shadow-[0_0_8px_#ec4899] hover:drop-shadow-[0_0_15px_#ec4899] hover:scale-110 transition duration-300">
                <FaInstagram />
              </a>

              <a href="https://x.com/saadrajpoot666" className="text-[#1DA1F2] drop-shadow-[0_0_8px_#1DA1F2] hover:drop-shadow-[0_0_15px_#1DA1F2] hover:scale-110 transition duration-300">
                <FaTwitter />
              </a>

              <a href="https://dev.to/saadbinkhalid" target="_blank" rel="noreferrer" className="text-white drop-shadow-[0_0_8px_#ffffff] hover:drop-shadow-[0_0_15px_#ffffff] hover:scale-110 transition duration-300">
                <FaDev />
              </a>

              <a href="https://www.snapchat.com/@saadrajpoot666" className="text-[#FFFC00] drop-shadow-[0_0_8px_#FFFC00] hover:drop-shadow-[0_0_15px_#FFFC00] hover:scale-110 transition duration-300">
                <FaSnapchat />
              </a>

            </div>
          </div>

        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-64 h-64 rings hover:scale-110 transition-all duration-150 ease-in-out hover:cursor-pointer sm:w-80 sm:h-80 rings rounded-full ring-1 overflow-hidden object-cover flex justify-center items-center shadow-lg">
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
