import { ArrowUpRight, Calendar, Plane } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TripCard = ({data}) => {
  return (
   <Link href="/" className="bg-white rounded-xl shadow flex gap-4 p-4 hover:shadow-lg transition">

      {/* IMAGE */}
      <div className="relative w-[180px] h-[140px] rounded-lg overflow-hidden">
        <Image src={data.img} alt="trip" fill className="object-cover" />
      </div>

      {/* TEXT */}
      <div className="flex flex-col flex-1">
        <h3 className="font-semibold text-[15px] line-clamp-2">{data.title}</h3>

        <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
          <Plane size={15} /> {data.airport}
        </p>

        <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
          <Calendar size={15} /> {data.dates.join(", ")}
        </p>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-black/70 line-through decoration-red-400 decoration-2 text-sm">₹{data.oldPrice}</span>
          <span className="text-lg font-bold text-(--primary) text-shadow-xs">₹{data.newPrice}</span>
        </div>
      </div>

      {/* Arrow Button */}
      <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">
        <ArrowUpRight size={18} />
      </button>

    </Link>
  )
}

export default TripCard
