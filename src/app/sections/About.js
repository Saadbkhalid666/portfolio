import Image from "next/image";
import myimg from "../assets/myimg.jpg";

export const About = () => {
  return (
    <section className="mt-20 lg:mt-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
          {/* Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="font-lily text-4xl text-[#f5f5f7] sm:text-5xl lg:text-6xl leading-tight">
              Transforming <br /> Ideas Daily;
            </h1>

            <p className="mt-8 text-base leading-8 text-[#6e6e73] sm:text-lg">
              I'm a Full Stack Engineer building modern, scalable,
              high-performance digital products—from responsive web
              applications and mobile apps to AI-powered conversational
              systems. My core stack is built around Node.js, Python (Flask &
              Django), React, Next.js, and AI integrations.
              <br />
              <br />
              Good software isn't just clean code—it solves real business
              problems, feels effortless to use, and remains reliable as it
              scales. That's the standard I build to: performance and
              thoughtful design in every project.
              <br />
              <br />
              That's the work I do—and the value I bring.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={myimg}
              alt="Developer"
              className="h-auto w-64 sm:w-80 lg:w-80 rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};