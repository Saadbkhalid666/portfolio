import React from "react";
import img from "../../assets/images/neurovisionx.PNG";
import { FiGithub } from "react-icons/fi";

export const NeuroVisionX = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-purple-600">NeuroVisionX</h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          NeuroVisionX is a cutting-edge web application that leverages AI-powered computer vision 
          to provide real-time face and hand detection. Built with ReactJS and TailwindCSS, this project 
          demonstrates advanced AI capabilities directly in the browser.
        </p>
        <a 
          href="https://github.com/Saadbkhalid666/NeuroVisionX" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 font-semibold"
        >
          View on GitHub <FiGithub />
        </a>
      </div>

      {/* Project Image */}
      <div className="flex justify-center">
        <img 
          src={img} 
          alt="NeuroVisionX" 
          className="rounded-lg shadow-lg max-w-full"
        />
      </div>

      {/* Features */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-purple-500">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <strong>Face Detection:</strong> Detects facial features, predicts age, gender, and emotions.
          </li>
          <li>
            <strong>Hand Detection:</strong> Recognizes gestures using WebAssembly and provides confidence levels.
          </li>
          <li>
            Real-time performance optimized with @mediapipe/tasks-vision and WASM.
          </li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-purple-500">Tech Stack</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Frontend: ReactJS</li>
          <li>Styling & Responsiveness: TailwindCSS</li>
          <li>AI / Computer Vision: Mediapipe, WebAssembly (WASM), @mediapipe/tasks-vision</li>
        </ul>
      </div>

      {/* Usage */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-purple-500">Usage</h2>
        <p className="text-gray-300">
          Navigate to the Face Detection or Hand Detection page, allow camera access, and see real-time detections
          and predictions for age, gender, emotion, and hand gestures.
        </p>
      </div>

    </div>
  );
};
