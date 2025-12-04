import img from "../../assets/images/chatwat.PNG";
import { Helmet } from "react-helmet";

export const ChatWat = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">

      {/* SEO Meta Tags */}
      <Helmet>
        <title>ChatWat - Real-Time Chat SaaS App | Saad Bin Khalid</title>
        <meta
          name="description"
          content="ChatWat is a real-time chat SaaS app with OTP login/signup, role-based dashboards, and admin panel support. Built with React, Tailwind CSS, and Socket.IO for seamless one-on-one and group messaging."
        />
        <meta
          name="keywords"
          content="ChatWat, real-time chat app, SaaS, React, Socket.IO, Tailwind CSS, admin panel, OTP login, group chat, one-on-one chat"
        />
        <meta property="og:title" content="ChatWat - Real-Time Chat SaaS App" />
        <meta
          property="og:description"
          content="ChatWat lets users send and receive messages instantly with a clean UI, OTP-based login/signup, role-based dashboards, and admin panel support."
        />
        <meta property="og:image" content={img} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="flex flex-col lg:flex-row gap-8 items-center">

        {/* Left Section - Image */}
        <section className="lg:w-1/2">
          <img src={img} alt="ChatWat App Screenshot" className="rounded-lg shadow-lg w-full" />
        </section>

        {/* Right Section - Project Details */}
        <section className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-extrabold text-purple-600">ChatWat</h1>
          <p className="text-gray-400 text-lg">
            ChatWat is a real-time chat SaaS application allowing users to send and receive messages instantly. It features OTP-based login/signup, role-based dashboards, admin panel support, and smooth one-on-one or group messaging. Built with React, Tailwind CSS, and Socket.IO for reliable performance.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-2">Tech Stack</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>React.js (v18+)</li>
              <li>Tailwind CSS</li>
              <li>Socket.IO Client</li>
              <li>Axios</li>
              <li>Framer Motion</li>
              <li>bars-react-table</li>
              <li>Context API</li>
              <li>Vite</li>
            </ul>
          </div>

          <a
            href="https://github.com/Saadbkhalid666/ChatWat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md font-semibold transition"
          >
            View on GitHub
          </a>
        </section>

      </div>
    </main>
  );
};
