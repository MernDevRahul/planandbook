import { ArrowUpRight, Calendar, Plane } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TripCard = ({ data }) => {
  return (
    <Link
      href="/"
      className="bg-white rounded-xl group shadow flex gap-4 hover:shadow-lg transition"
    >
      {/* IMAGE */}
      <div className="relative w-[170px] h-[150px] rounded-l-xl overflow-hidden z-0">
        <Image src={data.img} alt="trip" fill className="object-cover" />
      </div>

      {/* TEXT */}
      <div className="flex flex-col flex-1 pt-4">
        <h3 className="font-semibold text-[18px] line-clamp-2 text-black">{data.title}</h3>

        <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
          <Plane size={15} /> {data.airport}
        </p>

        <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
          <Calendar size={15} /> {data.dates.join(", ")}
        </p>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span
            className="relative text-black/70 text-sm inline-block before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-full before:h-0.5 before:bg-red-600 before:-rotate-6 before:-translate-y-1/2" >
            ₹{data.oldPrice}
          </span>

          <span className="text-lg font-bold text-(--primary) text-shadow-xs">
            ₹{data.newPrice}
          </span>
        </div>
      </div>

      {/* Arrow Button */}
      <button className="w-10 h-10 rounded-full border border-(--primary)  flex items-center justify-center group-hover:bg-(--primary) transition m-4">
        <ArrowUpRight
          size={18}
          className="text-(--primary) group-hover:text-white"
        />
      </button>
    </Link>
  );
};

export default TripCard;
