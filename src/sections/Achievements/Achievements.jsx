import React from "react";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaTrophy, FaCalendarAlt } from "react-icons/fa";
import { certi1, certi2, certi3, certi4, certi5, certi6, certi7, certi8, certi9, certi11, } from "../../assets/images/certificates";

export const AchievementsSlider = () => {
  const achievements = [
    { title: "Freelance", desc: "Delivered high-quality client projects with excellence.", year: "2023", img: certi11 },
    { title: "Defence Day Speech", desc: "Awarded for powerful and patriotic speech.", year: "2023", img: certi9 },
    { title: "Quiz Competition", desc: "Excelled in general knowledge and analytical quiz.", year: "2023", img: certi8 },
    { title: "Science Exhibition", desc: "Recognized for innovative science project.", year: "2022", img: certi7 },
    { title: "Cooking Competition", desc: "Awarded for creativity and team participation.", year: "2023", img: certi6 },
    { title: "Independence Day Speech", desc: "Delivered one of the top speeches of the event.", year: "2023", img: certi5 },
    { title: "Student of the Year", desc: "Award for academic excellence and discipline.", year: "2023", img: certi4 },
    { title: "Sports Gala", desc: "Participated and won multiple activities.", year: "2019", img: certi3 },
    { title: "Essay Writing Competition", desc: "Recognized for outstanding writing skills.", year: "2023", img: certi2 },
    { title: "Category Examination", desc: "Achieved first rank in academics.", year: "2024", img: certi1 },
  ];

  return (
    <>
      <Helmet>
        <meta name="description" content="Explore Saad Bin Khalid's personal and professional achievements, including freelance excellence, speech awards, science exhibitions, and academic accolades." />
        <meta name="keywords" content="Saad Bin Khalid, achievements, awards, freelance developer, student of the year, certifications, web development achievements" />
        <meta property="og:title" content="Achievements | Saad Bin Khalid Portfolio" />
        <meta property="og:description" content="Discover the milestones and achievements of Saad Bin Khalid. From coding to public speaking." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <section id="achievements" className="relative w-full py-24 px-4 md:px-10 lg:px-20 text-white overflow-hidden">
        {/* Background glowing effects for the section */}
        <div className="absolute left-0 top-[10%] w-120 h-120 bg-purple-900/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute right-0 bottom-[10%] w-120 h-120 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="text-center mb-16 md:mb-24 relative">
          <div className="flex justify-center mb-6">
             <div className="p-3.5 bg-purple-600/20 text-purple-400 rounded-2xl border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.3)] inline-flex transform hover:scale-110 hover:shadow-purple-500/50 transition-all duration-300">
                <FaTrophy size={36} />
             </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-300 to-white inline-block pb-2">
            My Achievements
          </h1>
          <div className="h-1 w-24 bg-linear-to-r from-purple-600 to-purple-300 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            pagination={{ clickable: true, dynamicBullets: true, el: '.custom-pagination' }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="achievements-swiper pb-2"
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {achievements.map((item, index) => (
              <SwiperSlide key={index} className="h-auto pb-10">
                <div className="group relative bg-[#120F1F]/60 backdrop-blur-xl border border-purple-500/20 shadow-lg shadow-purple-900/20 rounded-2xl p-6 md:p-8 text-center hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(168,85,247,0.2)] hover:border-purple-400/50 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle inner glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-400/20 transition-all duration-500 z-0"></div>

                  <div className="relative z-10 w-full mb-6 mt-2 overflow-hidden rounded-xl">
                    <img 
                      className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700 rounded-xl border border-purple-500/10 shadow-sm bg-[#0b0914]" 
                      src={item.img} 
                      alt={`Certificate or award for ${item.title}`} 
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="relative z-10 flex flex-col flex-1 items-center">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-100 group-hover:text-purple-300 transition-colors duration-300">
                      {item.title}
                    </h2>
                    
                    <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-1">
                      {item.desc}
                    </p>
                    
                    <div className="mt-6 flex justify-center w-full">
                       <span className="inline-flex items-center justify-center gap-1.5 text-purple-300 bg-purple-900/40 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide border border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                         <FaCalendarAlt size={12} /> {item.year}
                       </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination Container */}
          <div className="custom-pagination flex justify-center mt-6 gap-2"></div>
        </div>
      </section>

      {/* Global CSS overrides for the Swiper Pagination Customization */}
      <style dangerouslySetInnerHTML={{ __html: `
        .achievements-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #a855f7 !important;
          opacity: 0.4;
          transition: all 0.3s ease;
        }
        .achievements-swiper .swiper-pagination-bullet-active {
          width: 30px;
          border-radius: 5px;
          background: linear-gradient(to right, #9333ea, #d8b4fe) !important;
          opacity: 1;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.6);
        }
        .custom-pagination {
          position: relative !important;
          z-index: 20;
        }
      `}} />
    </>
  );
};
