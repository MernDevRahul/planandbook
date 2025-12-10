"use client"
import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import SlidingCards from './CardStack';

const items = [
  {
    id: 1,
    img: "/banner/rajasthan.jpg",
    title: "Rajasthan",
    price: "12,999",
    tagLine: "The Land of Kings",
  },
  {
    id: 2,
    img: "/banner/meghalaya.jpg",
    title: "Meghalaya",
    price: "21,499",
    tagLine: "The Abode of Clouds",
  },
  {
    id: 3,
    img: "/banner/andaman.jpg",
    title: "Andaman",
    price: "29,999",
    tagLine: "The Emerald Islands",
  },
  {
    id: 4,
    img: "/banner/spiti.jpg",
    title: "Spiti",
    price: "17,999",
    tagLine: "The Middle Land",
  },
  {
    id: 5,
    img: "/banner/ladakh.jpg",
    title: "Leh Ladakh",
    price: "21,999",
    tagLine: "Land of High Passes",
  },
  {
    id: 6,
    img: "/banner/himachal.jpg",
    title: "Himachal",
    price: "7,999",
    tagLine: "The Abode of Snow",
  },
  {
    id: 7,
    img: "/banner/kashmir-romantic-02.jpg",
    title: "Kashmir",
    price: "24,499",
    tagLine: "Paradise on Earth",
  },
  {
    id: 8,
    img: "/banner/sikkim.jpg",
    title: "Sikkim",
    price: "14,999",
    tagLine: "The Land of Mystical Beauty",
  },
  {
    id: 9,
    img: "/banner/Arunachal-Pradesh-img.jpg",
    title: "Arunachal Pradesh",
    price: "38,990",
    tagLine: "The Land of Dawn-lit Mountains",
  },
  {
    id: 10,
    img: "/banner/uttarakhand.jpg",
    title: "Uttrakhand",
    price: "7,999",
    tagLine: "The Abode of Gods",
  },
  {
    id: 11,
    img: "/banner/Nagaland.jpg",
    title: "Nagaland",
    price: "39,990",
    tagLine: "The Land of Festivals",
  },
  {
    id: 12,
    img: "/banner/kerala.jpg",
    title: "Kerela",
    price: "14,000",
    tagLine: "God's Own Country",
  },
];


const ExploreInternational = () => {
        const scrollRef = useRef(null);
      const cardRef = useRef(null);

        const slide = (direction) => {
    if (!cardRef.current) return;

    const cardWidth = cardRef.current.offsetWidth;
    const gap = 24; // Tailwind gap-6 = 1.5rem = 24px
    const scrollAmount = cardWidth + gap;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  return (
   <>
    <div className='w-full hidden lg:block md:px-[100px] lg:px-20 2xl:px-[260px] lg:py-[50px] lg:mt-30'>
        <div className='h-full w-full items-center justify-center relative'></div>
        <div className="w-full lg:flex flex-col items-center relative px-4">
            {/* Video Container */}
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 z-10"></div>

              {/* Text Overlay */}
              <div className="absolute top-[10%] left-[5%] z-20 text-white">
                <h1 className="text-3xl 2xl:text-5xl font-bold 2xl:mb-4">
                  International Trips
                </h1>
                <p className="text-lg 2xl:text-xl 2xl:mb-6 lg:mb-2 max-w-md">
                  Discover the world, one destination at a time
                </p>

                <button className="bg-(--primary) hover:bg-(--primary) text-white font-semibold 2xl:px-15 2xl:py-3 lg:px-10 lg:py-1.5 rounded-lg shadow-md">
                  Explore
                </button>
              </div>

              {/* Video */}
              <video loop autoPlay muted playsInline preload="auto" className="w-full h-full object-cover">
                <source src="https://wanderon-video.gumlet.io/category-section/india_(1)+(540p).mp4" />
              </video>
            </div>

            {/* Scroller */}
            <div className="absolute w-full px-4 lg:top-30 xl:top-50 z-50 shadow-none">
              <div className="relative w-full py-10">
                {/* Left Arrow */}
                <button
                  onClick={() => slide("left")}
                  className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 bg-(--primary) text-white shadow-md p-2 rounded-full"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Slider */}
                <div
                  ref={scrollRef}
                  className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar px-6"
                >
                  {items.map((item, index) => (
                    <div
                      key={index}
                      ref={index === 0 ? cardRef : null}
                      className="min-w-[260px] max-w-[260px] rounded-xl overflow-hidden shadow-lg relative"
                    >
                      <img
                        src={item.img}
                        className="w-full 2xl:h-72 xlh-70 lg:h-65  object-cover"
                      />

                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
                        <h2 className="text-white text-xl font-semibold">
                          {item.title}
                        </h2>
                        <p className="text-gray-200 text-sm">
                          Starting Price Rs. {item.price}/-
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => slide("right")}
                  className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-(--primary) text-white shadow-md p-2 rounded-full"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
    </div>

                <div className="lg:hidden px-4 flex items-center justify-between w-full mb-6 pt-20">
        <h2 className="text-[20px] sm:text-[24px] font-semibold text-black">
          International trips 
        </h2>

        <a className="flex items-center gap-2 text-(--primary)">
          <p className="text-[14px] sm:text-[16px] font-medium">View All</p>
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-(--primary)">
            <ChevronRight className="text-white" size={16} />
          </div>
        </a>
      </div>
    <SlidingCards cards={items} />
   </>
  )
}

export default ExploreInternational
