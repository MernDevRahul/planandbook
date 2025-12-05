"use client";
import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    img: "/banner/rajasthan.jpg",
    title: "Rajasthan",
    price: "12,999",
  },
  {
    img: "/banner/meghalaya.jpg",
    title: "Meghalaya",
    price: "21,499",
  },
  {
    img: "/banner/andaman.jpg",
    title: "Andaman",
    price: "29,999",
  },
  {
    img: "/banner/spiti.jpg",
    title: "Spiti",
    price: "17,999",
  },
  {
    img: "/banner/ladakh.jpg",
    title: "Leh Ladakh",
    price: "21,999",
  },
  {
    img: "/banner/himachal.jpg",
    title: "Himachal",
    price: "7,999",
  },
  {
    img: "/banner/kashmir-romantic-02.jpg",
    title: "Kashmir",
    price: "24,499",
  },
  {
    img: "/banner/sikkim.jpg",
    title: "Sikkim",
    price: "14,999",
  },
  {
    img: "/banner/Arunachal-Pradesh-img.jpg",
    title: "Arunachal Pardesh",
    price: "38,990",
  },
  {
    img: "/banner/uttarakhand.jpg",
    title: "Uttrakhand",
    price: "7,999",
  },
  {
    img: "/banner/Nagaland.jpg",
    title: "Nagaland",
    price: "39,990",
  },
  {
    img: "/banner/kerala.jpg",
    title: "Kerela",
    price: "14,000",
  },
];

const SectionOne = () => {
  const scrollRef = useRef(null);
  const carouselRef = useRef(null);
  const cardRef = useRef(null);
  const intenatioanlScrollRef = useRef(null);
  const internationalCardRef = useRef(null);

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

  const internationalSlide = (direction) => {
    if (!internationalCardRef.current) return;

    const cardWidth = internationalCardRef.current.offsetWidth;
    const gap = 24; // Tailwind gap-6 = 1.5rem = 24px
    const scrollAmount = cardWidth + gap;

    intenatioanlScrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const cards = scrollRef.current?.children;
    if (!cards?.length) return;

    let index = 0;

    const autoplay = () => {
      index = (index + 1) % cards.length;

      const cardWidth = cards[0].offsetWidth;
      const gap = 24;

      scrollRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth",
      });
    };

    const interval = setInterval(autoplay, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:px-[100px] lg:px-20 2xl:px-[260px] lg:py-[50px]">
      <div className="block">
        <div className="h-full w-full items-center justify-center relative">
          {/* Carousel */}
          <div className="w-full overflow-hidden relative">
            <div className="px-4">
              <div className="carousel w-full mt-[26px]" ref={carouselRef}>
                <div className="carousel-item w-full h-[45vh] md:h-auto">
                  <div className="rounded-lg overflow-hidden h-full">
                    <video
                      src="https://wanderon-video.gumlet.io/fullmoon-v-d.mp4"
                      poster="https://wanderon-images.gumlet.io/fullmoon-t-d.png"
                      loop
                      autoPlay
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="carousel-item w-full h-[45vh] md:h-auto">
                  <div className="rounded-lg overflow-hidden h-full">
                    <video
                      src="https://wanderon-images.gumlet.io/f1-japan-special-banner-desktop-video.mp4"
                      poster="https://wanderon-images.gumlet.io/f1-japan-special-banner-desktop-thumbnail.png"
                      loop
                      autoPlay
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="carousel-item w-full h-[45vh] md:h-auto">
                  <div className="rounded-lg overflow-hidden h-full">
                    <video
                      src="https://wanderon-video.gumlet.io/spain-poster-desktop-video.mp4?original=true"
                      poster="https://wanderon-images.gumlet.io/spain-poster-desktop-thumbnail.png"
                      loop
                      autoPlay
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Section */}
          <div className="relative mt-10 rounded-2xl w-full flex justify-center items-center cursor-pointer px-4">
            <a
              href=""
              className="rounded-2xl w-full block h-[45vh] lg:aspect-553/150 no-underline overflow-hidden"
            >
              <video
                alt="any"
                muted
                loop
                autoPlay
                playsInline
                className="w-full h-full object-cover rounded-lg"
                src="https://wanderon-video.gumlet.io/CNY-Final-Desktop(1).mp4?original=true"
                poster="https://wanderon-images.gumlet.io/CNY+thumbnail+desktop.png"
              ></video>
            </a>
          </div>

          {/* Upcoming Trips */}
          <div className="mt-10 flex items-center justify-center cursor-pointer px-4 relative">
            <a href="" className="no-underline">
              <img
                src="https://wanderon-images.gumlet.io//uct-desktop-new.webp?updatedAt=1738909844156"
                alt="any"
                className="w-full rounded-md mb-[30px] h-[12vh] md:h-auto"
              />
            </a>
            <div className="block lg:hidden absolute h-[31px] w-[26px] -top-[30px] right-8">
              <img
                src="/png/neelu.png"
                alt="any"
                className="transform -scale-x-100"
              />
            </div>
          </div>

          {/* Explore Section */}
          <div className="px-5 py-5 flex flex-col gap-2 lg:hidden">
            <h2 className="font-semibold text-[16px] text-black">Explore</h2>

            <div className="ps-1 overflow-x-auto no-scrollbar">
              <div className="flex gap-3 w-fit">
                <a
                  href=""
                  className="flex flex-col items-center w-[110px] shrink-0 rounded-lg bg-[#F2FDFF] p-2"
                >
                  <div className="w-full aspect-square rounded-md overflow-hidden">
                    <img
                      src="https://wanderon-images.gumlet.io/Events+And+Festivals+(mob)+(1).png"
                      alt="any"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-black text-center text-[12px] font-medium mt-2">
                    Events & Festivals
                  </h3>
                </a>
                <a
                  href=""
                  className="flex flex-col items-center w-[110px] shrink-0 rounded-lg bg-[#F2FDFF] p-2"
                >
                  <div className="w-full aspect-square rounded-md overflow-hidden">
                    <img
                      src="https://wanderon-images.gumlet.io/new-homepage-data/Hero%20Section/group-thumbnails.jpeg"
                      alt="any"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-black text-center text-[12px] font-medium mt-2">
                    Group Tours
                  </h3>
                </a>
                <a
                  href=""
                  className="flex flex-col items-center w-[110px] shrink-0 rounded-lg bg-[#F2FDFF] p-2"
                >
                  <div className="w-full aspect-square rounded-md overflow-hidden">
                    <img
                      src="https://wanderon-images.gumlet.io/new-homepage-data/Hero%20Section/International-thumbnail.jpeg"
                      alt="any"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-black text-center text-[12px] font-medium mt-2">
                    International Trips
                  </h3>
                </a>
                <a
                  href=""
                  className="flex flex-col items-center w-[110px] shrink-0 rounded-lg bg-[#F2FDFF] p-2"
                >
                  <div className="w-full aspect-square rounded-md overflow-hidden">
                    <img
                      src="https://wanderon-images.gumlet.io/new-homepage-data/Hero%20Section/India-explore-thumbnail.jpeg"
                      alt="any"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-black text-center text-[12px] font-medium mt-2">
                    Explore India
                  </h3>
                </a>
                <a
                  href=""
                  className="flex flex-col items-center w-[110px] shrink-0 rounded-lg bg-[#F2FDFF] p-2"
                >
                  <div className="w-full aspect-square rounded-md overflow-hidden">
                    <img
                      src="https://wanderon-images.gumlet.io/mice-images-collection/japan-trip.jpeg?updatedAt=1701069889216"
                      alt="any"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-black text-center text-[12px] font-medium mt-2">
                    Corporate Trips
                  </h3>
                </a>
                <a
                  href=""
                  className="flex flex-col items-center w-[110px] shrink-0 rounded-lg bg-[#F2FDFF] p-2"
                >
                  <div className="w-full aspect-square rounded-md overflow-hidden">
                    <img
                      src="https://wanderon-images.gumlet.io/new-homepage-data/Hero%20Section/romantic-thumbnails.jpeg"
                      alt="any"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-black text-center text-[12px] font-medium mt-2">
                    Romantic Escapes
                  </h3>
                </a>
                <a
                  href=""
                  className="flex flex-col items-center w-[110px] shrink-0 rounded-lg bg-[#F2FDFF] p-2"
                >
                  <div className="w-full aspect-square rounded-md overflow-hidden">
                    <img
                      src="https://wanderon-images.gumlet.io/new-homepage-data/Hero%20Section/weekend-thumbnail.jpeg"
                      alt="any"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-black text-center text-[12px] font-medium mt-2">
                    Weekend Trips
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
