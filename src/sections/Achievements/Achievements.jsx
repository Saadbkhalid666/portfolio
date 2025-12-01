import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    <section id="achievements" className="w-full py-16 px-4 md:px-10 lg:px-20 text-white">
      <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-center bg-clip-text text-transparent bg-linear-to-r from-purple-600 via-purple-300 to-white mb-10">
      My Achievements
      </h1>

      <Swiper
        modules={[ Pagination, Autoplay]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        
      >
        {achievements.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#120F1F] border mb-10 border-purple-400/20 shadow-lg shadow-purple-600/20 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 h-full">
              <h2 className="text-2xl font-bold text-purple-100">{item.title}</h2>
              <img className="rounded-4xl p-4 w-full h-56 object-cover" src={item.img} alt={item.title} />
              <p className="mt-3 text-gray-300">{item.desc}</p>
              <p className="mt-4 text-sm text-purple-400">({item.year})</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
