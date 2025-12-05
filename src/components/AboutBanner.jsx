import Image from 'next/image'
import React from 'react'

const AboutBanner = () => {
  return (
    <div className="relative w-full h-[40vh] lg:h-[80vh]">
      <Image src="/banner/about-us.jpg" alt="About Us Banner" fill className="object-cover" priority />
    </div>
  )
}

export default AboutBanner
