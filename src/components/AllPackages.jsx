"use client"
import { CalendarSearch, Clock, Plane } from "lucide-react";
import React, { useState } from "react";

const data = {
  img: "/banner/rajasthan.jpg",
  title: "Rajasthan",
  price: "12,999",
  nights: "10N/11D",
  airport: "Manila airport - Manila airport",
  date: "21 Jan",
  oldPrice: "1,21,499",
  newPrice: "1,09,999",
};

const AllPackages = () => {
  const totalCards = 50; // total dummy cards
  const [visibleCards, setVisibleCards] = useState(6);

  const loadMore = () => {
    setVisibleCards((prev) => prev + 6);
  };

  return (
    <>
      {/* Heading Section */}
      <div className="flex flex-col items-center mt-10 mb-6">
        <h2 className="mb-2 text-(--primary) text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-shadow-md text-shadow-black/35">
          All Packages
        </h2>

        <h4 className="text-lg md:text-xl font-semibold text-[#3A3A3A] text-center">
          Discover experiences that make every trip unforgettable
        </h4>

        <div className="h-1.5 bg-(--primary) w-[60vw] md:w-[40vw] mt-2 rounded-xl mb-4"></div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-5 xl:px-[10%] mb-10">

        {[...Array(visibleCards)].map((_, index) => (
          <a
            key={index}
            className="group min-w-[140px] sm:min-w-40 md:min-w-[200px] lg:min-w-[230px] h-[300px] sm:h-[330px] md:h-[360px] lg:h-[420px] rounded-xl overflow-hidden bg-white shadow-lg relative"
          >
            {/* IMAGE */}
            <div className="relative w-full h-full">
              <img
                src={data.img}
                alt={data.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/25"></div>

              {/* PRICE TAG */}
              <div
                className="absolute top-3 right-1 sm:right-3 bg-yellow-400 px-1 sm:px-3 py-1 rounded-full text-[8px] sm:text-[11px] font-semibold flex items-center gap-1">
                <span className="line-through text-black/60">
                  ₹{data.oldPrice}/-
                </span>
                <span className="text-black">₹{data.newPrice}/-</span>
                <span className="text-black/80">Onwards</span>
              </div>
            </div>

            {/* TEXT OVERLAY */}
            <div className="p-3 sm:p-4 text-white bg-linear-to-t from-black/90 to-transparent absolute bottom-0 left-0 w-full">
              <h2 className="text-sm sm:text-[15px] font-semibold">
                {data.title}
              </h2>

              <div className="mt-2 sm:mt-3 text-[12px] sm:text-[13px] space-y-1">
                <p className="flex items-center gap-2">
                  <span><Clock size={18} color={"var(--primary)"} strokeWidth={2.5}/></span> {data.nights}
                </p>
                <p className="flex items-center gap-2">
                  <span><Plane size={18} color={"var(--primary)"} strokeWidth={2.5}/></span> {data.airport}
                </p>
                <p className="flex items-center gap-2">
                  <span><CalendarSearch size={18} color={"var(--primary)"} strokeWidth={2.5}/></span> {data.date}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Explore More Button */}
      {visibleCards < totalCards && (
        <div className="w-full flex justify-center mb-12">
          <button
            onClick={loadMore}
            className="px-7 py-3 sm:px-9 sm:py-3.5 md:px-12 md:py-4 md:text-2xl bg-(--primary) text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.04] transition-all duration-300"
          >
            Explore More
          </button>
        </div>
      )}
    </>
  );
};

export default AllPackages;
