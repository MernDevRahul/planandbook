"use client";
import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Traveler",
      image: "/users/user1.jpg",
      review:
        "Amazing experience! Everything was perfectly organized. Highly recommended.",
    },
    {
      name: "Sneha Verma",
      role: "Customer",
      image: "/users/user2.jpg",
      review:
        "Best travel company I’ve booked with. Great service and support!",
    },
    {
      name: "Amit Gupta",
      role: "Adventurer",
      image: "/users/user3.jpg",
      review: "Fantastic trip! One of the best journeys of my life.",
    },
    {
      name: "Gaurav ",
      role: "Adventurer",
      image: "/users/user3.jpg",
      review:
        "Amazing experience! Everything was perfectly organized. Highly recommended.",
    },
  ];
  const [index, setIndex] = useState(0);

  // Auto change every 4 sec
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(timer);
  }, [index]);

  const next = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="w-full text-center font-semibold text-black mt-4 text-2xl px-2 lg:text-[2vw] text-shadow-lg text-shadow-gray-500/20">
          What Our Travellers Have to Say
        </h2>
        <div className="h-1.5 bg-(--primary) w-[60vw] md:w-[40vw] mt-1 rounded-xl mb-4"></div>
      </div>

      <div className="w-full max-w-3xl mx-auto relative px-4 py-10">
        {/* Slider box */}
        <div className="bg-white p-6 lg:p-10 rounded-xl shadow-lg text-center transition-all duration-700 ease-in-out">
          {/* Avatar */}
          <div className="flex justify-center mb-4">
            <img
              src={testimonials[index].image}
              alt=""
              className="w-20 h-20 rounded-full object-cover border-4 border-(--primary)"
            />
          </div>

          {/* Name */}
          <h3 className="text-xl font-semibold text-(--primary)">
            {testimonials[index].name}
          </h3>

          {/* Designation */}
          <p className="text-gray-500 text-sm mb-3">
            {testimonials[index].role}
          </p>

          {/* Review Text */}
          <p className="text-gray-700 leading-relaxed text-[15px]">
            “{testimonials[index].review}”
          </p>
        </div>

        {/* Prev Button */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-(--primary) text-white p-2 rounded-full cursor-pointer"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-(--primary) text-white p-2 rounded-full cursor-pointer"
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
              ${i === index ? "bg-(--primary)" : "bg-gray-300"}
            `}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
