import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
export const Footer = () => {

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">

        {/* Logo / Name */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500">
            Saad Bin Khalid
          </h1>
          <p className="text-gray-400">Full Stack Developer | Freelancer</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-lg text-purple-400">Navigate</h2>
          <ul className="space-y-1">
            <li><NavLink to="/"  className="hover:text-purple-500 transition">Home</NavLink></li>
            <li><Link to="portfolio" smooth={true} className="hover:text-purple-500 transition">Portfolio</Link></li>
            <li><Link to="contact" smooth={true} className="hover:text-purple-500 transition">Contact</Link></li>
            <li><Link to="about" smooth={true} className="hover:text-purple-500 transition">About</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-lg text-purple-400">Contact</h2>
          <p>📞 <a href="tel:+9203004196455" className="hover:text-purple-500 transition">+92 0300-4196455</a></p>
          <p>✉️ <a href="mailto:saadbkhalid666@gmail.com" className="hover:text-purple-500 transition">saadbkhalid666@gmail.com</a></p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-lg text-purple-400">Follow Me</h2>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/saadbkhalid666" target="_blank" rel="noreferrer" className="hover:text-purple-500 transition"><FaGithub size={24} /></a>
            <a href="https://linkedin.com/in/saadbinkhalid666" target="_blank" rel="noreferrer" className="hover:text-purple-500 transition"><FaLinkedin size={24} /></a>
            <a href="https://instagram.com/sagit_saad" target="_blank" rel="noreferrer" className="hover:text-purple-500 transition"><FaInstagram size={24} /></a>
            <a href="https://x.com/saadrajpoot666" target="_blank" rel="noreferrer" className="hover:text-purple-500 transition"><FaTwitter size={24} /></a>
          </div>
        </div>

      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Saad Bin Khalid. All rights reserved.
      </div>
    </footer>
  );
};


