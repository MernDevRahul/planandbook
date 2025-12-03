import React from "react";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

const EmployeeCard = ({ image, name, role, about, links }) => {
  return (
    <div className=" p-6 w-full max-w-sm mx-auto">
      
      {/* Image */}
      <div className="w-full flex justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-50 h-50 object-cover rounded-full shadow-md"
        />
      </div>

      {/* Name */}
      <h2 className="text-center text-2xl font-bold text-gray-900">
        {name}
      </h2>

      {/* Role */}
      <p className="text-center text-gray-500 text-md mt-1 font-medium">
        {role}
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-3 mt-4 text-gray-600">
        {links?.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            <Image src="https://wanderon-images.gumlet.io//instagram.svg" className="" width={30} height={30} alt="any"/>
          </a>
        )}

        {links?.instagram && (
          <a href={links.instagram} target="_blank" rel="noopener noreferrer">
            <Image src="https://wanderon-images.gumlet.io//linkedin.svg" className="" width={30} height={30} alt="any"/>
          </a>
        )}
      </div>

      <div className="mt-3 w-full flex justify-center">
        <div className="bg-(--primary) w-[150px] h-[3px] rounded-2xl"></div>
      </div>

      {/* About */}
      <p className="text-center text-gray-600 mt-5 text-sm leading-relaxed px-2">
        {about}
      </p>
    </div>
  );
};

export default EmployeeCard;
