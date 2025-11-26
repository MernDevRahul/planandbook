"use client"
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="shadow-sm h-[60px] flex justify-between items-center bg-(--primary) lg:bg-white  px-4 md:px-10 w-full fixed top-0 z-200 text-(--secondary)">

        {/* LEFT: LOGO + SEARCH (desktop only) */}
        <div className="flex items-center gap-5 lg:ms-[50px]">
          <a className="text-xl cursor-pointer">
            <Image src="/logo/logo.png" width={60} height={60} alt="logo" />
          </a>

          <input
            type="text"
            placeholder="Where do you want to go?"
            className="hidden lg:flex text-sm rounded-3xl border border-(--primary) outline-none px-4 py-2 w-[260px]"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 px-3 py-[30px]">

          {/* Mobile search */}
          <button className="lg:hidden">
            <Search size={22} className="text-white" />
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-[14px] font-sm leading-4">
            <li className="border-b-2 border-transparent hover:border-(--primary) transition-all duration-300 ease-in-out pb-1 cursor-pointer">
              <div className="flex gap-5 items-center relative font-sm">
                <img
                  src="/png/christmas-cap.png"
                  alt="christmas-cap"
                  className="h-[18px] absolute -top-2.5 -left-2.5 transform -scale-x-100"
                />
                <a>Christmas & New Year</a>
              </div>
            </li>

            <li className="border-b-2 border-transparent hover:border-(--primary) transition-all duration-300 ease-in-out pb-1 cursor-pointer"><a>Upcoming Trips</a></li>
            <li className="border-b-2 border-transparent hover:border-(--primary) transition-all duration-300 ease-in-out pb-1 cursor-pointer"><a>Corporate Tours</a></li>
            <li className="border-b-2 border-transparent hover:border-(--primary) transition-all duration-300 ease-in-out pb-1 cursor-pointer"><a>Blogs</a></li>
            <li className="border-b-2 border-transparent hover:border-(--primary) transition-all duration-300 ease-in-out pb-1 cursor-pointer"><a>About Us</a></li>

            <a
              href="tel:0000000000"
              className="flex items-center gap-1.5 border border-(--primary) rounded-full px-5 py-2"
            >
              <Search size={16} className="text-(--primary)" />
              +91-8368088945
            </a>
          </ul>

          {/* Hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} className="text-white" /> : <Menu size={26} className="text-white" />}
          </button>
        </div>
      </div>

      {/* =======================
          MOBILE SLIDE-IN MENU 
      ========================== */}

      {menuOpen && (
  <div
    className="fixed inset-0 backdrop-blur-[1px] z-40 top-[65px]"
    onClick={() => setMenuOpen(false)}
  />
)}

<div
  className={`
    fixed top-[65px] right-0 h-[calc(100%-65px)] w-[75%] 
    bg-white shadow-xl z-50
    transform transition-transform duration-300 delay-150
    ${menuOpen ? "translate-x-0" : "translate-x-full"}
  `}
>


  <ul className="space-y-5 px-6 py-4 text-[16px] font-sm">
    <li className="flex gap-5 items-center relative border-b">
      <img
        src="/png/christmas-cap.png"
        alt="christmas-cap"
        className="h-[18px] absolute -top-2.5 -left-2.5 transform -scale-x-100"
      />
      <a>Christmas & New Year</a>
    </li>

    <li className="border-b"><a>Upcoming Trips</a></li>
    <li className="border-b"><a>Corporate Tours</a></li>
    <li className="border-b"><a>Blogs</a></li>
    <li className="border-b"><a>About Us</a></li>

    <a
      href="tel:0000000000"
      className="flex items-center gap-2 border border-(--primary) rounded-full px-5 py-3 mt-4"
    >
      <Search size={18} className="text-(--primary)" />
      Call Now
    </a>
  </ul>
</div>
    </>
  );
}
