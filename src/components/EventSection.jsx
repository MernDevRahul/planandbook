import Image from "next/image";
import React from "react";

const EventSection = ({ image, link }) => {
  return (
    <div className="mt-20 lg:mt-25 w-full flex items-center justify-center cursor-pointer px-10 md:px-15 lg:px-20 xl:px-40 relative rounded-4xl">
      <a href={link} className="no-underline">
        <Image
          src={image}
          alt="any"
          width={2000}
          height={1000}
          className="w-auto rounded-lg mb-[30px] h-[20vh] sm:w-full sm:h-auto lg:w-auto lg:h-[30vh] xl:h-[45vh] object-cover"
        />
      </a>
    </div>
  );
};

export default EventSection;
