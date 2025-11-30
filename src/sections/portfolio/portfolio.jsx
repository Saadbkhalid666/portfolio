import { Card } from "../../components/cards/cards";

export const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="w-full py-16 px-4 md:px-10 lg:px-20"
    >
      <h1 className="
        bg-clip-text text-transparent
        bg-linear-to-r from-purple-800 via-purple-300 to-white
        text-4xl sm:text-5xl md:text-6xl 
        text-center font-extrabold font-serif overflow-hidden
      ">
        My Quality Work
      </h1>

      <div
        className="
        mt-12 
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
         
        gap-8 
        place-items-center
      "
      >
        <Card
          title="NeuroVisionX"
          description="AI-powered computer vision to provide real-time face and hand detection."
          skills={["React","Tailwind","wasm","mediapipe"]}
          link="/neurovisionx"
        />

        <Card
          title="ChatWat"
          description="Real time chat solution that lets users send and recieve messages instantly with a clean UI, user auth ..."
          skills={["SocketIO","NodeMailer","MERN"]}
          link="/chatwat"
        />

        <Card
          title="AutoLogAI"
          description="AI-powered vehicle service and fuel tracking app with OCR, smart reminders, and predictive maintainance suggestions."
          skills={["Angular","Flask", "Python", "Gemini"]}
          link="/autologai"
        />
 
        <Card
          title="E-Commerce Website"
          description="A full e-commerce store built using MERN + Tailwind."
          skills={["React", "Tailwind", "NodeJs", "ExpressJs", "Nodemailer"]}
          link="/ks-traders"
        />

        <Card
          title="Landing Page "
          description="Built with React + Tailwind. Clean, elegant, and reusable."
          skills={[ "JavaScript", "React", "Tailwind"]}
          link="/mrs-enterprise"
        />

        <Card
          title="Landing Page"
          description="Built with React + Tailwind. Clean, elegant, and reusable."
          skills={[  "JavaScript", "React", "Tailwind"]}
          link="/snr"
        />

        <Card
          title="Calculator App"
          description="It is your all in one calculation companion, built to automate finance, mathematics, health and many more."
          skills={[  "JavaScript", "React", "Tailwind","API"]}
          link="/calcmate"
        />

      </div>
    </section>
  );
};
