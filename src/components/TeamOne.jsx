import React from "react";
import EmployeeCard from "./EmployeeCard";

const TeamOne = () => {
  return (
    <div>
      <h2 className="w-full text-center font-semibold text-(--primary) lg:my-6 text-2xl lg:text-[2vw] text-shadow-lg">
        Meet Our Team: The People Behind Every Beautiful Journey
      </h2>
      <div className="px-4 flex flex-nowrap lg:gap-1 overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:px-[10vw] lg:grid lg:grid-cols-3 justify-items-center"> 
        <EmployeeCard
        image="https://randomuser.me/api/portraits/men/41.jpg"
        name="Rahul"
        role="Senior Developer"
        about="Passionate full-stack developer with 5+ years of experience in building scalable web applications."
        links={{
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        }}
      />
        <EmployeeCard
        image="https://randomuser.me/api/portraits/men/41.jpg"
        name="Shadab"
        role="Senior Developer"
        about="Passionate full-stack developer with 5+ years of experience in building scalable web applications."
        links={{
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        }}
      />
        <EmployeeCard
        image="https://randomuser.me/api/portraits/men/41.jpg"
        name="Gaurav"
        role="Senior Developer"
        about="Passionate full-stack developer with 5+ years of experience in building scalable web applications."
        links={{
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        }}
      />
        <EmployeeCard
        image="https://randomuser.me/api/portraits/men/41.jpg"
        name="Pushpraj"
        role="Senior Developer"
        about="Passionate full-stack developer with 5+ years of experience in building scalable web applications."
        links={{
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        }}
      />
      </div>
    </div>
  );
};

export default TeamOne;
