import img from "../../assets/images/autologai.jpg";
import { Helmet } from "react-helmet";

export const AutoLogAI = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">

      {/* SEO Meta Tags */}
      <Helmet>
        <title>AutoLogAI - AI Vehicle Service & Fuel Tracking App | Saad Bin Khalid</title>
        <meta
          name="description"
          content="AutoLogAI is an AI-powered vehicle service and fuel tracking app with OCR receipt scanning, predictive maintenance, and smart reminders. Built with Angular, Flask, and Google Gemini API."
        />
        <meta
          name="keywords"
          content="AutoLogAI, vehicle service app, fuel tracking app, Angular, Flask, OCR, Tesseract.js, AI assistant, predictive maintenance, Google Gemini API"
        />
        <meta property="og:title" content="AutoLogAI - AI Vehicle Service & Fuel Tracking App" />
        <meta
          property="og:description"
          content="AI-powered vehicle service and fuel tracking app with smart reminders, OCR receipt scanning, and predictive maintenance."
        />
        <meta property="og:image" content={img} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left Section - Image */}
        <section className="lg:w-1/2 flex justify-center items-center">
          <img src={img} alt="AutoLogAI App Screenshot" className="rounded-lg shadow-lg" />
        </section>

        {/* Right Section - Project Details */}
        <section className="lg:w-1/2 space-y-6">

          <h1 className="text-4xl font-extrabold text-purple-600">AutoLogAI</h1>

          <p className="text-gray-400 text-lg">
            AutoLogAI is an AI-powered vehicle service and fuel tracking application featuring OCR receipt scanning, smart reminders, and predictive maintenance suggestions for seamless vehicle management.
          </p>

          <h2 className="text-2xl font-bold text-white/90">Core Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Secure Signup/Login with JWT</li>
            <li>AI Assistant (Nex) powered by Google Gemini API</li>
            <li>OCR Receipt Scanner using Tesseract.js</li>
            <li>Service Reminders for upcoming maintenance</li>
            <li>Fuel Log Tracker</li>
            <li>Admin Dashboard with Flask-Admin</li>
            <li>Email system with Flask-Mail</li>
            <li>Modern Angular + Tailwind UI with Glassmorphism design</li>
          </ul>

          <h2 className="text-2xl font-bold text-white/90">Tech Stack</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Frontend: Angular, TypeScript, TailwindCSS</li>
            <li>Backend: Flask, Flask-JWT, Flask-Mail, Flask-Admin</li>
            <li>AI & NLP: Google Gemini API</li>
            <li>Database: SQLite</li>
            <li>OCR: Tesseract.js</li>
            <li>Version Control: Git & GitHub</li>
          </ul>

          <a
            href="https://github.com/Saadbkhalid666/AutoLog.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition"
          >
            View on GitHub
          </a>
        </section>
      </div>
    </main>
  );
};
