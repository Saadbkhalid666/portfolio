import Image from "next/image";
// Replace this with your actual image path
import nexChatLogo from "../assets/nexchat.png"; 

export const FeaturedProjects = () => {
  // Schema.org Structured Data for SEO (Projects / Software Application)
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "NexChat Platform",
    "applicationCategory": "CommunicationApplication",
    "operatingSystem": "Mobile",
    "description": "NexChat is a high-performance, real-time messaging application built for seamless communication featuring a modern glassmorphic UI, secure authentication, and a powerful administrative dashboard.",
    "author": {
      "@type": "Person",
      "name": "Saad Bin Khalid"
    }
  };

  return (
    <section 
      id="featured-launches"
      aria-labelledby="featured-heading" 
      className="mt-20 lg:mt-32 px-6 py-12 bg-black text-[#f5f5f7]"
    >
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <div className="container mx-auto max-w-7xl">
        {/* Subtitle / Section Index */}
        <p className="text-zinc-500 text-sm font-medium tracking-wide mb-1 font-instrument">
          03 - Production Logs
        </p>

        {/* Section Heading */}
        <h2 
          id="featured-heading"
          className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-white mb-12 italic"
        >
          Featured Launches
        </h2>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Image Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full aspect-square max-w-md rounded-2xl bg-[#0a0a0a] border border-zinc-900 p-8 flex items-center justify-center transition-all duration-300 hover:border-zinc-700">
              <div className="relative w-3/4 h-3/4 flex items-center justify-center">
                <Image
                  src={nexChatLogo}
                  alt="NexChat Platform - Mobile Messaging Application"
                  className="object-contain"
                  priority
                  quality={90}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Project Details */}
          <article className="lg:col-span-7 flex flex-col justify-center text-left">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6 font-ancizar">
              NexChat Platform
            </h3>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              NexChat is a high-performance, real-time messaging application built for
              seamless communication. Featuring a modern glassmorphic UI, secure
              authentication, and a powerful administrative dashboard, NexChat delivers a
              premium chat experience on mobile.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
};