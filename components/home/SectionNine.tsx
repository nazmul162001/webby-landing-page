"use client";
import Image from "next/image";
import { useState } from "react";

const SectionNine = () => {
  const [activeTab, setActiveTab] = useState("Research");

  const tabContent = {
    Research: {
      description:
        "Research involves gathering data, analyzing market trends, and understanding user needs to create a solid foundation for decision-making.",
    },
    Plan: {
      description:
        "Planning is the strategic phase where ideas are structured, timelines are created, and a clear roadmap is established for execution.",
    },
    Design: {
      description:
        "Design focuses on visual aesthetics, usability, and user experience to ensure the final product is both functional and appealing.",
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            LOREM IPSUM DOLOR SIT AMET
          </h2>

          {/* Tab Buttons */}
          <div className="mt-4 flex border border-gray-300 rounded-lg overflow-hidden w-full max-w-lg">
            {["Research", "Plan", "Design"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-1/3 py-3 text-center font-medium transition-all ${
                  activeTab === tab
                    ? "bg-white text-black font-semibold shadow-md"
                    : "bg-gray-100 text-gray-500"
                }`}
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
          <a
            href="#"
            className="mt-4 text-blue-600 font-semibold inline-flex items-center space-x-2 hover:underline"
          >
            <span>Check tools</span>
            <span>→</span>
          </a>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/handshake.png"
            alt="Handshake"
            width={500}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionNine;
