import React from "react";

const RatingOne = () => {
  return (
    <div className="w-full bg-[#F2FDFF] py-6 sm:mt-[80vh + 60px] md:mt-[80vh + 60px] mt-[80vh + 120px]">
       <div className="max-w-6xl mx-auto flex flex-row justify-center items-center gap-6 sm:gap-12 md:gap-16">

        {/* Google */}
        <div className="flex items-center gap-2 text-center">
          <img src="/png/google.png" alt="Google" className="w-6 sm:w-8 md:w-10" />
          <div className="leading-tight">
            <p className="font-bold text-xs sm:text-sm md:text-xl text-gray-700">⭐ 4.9</p>
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-700">
              (13650 reviews)
            </p>
          </div>
        </div>

        {/* TripAdvisor */}
        <div className="flex items-center gap-2 text-center">
          <img src="/png/tripadvisor.png" alt="TripAdvisor" className="w-6 sm:w-8 md:w-10" />
          <div className="leading-tight">
            <p className="font-bold text-xs sm:text-sm md:text-xl text-gray-700">⭐ 5.0</p>
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-700">
              (3770 reviews)
            </p>
          </div>
        </div>

        {/* Facebook */}
        <div className="flex items-center gap-2 text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
            alt="Facebook"
            className="w-6 sm:w-8 md:w-10"
          />
          <div className="leading-tight">
            <p className="font-bold text-xs sm:text-sm md:text-xl text-gray-700">⭐ 4.9</p>
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-700">
              (1031 reviews)
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RatingOne;
