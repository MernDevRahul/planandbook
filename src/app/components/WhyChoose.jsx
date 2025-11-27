"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardData = [
  {
    title: "No Third Party Mess",
    desc: "100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!",
    img: "https://wanderon.in/assets/images/sauceBg1.svg",
  },
  {
    title: "Expert Trip Planning",
    desc: "Our experts help you plan every detail of your trip with perfect precision.",
    img: "https://wanderon.in/assets/images/sauceBg1.svg",
  },
  {
    title: "Best Price Guaranteed",
    desc: "We offer unbeatable prices with the best travel experience.",
    img: "https://wanderon.in/assets/images/sauceBg1.svg",
  },
  {
    title: "24/7 Support",
    desc: "Dedicated support team available anytime during your trip.",
    img: "https://wanderon.in/assets/images/sauceBg1.svg",
  },
];

const WhyChoose = () => {
  const scrollRef = useRef(null);

  const slideLeft = () => {
    scrollRef.current?.scrollBy({ left: -250, behavior: "smooth" });
  };

  const slideRight = () => {
    scrollRef.current?.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <div className="px-4 sm:pt-8 md:px-[100px] lg:px-20 2xl:px-[260px] lg:py-[50px] py-2.5 mt-2">
      <div className="w-full flex p-2.5 flex-col justify-center items-center gap-2.5">
        <h2 className="text-black text-[24px] font-semibold leading-9">
          Why Plan and Book Trip?
        </h2>
      </div>

      {/* Arrows for mobile */}
      <div className="flex justify-between items-center mb-2 lg:hidden">
        <button onClick={slideLeft}>
          <ChevronLeft size={24} />
        </button>
        <button onClick={slideRight}>
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Scrollable wrapper */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-4 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-x-visible "
      >
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="min-w-[250px] sm:min-w-[280px] lg:min-w-0 h-[330px] flex flex-col gap-4 p-5 shadow-lg border border-(--primary) relative rounded-2xl overflow-hidden">
            {/* Background image */}
            <img
              src={card.img}
              alt="any"
              className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="font-bold text-[22px] leading-7 text-(--primary)">
                {card.title}
              </div>
              <div className="font-normal leading-5 text-black mt-2">
                {card.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
