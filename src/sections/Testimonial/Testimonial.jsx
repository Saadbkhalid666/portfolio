import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Abdul Raheem",
      role: "Client",
      message:
        "Working with Saad was like working with a trusted expert. His web development skills and attention to detail make him one of the best developers I've collaborated with.",
    },
    {
      id: 2,
      name: "M Raza Faheem",
      role: "Client",
      message:
        "Saad transformed my ideas into a fully functional and professional website. His understanding of UI/UX and frontend development is truly impressive.",
    },
    {
      id: 3,
      name: "Hafiz Hammad Rafiq",
      role: "Co-Developer",
      message:
        "Saad writes clean code, communicates clearly, and delivers exceptional work. His problem-solving skills and creativity make him stand out in every project.",
    },
    {
      id: 4,
      name: "Nabeel Zahid",
      role: "Client",
      message:
        "The way Saad handled my project showed his professionalism and strong grip on modern web technologies. Highly recommended for React, Next.js, and modern UI development.",
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: testimonials.map((t, index) => ({
      "@type": "Review",
      position: index + 1,
      author: t.name,
      reviewBody: t.message,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "5",
      },
    })),
  };

  return (
    <section
      id="testimonials"
      className="py-20 w-full  text-white flex flex-col items-center"
      aria-label="Client testimonials for Saad Bin Khalid"
    >
      {/* JSON-LD Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Heading */}
      <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-white font-serif text-center">
        Client Testimonials & Reviews
      </h2>

      <p className="mt-4 text-gray-300 text-lg text-center max-w-2xl">
        Real feedback from clients and collaborators who trusted my work in
        web development, UI/UX, and modern frontend engineering.
      </p>

      {/* Swiper Slider */}
      <div className="w-full max-w-2xl mt-12 px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <article
                className="bg-[#1a1a1a] text-center border border-[#333] p-8 rounded-3xl shadow-lg"
                role="article"
              >
                <h3 className="text-xl font-bold mt-4">{t.name}</h3>
                <p className="text-gray-300 italic text-lg leading-relaxed">
                  "{t.message}"
                </p>

                <span className="text-sm text-gray-400">{t.role}</span>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
