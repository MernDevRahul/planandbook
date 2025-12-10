"use client";
import React, { useState } from "react";
import FiltersPanel from "./FiltersPanel";
import TripCard from "./TripCard";

const trips = [
  {
    id: 1,
    img: "/banner/international-banner.webp",
    title: "8 Days Philippines Community Trip - Best of Palawan",
    nights: "7N/8D",
    airport: "Manila airport - Cebu airport",
    dates: ["10 Dec", "17 Dec"],
    oldPrice: "1,24,999",
    newPrice: "79,999",
  },
  {
    id: 2,
    img: "/banner/international-banner.webp",
    title: "3 Days Tirthan Valley Expedition: A Nature Lover’s Retreat",
    nights: "2N/3D",
    airport: "Delhi - Delhi",
    dates: ["12 Dec"],
    oldPrice: "12,499",
    newPrice: "9,999",
  },
  {
    id: 3,
    img: "/banner/international-banner.webp",
    title: "8 Days Philippines Community Trip - Best of Palawan",
    nights: "7N/8D",
    airport: "Manila airport - Cebu airport",
    dates: ["10 Dec", "17 Dec"],
    oldPrice: "1,24,999",
    newPrice: "79,999",
  },
  {
    id: 4,
    img: "/banner/international-banner.webp",
    title: "3 Days Tirthan Valley Expedition: A Nature Lover’s Retreat",
    nights: "2N/3D",
    airport: "Delhi - Delhi",
    dates: ["12 Dec"],
    oldPrice: "12,499",
    newPrice: "9,999",
  },
  {
    id: 5,
    img: "/banner/international-banner.webp",
    title: "8 Days Philippines Community Trip - Best of Palawan",
    nights: "7N/8D",
    airport: "Manila airport - Cebu airport",
    dates: ["10 Dec", "17 Dec"],
    oldPrice: "1,24,999",
    newPrice: "79,999",
  },
  {
    id: 6,
    img: "/banner/international-banner.webp",
    title: "3 Days Tirthan Valley Expedition: A Nature Lover’s Retreat",
    nights: "2N/3D",
    airport: "Delhi - Delhi",
    dates: ["12 Dec"],
    oldPrice: "12,499",
    newPrice: "9,999",
  },
  {
    id: 7,
    img: "/banner/international-banner.webp",
    title: "8 Days Philippines Community Trip - Best of Palawan",
    nights: "7N/8D",
    airport: "Manila airport - Cebu airport",
    dates: ["10 Dec", "17 Dec"],
    oldPrice: "1,24,999",
    newPrice: "79,999",
  },
  {
    id: 8,
    img: "/banner/international-banner.webp",
    title: "3 Days Tirthan Valley Expedition: A Nature Lover’s Retreat",
    nights: "2N/3D",
    airport: "Delhi - Delhi",
    dates: ["12 Dec"],
    oldPrice: "12,499",
    newPrice: "9,999",
  },
  {
    id: 9,
    img: "/banner/international-banner.webp",
    title: "8 Days Philippines Community Trip - Best of Palawan",
    nights: "7N/8D",
    airport: "Manila airport - Cebu airport",
    dates: ["10 Dec", "17 Dec"],
    oldPrice: "1,24,999",
    newPrice: "79,999",
  },
  {
    id: 10,
    img: "/banner/international-banner.webp",
    title: "3 Days Tirthan Valley Expedition: A Nature Lover’s Retreat",
    nights: "2N/3D",
    airport: "Delhi - Delhi",
    dates: ["12 Dec"],
    oldPrice: "12,499",
    newPrice: "9,999",
  },
  {
    id: 11,
    img: "/banner/international-banner.webp",
    title: "8 Days Philippines Community Trip - Best of Palawan",
    nights: "7N/8D",
    airport: "Manila airport - Cebu airport",
    dates: ["10 Dec", "17 Dec"],
    oldPrice: "1,24,999",
    newPrice: "79,999",
  },
  {
    id: 12,
    img: "/banner/international-banner.webp",
    title: "3 Days Tirthan Valley Expedition: A Nature Lover’s Retreat",
    nights: "2N/3D",
    airport: "Delhi - Delhi",
    dates: ["12 Dec"],
    oldPrice: "12,499",
    newPrice: "9,999",
  },
  {
    id: 13,
    img: "/banner/international-banner.webp",
    title: "8 Days Philippines Community Trip - Best of Palawan",
    nights: "7N/8D",
    airport: "Manila airport - Cebu airport",
    dates: ["10 Dec", "17 Dec"],
    oldPrice: "1,24,999",
    newPrice: "79,999",
  },
  {
    id: 14,
    img: "/banner/international-banner.webp",
    title: "3 Days Tirthan Valley Expedition: A Nature Lover’s Retreat",
    nights: "2N/3D",
    airport: "Delhi - Delhi",
    dates: ["12 Dec"],
    oldPrice: "12,499",
    newPrice: "9,999",
  },
  {
    id: 15,
    img: "/banner/international-banner.webp",
    title: "8 Days Philippines Community Trip - Best of Palawan",
    nights: "7N/8D",
    airport: "Manila airport - Cebu airport",
    dates: ["10 Dec", "17 Dec"],
    oldPrice: "1,24,999",
    newPrice: "79,999",
  },
  {
    id: 16,
    img: "/banner/international-banner.webp",
    title: "3 Days Tirthan Valley Expedition: A Nature Lover’s Retreat",
    nights: "2N/3D",
    airport: "Delhi - Delhi",
    dates: ["12 Dec"],
    oldPrice: "12,499",
    newPrice: "9,999",
  },
  {
    id: 17,
    img: "/banner/international-banner.webp",
    title: "8 Days Philippines Community Trip - Best of Palawan",
    nights: "7N/8D",
    airport: "Manila airport - Cebu airport",
    dates: ["10 Dec", "17 Dec"],
    oldPrice: "1,24,999",
    newPrice: "79,999",
  },
  {
    id: 18,
    img: "/banner/international-banner.webp",
    title: "3 Days Tirthan Valley Expedition: A Nature Lover’s Retreat",
    nights: "2N/3D",
    airport: "Delhi - Delhi",
    dates: ["12 Dec"],
    oldPrice: "12,499",
    newPrice: "9,999",
  },
  {
    id: 19,
    img: "/banner/international-banner.webp",
    title: "8 Days Philippines Community Trip - Best of Palawan",
    nights: "7N/8D",
    airport: "Manila airport - Cebu airport",
    dates: ["10 Dec", "17 Dec"],
    oldPrice: "1,24,999",
    newPrice: "79,999",
  },
  {
    id: 20,
    img: "/banner/international-banner.webp",
    title: "3 Days Tirthan Valley Expedition: A Nature Lover’s Retreat",
    nights: "2N/3D",
    airport: "Delhi - Delhi",
    dates: ["12 Dec"],
    oldPrice: "12,499",
    newPrice: "9,999",
  },
  {
    id: 21,
    img: "/banner/international-banner.webp",
    title: "8 Days Philippines Community Trip - Best of Palawan",
    nights: "7N/8D",
    airport: "Manila airport - Cebu airport",
    dates: ["10 Dec", "17 Dec"],
    oldPrice: "1,24,999",
    newPrice: "79,999",
  },
  {
    id: 22,
    img: "/banner/international-banner.webp",
    title: "3 Days Tirthan Valley Expedition: A Nature Lover’s Retreat",
    nights: "2N/3D",
    airport: "Delhi - Delhi",
    dates: ["12 Dec"],
    oldPrice: "12,499",
    newPrice: "9,999",
  },
];

const UpcomingTrip = () => {
  const [duration, setDuration] = useState([0, 14]);
  const [budget, setBudget] = useState([8000, 300000]);
  return (
    <div className="w-full mx-auto px-4 xl:px-12 py-8 flex flex-col md:flex-row gap-6 bg-white">
      {/* LEFT STICKY FILTERS */}
      <div className="w-[380px] hidden md:block sticky top-35 h-fit shrink-0">
        <FiltersPanel
          duration={duration}
          setDuration={setDuration}
          budget={budget}
          setBudget={setBudget}
        />
      </div>

      {/* RIGHT SCROLLABLE CONTENT */}
      <div className="flex-1">
        <div className="flex flex-col flex-start mb-5 mt-1 lg:mb-[30px] w-full bg-white sticky top-30 z-10">
        <h2 className="xl:mb-2 text-(--primary) text-2xl lg:text-4xl font-bold lg:leading-[47px] text-shadow-md text-shadow-black/15">
          All Upcoming Trips
        </h2>
        {/* <hr /> */}
      </div>

        <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-5">
          {trips.map((trip) => (
            <TripCard key={trip.id} data={trip} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default UpcomingTrip;
