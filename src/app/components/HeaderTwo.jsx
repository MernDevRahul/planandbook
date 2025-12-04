import Link from "next/link";
import React from "react";

const HeaderTwo = () => {
  return (
    <div className="hidden bg-(--primary) h-[60px] lg:flex justify-center items-center font-normal fixed top-[60px] w-full text-white z-200">
      <ul className="flex items-center list-none ms-[51px] gap-5 xl:gap-10 text-[14px] xl:font-[16px] leading-[19px]">
        <li>
          <div className="relative group cursor-pointer">
  {/* Trigger */}
  <div tabIndex={0} className="m-1">
    <Link href="/International-trips">International Trips</Link>
  </div>

  {/* Dropdown */}
  <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white text-black shadow-lg rounded-md mt-3 w-[550px] p-6 transition-all duration-300">
    <ul className="grid grid-cols-3 gap-y-2 gap-x-10">

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Europe</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Thailand</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Bali</a></li>

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Philippines</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Malaysia</a></li>
      <li><a className="block no-underline text-[13px] leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">South Africa</a></li>

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">France</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Turkey</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Vietnam</a></li>

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Japan</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Sri Lanka</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Kazakhstan</a></li>

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Maldives</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Kenya</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">New Zealand</a></li>

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Australia</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Dubai</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Singapore</a></li>

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Switzerland</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Spain</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Mauritius</a></li>

    </ul>
  </div>
</div>
        </li>
         <li>
          <div className="relative group cursor-pointer">
  {/* Trigger */}
  <div tabIndex={0} className="m-1">
    <Link href="/india-packages">India Trips</Link>
  </div>

  {/* Dropdown */}
  <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white text-black shadow-lg rounded-md mt-3 w-[450px] p-6 transition-all duration-300">
    <ul className="grid grid-cols-2 gap-y-3 gap-x-10">

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Rajasthan</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Kashmir</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Meghalaya</a></li>

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Sikkim</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Andaman</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Spiti</a></li>

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Ladakh</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Nagaland</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Kerela</a></li>

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Arunachal Pradesh</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Uttrakhand</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Himachal Pradesh</a></li>

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Weekend Getaways</a></li>
    </ul>
  </div>
</div>
        </li>
         <li>
           <div className="relative group cursor-pointer">
  {/* Trigger */}
  <div tabIndex={0} className="m-1">
    Group Trous
  </div>

  {/* Dropdown */}
  <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white text-black shadow-lg rounded-md mt-3 w-[490px] p-6 transition-all duration-300">
    <ul className="grid grid-cols-3 gap-y-3 gap-x-10">

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Europe</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Bali</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Vietnam</a></li>

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Sri Lanka</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Japan</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Philippines</a></li>

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Dubai</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Thailand</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Georgia</a></li>

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Bhutan</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Arunachal pradesh</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Andaman</a></li>

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Spiti</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Himachal Pradesh</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Ladakh</a></li>

      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Meghalaya</a></li>
      <li><a className="block no-underline text-[13px] border border-transparent leading-5hover:bg-[#01aed11f] hover:text-(--primary)  hover:border hover:border-(--primary) p-1 rounded">Kazakhstan</a></li>
    </ul>
  </div>
</div>
        </li>
        <li className="cursor-pointer">Honeymoon Packages</li>
        <li className="cursor-pointer">Coorporate Tours</li>
        {/* <li className="flex items-center gap-0.5 cursor-pointer">
          <div>
            <img src="/png/gift.png" alt="gift-png" className="h-4" />
          </div>
          <div>Gifts Cards</div>
        </li> */}
        <li className="cursor-pointer flex items-center relative">
          <div>Events & Festivals</div>
          <p className="absolute text-yellow-300 font-semibold -top-1 -right-[30px] text-[12px]">New</p>
        </li>
      </ul>
    </div>
  );
};

export default HeaderTwo;
