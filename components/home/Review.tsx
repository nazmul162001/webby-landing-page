"use client";
import Image from "next/image";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    icon: "⚡",
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    name: "Jane Cooper",
    avatar: "/bike.png",
  },
  {
    id: 2,
    icon: "⭐",
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    name: "Ralph Edwards",
    avatar: "/bike.png",
  },
  {
    id: 3,
    icon: "🏰",
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    name: "Courtney Henry",
    avatar: "/bike.png",
  },
  {
    id: 4,
    icon: "ℹ️",
    text: "Hendrerit augue ut risus quis integer netus. Sit rhoncus magnis habitasse senectus. Egestas amet habitasse tellus ornare. Hendrerit senectus. Mauris egestas vitae praesent neque ut risus.",
    name: "Cameron Williamson",
    avatar: "/bike.png",
  },
  {
    id: 5,
    icon: "⚡",
    text: "Another sample review text for testing multiple slides in the carousel.",
    name: "Emily Carter",
    avatar: "/bike.png",
  },
  {
    id: 6,
    icon: "⭐",
    text: "Another review showcasing how text and content can be formatted in a slider.",
    name: "Michael Smith",
    avatar: "/bike.png",
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerRow = 3; // Number of reviews per row

  const totalSlides = Math.ceil(reviews.length / itemsPerRow);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-blue-600 text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="max-w-2xl">
            <h4 className="text-xl font-normal mb-2">
              Join other Sun harvesters
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
            <p className="text-gray-100 text-lg">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </div>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium text-lg mt-6 md:mt-0">
            Lorem Ipsum
          </button>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {[...Array(totalSlides)].map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {reviews
                  .slice(
                    slideIndex * itemsPerRow,
                    (slideIndex + 1) * itemsPerRow
                  )
                  .map((review) => (
                    <div
                      key={review.id}
                      className="bg-white text-black p-8 rounded-xl min-h-[320px] flex flex-col"
                    >
                      {/* Icon */}
                      <div className="text-blue-600 text-4xl mb-6">
                        {review.icon}
                      </div>
                      {/* Review Text */}
                      <p className="text-gray-600 text-lg flex-grow">
                        {review.text}
                      </p>
                      {/* Author */}
                      <div className="flex items-center mt-6">
                        <div className="w-12 h-12 relative">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>
                        <span className="ml-4 font-medium text-lg">
                          {review.name}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
