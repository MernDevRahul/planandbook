"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const Main = () => {
  const { slug } = useParams();
  return (
    <div className='relative w-full h-[40vh] lg:h-[80vh] sm:mt-[60px] md:mt-[60px] lg:mt-[120px] text-black/60'>
      {slug}
    </div>
  )
}

export default Main
