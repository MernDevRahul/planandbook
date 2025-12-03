import React from "react";

const AboutUsTwo = () => {
  return (
    <div>
      <h2 className="w-full text-center font-semibold text-(--primary) my-6 text-2xl px-2 lg:text-[2vw] text-shadow-lg">
        The Values That Inspire Every Journey We Create
      </h2>
      <div className="px-4 lg:px-[27vw]">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold text-md lg:text-2xl text-(--primary) text-shadow-sm">
            Community Experience
          </div>
          <div className="collapse-content text-sm lg:text-md">
            We create journeys that help people connect, share, and feel a sense
            of belonging.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-md lg:text-2xl text-(--primary) text-shadow-sm">
            Customer Satisfaction
          </div>
          <div className="collapse-content text-sm lg:text-md">
            Every decision we make is driven by traveler comfort, trust, and
            happiness.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-md lg:text-2xl text-(--primary) text-shadow-sm">
            Transparency & Trust
          </div>
          <div className="collapse-content text-sm lg:text-md">
            Clear communication and honest operations form the foundation of our
            brand.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-md lg:text-2xl text-(--primary) text-shadow-sm">
            Creative Exploration
          </div>
          <div className="collapse-content text-sm lg:text-md">
            We experiment, innovate, and constantly reimagine what travel can
            offer.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-md lg:text-2xl text-(--primary) text-shadow-sm">
            Freedom From Hassles
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
