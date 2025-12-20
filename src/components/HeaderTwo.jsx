import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeaderTwo = () => {
  return (
    <div className="hidden bg-(--primary) h-[60px] lg:flex justify-center items-center font-normal fixed top-[60px] w-full text-white z-200">
      <ul className="flex items-center list-none ms-[51px] gap-5 xl:gap-10 text-[14px] xl:font-[16px] leading-[19px]">
        <li>
          <div className="relative group cursor-pointer">
  {/* Trigger */}
  <div tabIndex={0} className="m-1 flex items-center justify-center gap-1">
    <Link href="/international-packages" className="text-[15px]">International Trips</Link>
    <ChevronDown size={18} className="transition-transform duration-400 group-hover:rotate-180"/>
  </div>

  {/* Dropdown */}
  <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white text-black shadow-lg rounded-md mt-3 w-[500px] p-6 transition-all duration-300">
    <ul className="grid grid-cols-3 gap-y-2">

      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Europe</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Thailand</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Bali</Link></li>

      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Philippines</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Malaysia</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">South Africa</Link></li>

      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">France</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Turkey</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Vietnam</Link></li>

      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Japan</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Sri Lanka</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Kazakhstan</Link></li>

      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Maldives</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Kenya</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">New Zealand</Link></li>

      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Australia</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Dubai</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Singapore</Link></li>

      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Switzerland</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Spain</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Mauritius</Link></li>

    </ul>
  </div>
</div>
        </li>
         <li>
          <div className="relative group cursor-pointer">
  {/* Trigger */}
  <div tabIndex={0} className="m-1 flex items-center justify-center gap-1">
    <Link href="/india-packages" className="text-[15px]">India Trips</Link>
    <ChevronDown size={18} className="transition-transform duration-400 group-hover:rotate-180"/>
  </div>

  {/* Dropdown */}
  <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white text-black shadow-lg rounded-md mt-3 w-[400px] p-6 transition-all duration-300">
    <ul className="grid grid-cols-2 gap-y-3">

      <li><Link className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded" href="/rajasthan">Rajasthan</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Kashmir</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Meghalaya</Link></li>

      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Sikkim</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Andaman</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Spiti</Link></li>

      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Ladakh</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Nagaland</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Kerela</Link></li>

      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Arunachal Pradesh</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Uttrakhand</Link></li>
      <li><Link className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded" href="/himachal-pradesh">Himachal Pradesh</Link></li>

      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Weekend Getaways</Link></li>
    </ul>
  </div>
</div>
        </li>
         <li>
           <div className="relative group cursor-pointer">
  {/* Trigger */}
  <div tabIndex={0} className="m-1 flex items-center justify-center gap-1">
    <Link href="/upcoming-trips" className="text-[15px]">Group Trous</Link>
    <ChevronDown size={18} className="transition-transform duration-400 group-hover:rotate-180"/>
  </div>

  {/* Dropdown */}
  <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white text-black shadow-lg rounded-md mt-3 w-[490px] p-6 transition-all duration-300">
    <ul className="grid grid-cols-3 gap-y-3">

      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Europe</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Bali</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Vietnam</Link></li>

      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Sri Lanka</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Japan</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Philippines</Link></li>

      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Dubai</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Thailand</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Georgia</Link></li>

      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Bhutan</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Arunachal pradesh</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Andaman</Link></li>

      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Spiti</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Himachal Pradesh</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Ladakh</Link></li>

      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Meghalaya</Link></li>
      <li><Link href="/" className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Kazakhstan</Link></li>
    </ul>
  </div>
</div>
        </li>
        <li className="cursor-pointer"><Link href="/" className="text-[15px]">Honeymoon Packages</Link></li>
        <li className="cursor-pointer"><Link href="/" className="text-[15px]">Coorporate Tours</Link></li>
        {/* <li className="flex items-center gap-0.5 cursor-pointer">
          <div>
            <img src="/png/gift.png" alt="gift-png" className="h-4" />
          </div>
          <div>Gifts Cards</div>
        </li> */}
        <li className="cursor-pointer flex items-center relative">
          <div><Link href="/" className="text-[15px]">Events & Festivals</Link></div>
          <p className="absolute text-yellow-300 font-semibold -top-1 -right-[30px] text-[12px]">New</p>
        </li>
      </ul>
    </div>
  );
};

export default HeaderTwo;
