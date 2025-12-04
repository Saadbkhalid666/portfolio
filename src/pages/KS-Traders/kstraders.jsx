import React from "react";
import img from "../../assets/images/kstraders.jpg";
import { FiGithub } from "react-icons/fi";
import { Helmet } from "react-helmet";

export const KSTraders = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">

      {/* SEO Meta Tags */}
      <Helmet>
        <title>KS Traders - Full MERN E-commerce Project | Saad Bin Khalid</title>
        <meta
          name="description"
          content="Explore KS Traders, a full MERN e-commerce platform for scrap trading. Built with React, Node.js, Express, and MongoDB. Features product management, order tracking, and admin dashboard."
        />
        <meta
          name="keywords"
          content="KS Traders, MERN e-commerce, React, Node.js, Express, MongoDB, scrap trading, Saad Bin Khalid"
        />
        <meta property="og:title" content="KS Traders - Full MERN E-commerce Project" />
        <meta
          property="og:description"
          content="Full MERN stack e-commerce platform for scrap trading. Features user and admin dashboards, order tracking, and product management."
        />
        <meta property="og:image" content={img} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Header */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-purple-600">KS Traders</h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          KS Traders is a full-stack MERN e-commerce platform designed for scrap trading. Manage products, track orders, and streamline trading processes efficiently.
        </p>
        <a
          href="https://github.com/Saadbkhalid666/kstraders"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 font-semibold"
        >
          View on GitHub <FiGithub />
        </a>
      </section>

      {/* Project Image */}
      <section className="flex justify-center">
        <img
          src={img}
          alt="KS Traders MERN E-commerce Project Screenshot"
          className="rounded-lg shadow-lg max-w-full"
        />
      </section>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-purple-500">Project Overview</h2>
        <p className="text-gray-300">
          KS Traders is an online e-commerce platform tailored for scrap trading. Users can browse various scrap categories, place orders, and track shipments while admins can efficiently manage inventory, monitor orders, and handle customer interactions.
        </p>
      </section>

      {/* Features */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-purple-500">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>User registration, login, and authentication using JWT</li>
          <li>Dynamic product listing for scrap categories like HMS, Cast Iron, Stainless</li>
          <li>Shopping cart with order placement and tracking</li>
          <li>Admin panel for inventory and order management</li>
          <li>Responsive design for both mobile and desktop users</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-purple-500">Tech Stack</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Frontend: React, TailwindCSS</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB</li>
        </ul>
      </section>

    </main>
  );
};
