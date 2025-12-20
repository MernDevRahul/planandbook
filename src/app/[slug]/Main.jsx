"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlace } from '../redux/features/placeSlice';
import BannerTwo from 'src/components/BannerTwo';
import AboutPlace from 'src/components/AboutPlace';

const Main = () => {
  const { loading, place } = useSelector((state)=>state.place);
  const { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    const data = async()=>{
      await dispatch(fetchPlace(slug))
    }
    data();
  },[dispatch,slug])
  const imageUrl = `http://localhost:6544/${place?.banner[0]?.replace(/\\/g, "/")}`;
  console.log(imageUrl); // Ensure the image URL is correct
  return (
    <div className='relative w-full h-[40vh] lg:h-[80vh] sm:mt-[60px] md:mt-[60px] lg:mt-[120px] text-black/60 bg-white'>
      <BannerTwo heading={`${place?.heading}`}
      subHeading={`${place?.subheading}`}
      image={imageUrl}
      />
      <AboutPlace title={`About ${place?.name} Tour Packages India!`}/>
    </div>
  )
}

export default Main
