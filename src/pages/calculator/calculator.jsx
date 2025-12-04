import img from "../../assets/images/calcmate.PNG";
import { Helmet } from "react-helmet";

export const CalcMate = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">

      {/* SEO / Metadata */}
      <Helmet>
        <title>CalcMate — Multi Calculator App | Saad Bin Khalid</title>
        <meta
          name="description"
          content="CalcMate is a frontend React app featuring 10 different calculators including currency converter, age calculator, finance tools, and more. Built with React and TailwindCSS for responsive UI."
        />
        <meta
          name="keywords"
          content="CalcMate, React calculator app, currency converter, age calculator, finance calculator, frontend app, TailwindCSS, responsive UI"
        />
        <meta property="og:title" content="CalcMate — Multi Calculator App" />
        <meta
          property="og:description"
          content="A responsive React frontend app with 10 different calculators including currency, age, finance, and more, styled with TailwindCSS."
        />
        <meta property="og:image" content={img} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Project Header */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-purple-600">CalcMate</h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          CalcMate is a React frontend app featuring 10 different calculators including currency converter, age calculator, finance tools, and other useful calculators. Fully responsive and built with TailwindCSS for smooth UI.
        </p>
        <a
          href="https://github.com/Saadbkhalid666/CalcMate"
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
          alt="CalcMate multi-calculator app screenshot"
          className="rounded-lg shadow-lg max-w-full"
        />
      </section>

      {/* Key Features */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-purple-500">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>10 different calculators: currency, age, finance, and more</li>
          <li>Responsive UI for desktop, tablet, and mobile</li>
          <li>Clean and modern interface built with TailwindCSS</li>
          <li>Instant calculations without page reloads</li>
          <li>Easy to extend and add new calculators</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-purple-500">Tech Stack</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Frontend: React.js</li>
          <li>Styling: TailwindCSS</li>
          <li>State Management: React useState / Context (if needed)</li>
          <li>Version Control: Git & GitHub</li>
        </ul>
      </section>

    </main>
  );
};
