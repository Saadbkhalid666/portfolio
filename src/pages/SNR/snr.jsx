import img from "../../assets/images/snr.PNG";
import { Helmet } from "react-helmet";

export const SNR = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">

      {/* SEO / Metadata */}
      <Helmet>
        <title>SNR — Responsive Frontend Landing Page | Saad Bin Khalid</title>
        <meta
          name="description"
          content="SNR is a clean and responsive frontend landing page built with React and TailwindCSS. Perfect for showcasing enterprise services, UI components, and modern design."
        />
        <meta
          name="keywords"
          content="SNR, React landing page, TailwindCSS, frontend, responsive design, UI showcase, enterprise landing page"
        />
        <meta property="og:title" content="SNR — Responsive Frontend Landing Page" />
        <meta
          property="og:description"
          content="A modern frontend landing page built with React and TailwindCSS to showcase services, features, and provide a smooth user experience."
        />
        <meta property="og:image" content={img} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Project Header */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-purple-600">SNR</h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          SNR is a fully responsive frontend landing page built using React and TailwindCSS, designed to showcase services, highlight features, and deliver a modern user experience.
        </p>
        <a
          href="https://github.com/Saadbkhalid666/SNR"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 font-semibold"
        >
          View on GitHub
        </a>
      </section>

      {/* Screenshot / Hero Image */}
      <section className="flex justify-center">
        <img
          src={img}
          alt="SNR frontend landing page screenshot"
          className="rounded-lg shadow-lg max-w-full"
        />
      </section>

      {/* Key Features */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-purple-500">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Fully responsive design for desktop, tablet, and mobile</li>
          <li>Modern UI using TailwindCSS components</li>
          <li>Clean sections to showcase services and offerings</li>
          <li>Smooth hover effects and subtle animations</li>
          <li>SEO-friendly semantic HTML structure</li>
          <li>Easy customization and extension for any frontend project</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-purple-500">Tech Stack</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Frontend: React.js</li>
          <li>Styling: TailwindCSS</li>
          <li>Animations: CSS transitions / Framer Motion</li>
          <li>Version Control: Git & GitHub</li>
        </ul>
      </section>

    </main>
  );
};
