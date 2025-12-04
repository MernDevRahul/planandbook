import Image from 'next/image'
import React from 'react'

const BannerTwo = ({ heading, subHeading}) => {
  return (
    <div className='relative w-full h-[60vh] lg:h-[calc(100vh-120px)] sm:mt-[60px] md:mt-[60px] lg:mt-[120px]'>
      <Image
      src="/banner/India-banner.webp"
      alt='Banner Image'
      fill
      className='absolute object-cover'
      />
      <div className='absolute inset-0 bg-black/50'></div>

      {/* Content */}
      <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4'>
        <h1 className='text-2xl lg:text-4xl xl:text-6xl font-bold drop-shadow-lg'>
            {heading}
        </h1>
        <div className='text-lg lg:text-[28px] xl:text-[32px] mt-3 text-(--primary) font-semibold w-screen'>
            {subHeading}
        </div>
        <span className="border-r-2 border-yellow-300 animate-pulse ml-1"></span>
      </div>

      <div className='absolute w-full bg-black/40 text-white bottom-0 py-4'>
        <div className="max-w-6xl mx-auto flex flex-row justify-around items-center gap-6 sm:gap-12 md:gap-16">

        {/* Google */}
        <div className="flex items-center gap-2 text-center">
          <img src="/png/google.png" alt="Google" className="w-6 sm:w-8 md:w-10" />
          <div className="leading-tight">
            <p className="font-bold text-xs sm:text-sm md:text-xl">⭐ 4.9</p>
            <p className="text-[10px] sm:text-xs md:text-sm">
              (13650 reviews)
            </p>
          </div>
        </div>

        {/* TripAdvisor */}
        <div className="flex items-center gap-2 text-center">
          <img src="/png/tripadvisor.png" alt="TripAdvisor" className="w-6 sm:w-8 md:w-10" />
          <div className="leading-tight">
            <p className="font-bold text-xs sm:text-sm md:text-xl">⭐ 5.0</p>
            <p className="text-[10px] sm:text-xs md:text-sm">
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
            <p className="font-bold text-xs sm:text-sm md:text-xl">⭐ 4.9</p>
            <p className="text-[10px] sm:text-xs md:text-sm ">
              (1031 reviews)
            </p>
          </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default BannerTwo
