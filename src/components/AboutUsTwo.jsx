import Image from "next/image";
import React from "react";

const AboutUsTwo = () => {
  return (
    <div>

      <h2 className="w-full text-center font-semibold text-(--primary) my-6 text-2xl px-2 lg:text-[2vw] text-shadow-lg">
        Our Warriors: The Heart of Our Travel Ecosystem
      </h2>

      <div className="grid lg:grid-cols-3 gap-5 justify-items-center px-[2vw] lg:px-[10vw]">
        <div className="p-6 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 lg:w-30 lg:h-30 relative mb-4 mx-auto">
            <Image
              src="https://wanderon-images.gumlet.io/usp0.svg"
              alt="any"
              fill
              className=" object-cover"
            />
          </div>

          <h3 className="text-center text-sm lg:text-3xl font-bold text-gray-700">
            Trip Captains
          </h3>
          <div className="mt-3 w-full flex justify-center">
            <div className="bg-(--primary) w-[150px] h-[3px] rounded-2xl"></div>
          </div>

          <p className="text-center text-gray-600 mt-5 text-md lg:text-lg leading-relaxed px-2">
            The leaders who guide, support, and bring every itinerary to life
            with confidence and care.
          </p>
        </div>
        <div className="p-6 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 lg:w-30 lg:h-30 relative mb-4 mx-auto">
            <Image
              src="https://wanderon-images.gumlet.io/usp1.svg"
              alt="any"
              fill
              className=" object-cover"
            />
          </div>

          <h3 className="text-center text-sm lg:text-3xl font-bold text-gray-700">
            Local Vendors
          </h3>
          <div className="mt-3 w-full flex justify-center">
            <div className="bg-(--primary) w-[150px] h-[3px] rounded-2xl"></div>
          </div>

          <p className="text-center text-gray-600 mt-5 text-md lg:text-lg leading-relaxed px-2">
            The leaders who guide, support, and bring every itinerary to life
            with confidence and care.
          </p>
        </div>
        <div className="p-6 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 lg:w-30 lg:h-30 relative mb-4 mx-auto">
            <Image
              src="https://wanderon-images.gumlet.io/usp2.svg"
              alt="any"
              fill
              className=" object-cover"
            />
          </div>

          <h3 className="text-center text-sm lg:text-3xl font-bold text-gray-700">
            Transport Drivers
          </h3>
          <div className="mt-3 w-full flex justify-center">
            <div className="bg-(--primary) w-[150px] h-[3px] rounded-2xl"></div>
          </div>

          <p className="text-center text-gray-600 mt-5 text-md lg:text-lg leading-relaxed px-2">
            The leaders who guide, support, and bring every itinerary to life
            with confidence and care.
          </p>
        </div>
      </div>

      
      <h2 className="w-full text-center font-semibold text-(--primary) my-6 text-2xl px-2 lg:text-[2vw] text-shadow-lg">
        The Values That Inspire Every Journey We Create
      </h2>
      <div className="px-4 lg:px-[27vw]">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold text-md lg:text-2xl text-(--primary) text-shadow-sm">
            1) Community Experience
          </div>
          <div className="collapse-content text-sm lg:text-md">
            We create journeys that help people connect, share, and feel a sense
            of belonging.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-md lg:text-2xl text-(--primary) text-shadow-sm">
            2) Customer Satisfaction
          </div>
          <div className="collapse-content text-sm lg:text-md">
            Every decision we make is driven by traveler comfort, trust, and
            happiness.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-md lg:text-2xl text-(--primary) text-shadow-sm">
            3) Transparency & Trust
          </div>
          <div className="collapse-content text-sm lg:text-md">
            Clear communication and honest operations form the foundation of our
            brand.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-md lg:text-2xl text-(--primary) text-shadow-sm">
            4) Creative Exploration
          </div>
          <div className="collapse-content text-sm lg:text-md">
            We experiment, innovate, and constantly reimagine what travel can
            offer.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-md lg:text-2xl text-(--primary) text-shadow-sm">
            5) Freedom From Hassles
          </div>
          <div className="collapse-content text-sm lg:text-md">
            Our goal is simple: you enjoy the journey, we handle the rest.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTwo;
