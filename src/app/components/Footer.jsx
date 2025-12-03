// Responsive Footer Component
"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Section = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/20 bg-[#112023] rounded-md lg:border-none lg:bg-transparent mt-2">
      {/* TITLE */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center lg:cursor-default px-2 py-2"
      >
        <h2 className="text-white text-[18px] font-medium">{title}</h2>

        {/* Chevron (Hidden on large screens) */}
        <span className="lg:hidden text-white">
          {open ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>

      {/* CONTENT */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:block ${
          open ? "max-h-96" : "max-h-0 lg:max-h-none"
        }`}
      >
        <ul className="px-2 pb-2 space-y-2">
          {items.map((item, i) => (
            <li
              key={i}
              className="text-[#ababab] font-normal text-[15px] leading-[22px] cursor-pointer w-max"
            >
              <a href={item.href} className="no-underline hover:text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-[#112023] text-white mt-10 rounded-md">

      {/* TOP SECTIONS */}
      <div className="px-4 xl:px-[151px] pt-6 lg:pt-[30px]">
        <div className="flex justify-center pb-6">
          <div className="w-full lg:w-[80%] border-b border-white/20 pb-4 grid grid-cols-1 lg:grid-cols-4 lg:gap-5">

            {/* International Trips */}
            <Section
              title="International Trips"
              items={[
                { label: "Europe", href: "/international/europe" },
                { label: "Bali", href: "/international/bali" },
                { label: "Vietnam", href: "/international/vietnam" },
                { label: "Thailand", href: "/international/thailand" },
                { label: "Kazakhstan", href: "/international/kazakhstan" },
                { label: "Singapore", href: "/international/singapore" },
                { label: "Maldives", href: "/international/maldives" },
                { label: "Dubai", href: "/international/dubai" },
                { label: "Malaysia", href: "/international/malaysia" }
              ]}
            />

            {/* India Trips */}
            <Section
              title="India Trips"
              items={[
                { label: "Ladakh", href: "/india/ladakh" },
                { label: "Spiti", href: "/india/spiti" },
                { label: "Meghalaya", href: "/india/meghalaya" },
                { label: "Kashmir", href: "/india/kashmir" },
                { label: "Himachal Pradesh", href: "/india/himachal" },
                { label: "Andaman", href: "/india/andaman" },
                { label: "Kerala", href: "/india/kerala" },
                { label: "Rajasthan", href: "/india/rajasthan" },
                { label: "Nagaland", href: "/india/nagaland" }
              ]}
            />

            {/* Special Package */}
            <Section
              title="Special Packages"
              items={[
                { label: "Community Trips", href: "/special/community-trips" },
                { label: "Honeymoon Trips", href: "/special/honeymoon" },
                { label: "Corporate Trips", href: "/special/corporate" },
                { label: "Weekend Getaways", href: "/special/weekend-getaways" }
              ]}
            />

            {/* Quick Links */}
            <Section
              title="Quick Links"
              items={[
                { label: "About Us", href: "/about-us" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Support", href: "/support" },
                { label: "Disclaimer", href: "/disclaimer" },
                { label: "Careers", href: "/careers" },
                { label: "Blogs", href: "/blogs" },
                { label: "Payments", href: "/payments" }
              ]}
            />
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="items-center pb-[30px] pt-5 px-4">
        <h3 className="font-medium text-[24px] lg:text-[28px] leading-7 text-center">
          Plan and Book Trip
        </h3>

        <p className="text-center text-[14px] leading-[22px] w-full lg:w-[60%] mx-auto">
          Dwarka Mor, New Delhi
        </p>

        <ul className="my-6 flex flex-col lg:flex-row justify-center gap-3 lg:gap-10 text-center">
          <li>
            <a href="mailto:geetu@planandbooktrip.com" className="hover:text-white">
              geetu@planandbooktrip.com
            </a>
          </li>
          <li>
            <a href="tel:+918368088945" className="hover:text-white">
              +91-8368088945
            </a>
          </li>
          <li>
            <a href="https://planandbooktrip.com" className="hover:text-white">
              planandbooktrip.com
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center mb-4">
          <div className="flex flex-row justify-center gap-6">
            {[
              { icon: "facebook", href: "#" },
              { icon: "instagram", href: "#" },
              { icon: "linkedin", href: "#" },
              { icon: "youtube", href: "#" }
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center p-2 rounded-full bg-white"
              >
                <img
                  src={`https://wanderon-images.gumlet.io/icons/${item.icon}.svg`}
                  alt={item.icon}
                  className="h-6 w-6"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Artwork */}
        <div className="w-full lg:w-[80%] mx-auto h-[50px] bg-[url('https://wanderon-images.gumlet.io/footer-desktop.png')] bg-center bg-contain bg-no-repeat border-b border-white/20"></div>

        {/* Copyright */}
        <div className="mt-6 text-[#E5E5E5] text-[13px] lg:text-[15px] text-center">
          © {new Date().getFullYear()} Plan and Book Trip, All rights reserved.
        </div>
      </div>
    </footer>
  );
}
