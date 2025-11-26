"use client"
import React, { useEffect, useState } from "react";

const BannerOne = () => {
  const subtitles = [
    "Discover your next adventure destination",
    // "Plan and book your trip with ease",
    // "Unforgettable travel experiences await"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // which subtitle
  const [subIndex, setSubIndex] = useState(0); // typing letters
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = subtitles[index];

    const interval = setTimeout(() => {
      if (!deleting) {
        // Typing forward
        setText(currentText.substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);

        if (subIndex + 1 === currentText.length) {
          setTimeout(() => setDeleting(true), 1200); // Pause at full text
        }
      } else {
        // Deleting backwards
        setText(currentText.substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);

        if (subIndex - 1 === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % subtitles.length); // next subtitle
        }
      }
    }, deleting ? 40 : 70); // typing speed

    return () => clearTimeout(interval);
  }, [subIndex, deleting, index]);

  return (
    <div className="relative w-full h-[40vh] lg:h-[80vh] sm:mt-[60px] md:mt-[60px] lg:mt-[120px]">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://wanderon-images.gumlet.io/new-homepage-data/Hero%20Section/hero-thumbnail-new.jpeg"
      >
        <source
          src="https://wanderon-video.gumlet.io/header-video+(1080p).mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Turning Travel Dreams Into Plans
          
        </h1>

        {/* Looping Typewriter */}
        <p className="text-lg md:text-[32px] mt-3 text-yellow-300 font-medium whitespace-nowrap">
          {text}
          <span className="border-r-2 border-yellow-300 animate-pulse ml-1"></span>
        </p>
      </div>

    </div>
  );
};

export default BannerOne;
