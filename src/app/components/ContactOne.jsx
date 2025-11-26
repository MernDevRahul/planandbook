import React from "react";

const ContactOne = () => {
  return (
    <div
      className="w-full px-0 sm:px-4 sm:pt-8 md:px-10 lg:px-[260px] py-2.5 bg-amber-100/15 mt-0">
      <div
        className="w-full rounded-lg relative bg-[linear-gradient(90deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_82%),url(https://wanderon-images.gumlet.io/new-homepage-data/cta%20homepage%20-%20desktop.png)] bg-center bg-cover bg-no-repeat h-[150px] sm:h-[350px] md:aspect-1106/300">
        {/* CONTENT */}
        <div
          className="absolute top-5 left-5 sm:left-10 md:top-[60px] md:left-[60px] lg:left-20 flex flex-col items-start gap-6">
          <div>
            <h2 className="text-[15px] sm:text-[28px] md:text-[32px] font-extrabold leading-[140%] text-white">
              Dreaming of your next Adventure?
            </h2>

            <p className="text-white text-[16px] sm:text-[20px] font-medium mt-1.5 leading-[140%]">
              {/* add text if needed */}
            </p>
          </div>

          {/* BUTTON */}
          <button
            className="bg-[#FEE60B] text-black text-[10px] sm:text-[16px] font-medium px-8 sm:px-[60px] py-2 rounded-[10px] shadow-lg cursor-pointer">
            Connect Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactOne;
