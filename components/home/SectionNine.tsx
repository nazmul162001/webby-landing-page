"use client";
import { useState } from "react";

const tabContent = {
  Research: {
    description:
      "Research involves gathering insights, data, and information to make informed decisions and develop innovative strategies.",
  },
  Plan: {
    description:
      "Planning ensures a structured approach, outlining objectives, timelines, and key milestones for a project’s success.",
  },
  Design: {
    description:
      "Design focuses on crafting intuitive, aesthetically pleasing, and user-centric experiences to enhance usability and engagement.",
  },
};

// Explicitly define the type of `activeTab`
type TabKeys = keyof typeof tabContent;

const SectionNine = () => {
  const [activeTab, setActiveTab] = useState<TabKeys>("Research"); // Set initial state with type safety

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            LOREM IPSUM DOLOR SIT AMET
          </h2>

          {/* Tab Buttons */}
          <div className="flex border-b border-gray-300 mt-4">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 text-sm font-semibold ${
                  activeTab === tab ? "bg-gray-200" : "bg-white"
                }`}
                onClick={() => setActiveTab(tab as TabKeys)} // Type assertion ensures TypeScript recognizes this
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Dynamic Description */}
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            {tabContent[activeTab].description}
          </p>

          {/* CTA Link */}
          <div className="mt-6">
            <a
              href="#"
              className="text-blue-600 font-semibold flex items-center"
            >
              Check tools →
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-80 relative">
          <img
            src="/handshake.png"
            alt="Handshake"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionNine;
