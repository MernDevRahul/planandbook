// Responsive Footer Component
"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

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
              <Link href={item.href} className="no-underline hover:text-white">
                {item.label}
              </Link>
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
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
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

        <p className="text-center text-[14px] leading-[22px] w-full lg:w-[60%] mx-auto mt-2">
          <Link href="https://www.google.com/maps/place/Plan+and+Book+Trip/@28.5612872,77.0476762,17z/data=!3m1!4b1!4m6!3m5!1s0x211676f5a5de6d51:0x73b273abf7a6eddf!8m2!3d28.5612825!4d77.0502511!16s%2Fg%2F11yq2vhxv7?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D" target="_blank">Flat No C1 Hno 88 Block A Pochanpur, Sector 23, <br /> Dwarka, Delhi-110077</Link>
        </p>

        <ul className="my-6 flex flex-col lg:flex-row justify-center gap-3 lg:gap-10 text-center">
          <li>
            <Link href="mailto:geetu@planandbooktrip.com" className="hover:text-white">
              geetu@planandbooktrip.com
            </Link>
          </li>
          <li>
            <Link href="tel:+918368088945" className="hover:text-white">
              +91-8368088945
            </Link>
          </li>
          <li>
            <Link href="https://planandbooktrip.com" className="hover:text-white">
              planandbooktrip.com
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center mb-4">
          <div className="flex flex-row justify-center gap-6">
            {[
              { icon: "facebook", href: "https://www.facebook.com/profile.php?id=61573902808542" },
              { icon: "instagram", href: "https://www.instagram.com/planandbooktrip/" },
              { icon: "youtube", href: "https://www.youtube.com/@PlanandBookTrip" }
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="flex items-center p-2 rounded-full bg-white"
                target="_blank"
              >
                <img
                  src={`https://wanderon-images.gumlet.io/icons/${item.icon}.svg`}
                  alt={item.icon}
                  className="h-6 w-6"
                />
              </Link>
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
