"use client";

import React, { useState, useEffect, useMemo } from "react";

const Testimonials = () => {
  // ✅ Memoized testimonials (static data)
  const testimonials = useMemo(
    () => [
      {
        name: "Rahul Shrivastav",
        role: "Traveler",
        image: "/users/user1.jpg",
        review:
          "Amazing experience! Everything was perfectly organized. Highly recommended.",
      },
      {
        name: "Shadab Shaikh",
        role: "Customer",
        image: "/users/user2.jpg",
        review:
          "Best travel company I’ve booked with. Great service and support!",
      },
      {
        name: "Gaurav Rajoriya",
        role: "Adventurer",
        image: "/users/user3.jpg",
        review: "Fantastic trip! One of the best journeys of my life.",
      },
      {
        name: "Bhoomi Jaggo",
        role: "Adventurer",
        image: "/users/user3.jpg",
        review:
          "Amazing experience! Everything was perfectly organized. Highly recommended.",
      },
      {
        name: "Sakshi Chowdhary",
        role: "Travel Agent",
        image: "/users/user2.jpg",
        review:
          "Best travel company I’ve booked with. Great service and support!",
      },
      {
        name: "Raj Dixit",
        role: "Adventurer",
        image: "/users/user3.jpg",
        review: "Fantastic trip! One of the best journeys of my life.",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ✅ Auto slide with pause support
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const next = () => {
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Heading */}
      <div className="flex flex-col items-center">
        <h2 className="w-full text-center font-semibold text-black mt-4 text-2xl px-2 lg:text-[2vw] text-shadow-lg text-shadow-gray-500/20">
          What Our Travellers Have to Say
        </h2>
        <div className="h-1.5 bg-(--primary) w-[60vw] md:w-[40vw] mt-1 rounded-xl mb-4"></div>
      </div>

      {/* Slider */}
      <div
        className="w-full max-w-3xl mx-auto relative px-4 py-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Card */}
        <div className="bg-white p-6 lg:p-10 rounded-xl shadow-lg text-center transition-all duration-700 ease-in-out">
          {/* Avatar */}
          <div className="flex justify-center mb-4">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-20 h-20 rounded-full object-cover border-4 border-(--primary)"
            />
          </div>

          {/* Name */}
          <h3 className="text-xl font-semibold text-(--primary)">
            {testimonials[index].name}
          </h3>

          {/* Role */}
          <p className="text-gray-500 text-sm mb-3">
            {testimonials[index].role}
          </p>

          {/* Review */}
          <p className="text-gray-700 leading-relaxed text-[15px]">
            “{testimonials[index].review}”
          </p>
        </div>

        {/* Prev Button */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-(--primary) text-white p-2 rounded-full"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-(--primary) text-white p-2 rounded-full"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-5 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition 
                ${i === index ? "bg-(--primary)" : "bg-gray-300"}`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
