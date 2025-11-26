// Responsive Footer Component
// Mobile: stacked columns, optional accordion behavior
"use client"
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Section = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4 lg:mb-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center lg:cursor-default"
      >
        <h2 className="mb-2 text-white text-[18px] font-medium leading-[27px] w-max">
          {title}
        </h2>
        <span className="lg:hidden text-white">
          {open ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>

      <ul
        className={`no-underline font-normal text-[14px] leading-4 text-[#ababab] overflow-hidden transition-all duration-300 lg:block ${
          open ? "max-h-96" : "max-h-0 lg:max-h-none"
        }`}
      >
        {items.map((item, i) => (
          <li
            key={i}
            className="h-[30px] w-max text-[#ababab] font-normal text-[15px] leading-[22px] cursor-pointer"
          >
            <a href="" className="no-underline">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  return (
    <div className="bg-(--primary) rounded-md pt-4">
      <div className="bg-[#112023] lg:pt-[30px] lg:px-[151px] text-white px-4">
        {/* Top Section */}
        <div className="flex justify-center pb-6">
          <div className="w-full lg:w-[80%] border-b border-white/20 pb-4 grid grid-cols-1 lg:grid-cols-4 gap-5">
            <Section
              title="International Trips"
              items={["Europe", "Bali", "Vietnam", "Thailand", "Kazakhsthan", "Singapore", "Maldives", "Dubai", "Malaysia"]}
            />

            <Section
              title="India Trips"
              items={["Ladakh", "Spiti", "Meghalaya", "Kashmir", "Himachal Pradesh", "Andaman", "Kerala", "Rajasthan", "Nagaland"]}
            />

            <Section
              title="Special Package"
              items={["Community Trips", "Homeymoon Trips", "Corporate Trips", "Weekend Getaways"]}
            />

            <Section
              title="Quick Links"
              items={["About us", "Privacy Policy", "Terms & Conditions", "Support", "Disclaimer", "Careers", "Blogs", "Payments"]}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="items-center pb-[30px] pt-5 bg-[#112023] -mt-2 w-full px-4">
        <h3 className="font-medium text-[24px] lg:text-[28px] leading-7 mt-2.5 text-center text-white">
          Plan and Book Trip
        </h3>

        <p className="text-center text-[14px] font-normal leading-[22px] w-full lg:w-[60%] text-white mx-auto">
          Dwarka mor, New Delhi
        </p>

        <ul className="my-6 mx-auto flex flex-col lg:flex-row justify-center gap-3 lg:gap-10 text-white text-center">
          <li>geetu@planandbooktrip.com</li>
          <li>0000000000</li>
          <li>planandbooktrip.com</li>
        </ul>

        {/* Icons */}
        <div className="flex justify-center w-full mb-4">
          <div className="flex flex-row justify-center gap-6">
            {["facebook", "instagram", "linkedin", "youtube"].map((icon, i) => (
              <a
                key={i}
                href=""
                className="flex items-center p-2 rounded-full bg-white"
              >
                <img
                  src={`https://wanderon-images.gumlet.io/icons/${icon}.svg`}
                  alt={icon}
                  className="h-6 w-6"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[80%] mx-auto h-[50px] bg-[url('https://wanderon-images.gumlet.io//footer-desktop.png?updatedAt=1734433384777.')] bg-center bg-contain bg-no-repeat border-b border-white/20"></div>

        <div className="mt-6 text-[#E5E5E5] text-[13px] lg:text-[15px] font-normal leading-[22px] text-center">
          © Plan and Book Trip, All rights reserved.
        </div>
      </div>
    </div>
  );
}