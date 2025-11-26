// "use client";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import React, { useRef } from "react";

// const Upcoming = () => {
//   const intenatioanlScrollRef = useRef(null);
//   const internationalCardRef = useRef(null);

//   const internationalSlide = (direction) => {
//     if (!internationalCardRef.current) return;

//     const cardWidth = internationalCardRef.current.offsetWidth;
//     const gap = 24; // Tailwind gap-6 = 1.5rem = 24px
//     const scrollAmount = cardWidth + gap;

//     intenatioanlScrollRef.current.scrollBy({
//       left: direction === "left" ? -scrollAmount : scrollAmount,
//       behavior: "smooth",
//     });
//   };
//   return (
//     <div className="w-full mt-50 lg: px-[260px] py-[50px] bg-amber-100/15">
//       <div className="flex items-center justify-between w-full">
//         <div className="flex flex-start justify-between lg:my-2.5 lg:mx-4">
//           <h2 className="w-fit text-black text-[24px] font-semibold leading-[normal]">
//             Upcoming Community Trips
//           </h2>
//         </div>
//         <a href="no-underline text-(--primary)">
//           <div className="flex gap-3 items-center text-[#015F74] m-0">
//             <p className="text-[16px] leading-[19px] font-medium">View All</p>
//             <div className="flex items-center justify-center w-[25px] h-[25px] rounded-[50%] bg-[#015F74]">
//               <ChevronRight className="text-white" size={18} />
//             </div>
//           </div>
//         </a>
//       </div>

//       <div className="relative w-full px-4 z-50 shadow-none">
//         <div className="relative w-full py-10">
//           {/* Left Arrow */}
//           <button
//             onClick={() => internationalSlide("left")}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-(--primary) text-white shadow-md p-2 rounded-full"
//           >
//             <ChevronLeft size={20} />
//           </button>

//           {/* Slider */}
//           <div
//             ref={intenatioanlScrollRef}
//             className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar me-4"
//           >
//             {items.map((item, index) => (
//               <a
//                 key={index}
//                 ref={index === 0 ? internationalCardRef : null}
//                 className="min-w-[290px] h-[400px] rounded-xl overflow-hidden bg-white shadow-lg relative"
//               >
//                 {/* IMAGE */}
//                 <div className="relative w-full h-full">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                   />

//                   {/* PRICE TAG */}
//                   <div className="absolute top-3 right-3 bg-yellow-400 px-3 py-1 rounded-full text-[12px] font-semibold flex items-center gap-1">
//                     <span className="line-through text-black/60 text-[11px]">
//                       ₹{item.oldPrice}/-
//                     </span>
//                     <span className="text-black">₹{item.newPrice}/-</span>
//                     <span className="text-black/80">Onwards</span>
//                   </div>
//                 </div>

//                 {/* TEXT CONTENT */}
//                 <div className="p-4 text-white bg-linear-to-t from-black/90 to-transparent absolute bottom-0 left-0 w-full">
//                   <h2 className="text-[15px] font-semibold leading-5">
//                     {item.title}
//                   </h2>

//                   {/* INFO ROW */}
//                   <div className="mt-3 text-[13px] space-y-1">
//                     <p className="flex items-center gap-2">
//                       <span>🕓</span> {item.nights}
//                     </p>
//                     <p className="flex items-center gap-2">
//                       <span>✈️</span> {item.airport}
//                     </p>
//                     <p className="flex items-center gap-2">
//                       <span>📅</span> {item.date}
//                     </p>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={() => internationalSlide("right")}
//             className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-(--primary) text-white shadow-md p-2 rounded-full"
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Upcoming;


"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";

const items = [
  {
    img: "/banner/rajasthan.jpg",
    title: "Rajasthan",
    price: "12,999",
    nights: "10N/11D",
    airport: "Manila airport - Manila airport",
    date: "21 Jan",
    oldPrice: "1,21,499",
    newPrice: "1,09,999",
  },
  {
    img: "/banner/meghalaya.jpg",
    title: "Meghalaya",
    price: "21,499",
    nights: "10N/11D",
    airport: "Manila airport - Manila airport",
    date: "21 Jan",
    oldPrice: "1,21,499",
    newPrice: "1,09,999",
  },
  {
    img: "/banner/andaman.jpg",
    title: "Andaman",
    price: "29,999",
    nights: "10N/11D",
    airport: "Manila airport - Manila airport",
    date: "21 Jan",
    oldPrice: "1,21,499",
    newPrice: "1,09,999",
  },
  {
    img: "/banner/spiti.jpg",
    title: "Spiti",
    price: "17,999",
    nights: "10N/11D",
    airport: "Manila airport - Manila airport",
    date: "21 Jan",
    oldPrice: "1,21,499",
    newPrice: "1,09,999",
  },
  {
    img: "/banner/ladakh.jpg",
    title: "Leh Ladakh",
    price: "21,999",
    nights: "10N/11D",
    airport: "Manila airport - Manila airport",
    date: "21 Jan",
    oldPrice: "1,21,499",
    newPrice: "1,09,999",
  },
  {
    img: "/banner/himachal.jpg",
    title: "Himachal",
    price: "7,999",
    nights: "10N/11D",
    airport: "Manila airport - Manila airport",
    date: "21 Jan",
    oldPrice: "1,21,499",
    newPrice: "1,09,999",
  },
  {
    img: "/banner/kashmir-romantic-02.jpg",
    title: "Kashmir",
    price: "24,499",
    nights: "10N/11D",
    airport: "Manila airport - Manila airport",
    date: "21 Jan",
    oldPrice: "1,21,499",
    newPrice: "1,09,999",
  },
  {
    img: "/banner/sikkim.jpg",
    title: "Sikkim",
    price: "14,999",
    nights: "10N/11D",
    airport: "Manila airport - Manila airport",
    date: "21 Jan",
    oldPrice: "1,21,499",
    newPrice: "1,09,999",
  },
  {
    img: "/banner/Arunachal-Pradesh-img.jpg",
    title: "Arunachal Pardesh",
    price: "38,990",
    nights: "10N/11D",
    airport: "Manila airport - Manila airport",
    date: "21 Jan",
    oldPrice: "1,21,499",
    newPrice: "1,09,999",
  },
  {
    img: "/banner/uttarakhand.jpg",
    title: "Uttrakhand",
    price: "7,999",
    nights: "10N/11D",
    airport: "Manila airport - Manila airport",
    date: "21 Jan",
    oldPrice: "1,21,499",
    newPrice: "1,09,999",
  },
  {
    img: "/banner/Nagaland.jpg",
    title: "Nagaland",
    price: "39,990",
    nights: "10N/11D",
    airport: "Manila airport - Manila airport",
    date: "21 Jan",
    oldPrice: "1,21,499",
    newPrice: "1,09,999",
  },
  {
    img: "/banner/kerala.jpg",
    title: "Kerela",
    price: "14,000",
    nights: "10N/11D",
    airport: "Manila airport - Manila airport",
    date: "21 Jan",
    oldPrice: "1,21,499",
    newPrice: "1,09,999",
  },
];

const Upcoming = () => {
  const scrollRef = useRef(null);
  const cardRef = useRef(null);

  const slide = (direction) => {
    if (!cardRef.current) return;

    const cardWidth = cardRef.current.offsetWidth;
    const gap = 16; // gap-4 = 16px
    const scrollAmount = cardWidth + gap;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[260px] py-10 bg-amber-100/15 mt-40">
      {/* HEADER */}
      <div className="flex items-center justify-between w-full mb-6">
        <h2 className="text-[20px] sm:text-[24px] font-semibold">
          Upcoming Community Trips
        </h2>

        <a className="flex items-center gap-2 text-[#015F74]">
          <p className="text-[14px] sm:text-[16px] font-medium">View All</p>
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#015F74]">
            <ChevronRight className="text-white" size={16} />
          </div>
        </a>
      </div>

      <div className="relative w-full">
        {/* LEFT ARROW – hidden on mobile */}
        <button
          onClick={() => slide("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#015F74] text-white shadow-md p-2 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>

        {/* SLIDER */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar"
        >
          {items.map((item, index) => (
            <a
              key={index}
              ref={index === 0 ? cardRef : null}
              className="min-w-[220px] sm:min-w-[260px] md:min-w-[290px] h-[340px] sm:h-[380px] md:h-[400px] rounded-xl overflow-hidden bg-white shadow-lg relative">
              {/* IMAGE */}
              <div className="relative w-full h-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* PRICE TAG */}
                <div className="absolute top-3 right-3 bg-yellow-400 px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1">
                  <span className="line-through text-black/60 text-[10px]">
                    ₹{item.oldPrice}/-
                  </span>
                  <span className="text-black">₹{item.newPrice}/-</span>
                  <span className="text-black/80">Onwards</span>
                </div>
              </div>

              {/* TEXT */}
              <div className="p-4 text-white bg-linear-to-t from-black/90 to-transparent absolute bottom-0 left-0 w-full">
                <h2 className="text-[14px] sm:text-[15px] font-semibold">
                  {item.title}
                </h2>

                <div className="mt-3 text-[12px] sm:text-[13px] space-y-1">
                  <p className="flex items-center gap-2">
                    <span>🕓</span> {item.nights}
                  </p>
                  <p className="flex items-center gap-2">
                    <span>✈️</span> {item.airport}
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📅</span> {item.date}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* RIGHT ARROW – hidden on mobile */}
        <button
          onClick={() => slide("right")}
          className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-[#015F74] text-white shadow-md p-2 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Upcoming;
