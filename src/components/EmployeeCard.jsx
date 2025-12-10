import React from "react";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

const EmployeeCard = ({ image, name, role, about, links }) => {
  return (
    <div className=" p-6 w-full max-w-sm mx-auto">
      
      {/* Image */}
      <div className="w-20 h-20 lg:w-50 lg:h-50 relative mb-4 mx-auto">
        <Image
          src={image}
          alt={name}
          fill
          className=" object-cover rounded-full shadow-xl"
        />
      </div>

      {/* Name */}
      <h2 className="text-center text-xl lg:text-3xl font-bold text-gray-700">
        {name}
      </h2>

      {/* Role */}
      <p className="text-center text-gray-500 text-lg lg:text-xl mt-1 font-medium">
        {role}
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-3 mt-4 text-gray-600">
  {links?.linkedin && (
    <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
      <div className="w-6 h-6 lg:w-10 lg:h-10 relative">
        <Image
          src="https://wanderon-images.gumlet.io//linkedin.svg"
          alt="LinkedIn"
          fill
          className="object-contain"
        />
      </div>
    </a>
  )}

  {links?.instagram && (
    <a href={links.instagram} target="_blank" rel="noopener noreferrer">
      <div className="w-6 h-6 lg:w-10 lg:h-10 relative">
        <Image
          src="https://wanderon-images.gumlet.io//instagram.svg"
          alt="Instagram"
          fill
          className="object-contain"
        />
      </div>
    </a>
  )}
</div>

      <div className="mt-3 w-full flex justify-center">
        <div className="bg-(--primary) w-[150px] h-[3px] rounded-2xl"></div>
      </div>

      {/* About */}
      <p className="text-center text-gray-600 mt-5 text-md lg:text-lg leading-relaxed px-2">
        {about}
      </p>
    </div>
  );
};

export default EmployeeCard;
