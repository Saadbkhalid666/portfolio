import img from "../../assets/images/mrs.PNG";
import { Helmet } from "react-helmet";

export const MRSEnterprises = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">

      {/* SEO / Metadata */}
      <Helmet>
        <title>M.R.S‑Enterprise — Responsive Frontend Landing Page | Saad Bin Khalid</title>
        <meta
          name="description"
          content="M.R.S‑Enterprise is a responsive React + TailwindCSS landing page designed to showcase enterprise services and products with modern UI components and smooth animations."
        />
        <meta
          name="keywords"
          content="M.R.S Enterprise, React landing page, TailwindCSS, frontend, responsive design, UI showcase, enterprise landing page"
        />
        <meta property="og:title" content="M.R.S‑Enterprise — Responsive Frontend Landing Page" />
        <meta
          property="og:description"
          content="A modern frontend landing page built with React and TailwindCSS to showcase enterprise services, products, and features with responsive design."
        />
        <meta property="og:image" content={img} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Project Header */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-purple-600">M.R.S‑Enterprise</h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          A clean and responsive frontend landing page built with React and TailwindCSS. Designed to showcase enterprise services, highlight features, and provide a modern user experience.
        </p>
        <a
          href="https://github.com/Saadbkhalid666/M.R.S-Enterprise"
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
          alt="M.R.S Enterprise frontend landing page screenshot"
          className="rounded-lg shadow-lg max-w-full"
        />
      </section>

      {/* Key Features */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-purple-500">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Fully responsive design for desktop, tablet, and mobile</li>
          <li>Modern UI with TailwindCSS styling and components</li>
          <li>Clean sections to showcase enterprise services and offerings</li>
          <li>Smooth animations and hover effects for user engagement</li>
          <li>Easy to customize and extend for any business</li>
          <li>SEO-friendly structure with proper semantic HTML and meta tags</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-purple-500">Tech Stack</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Frontend: React.js</li>
          <li>Styling: TailwindCSS</li>
          <li>Animations: Framer Motion or CSS transitions</li>
          <li>Version Control: Git & GitHub</li>
        </ul>
      </section>

    </main>
  );
};
