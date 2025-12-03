import React from 'react'
import AboutBanner from '../components/AboutBanner'
import AboutUsOne from '../components/AboutUsOne'
import AboutUsTwo from '../components/AboutUsTwo'
import TeamOne from '../components/TeamOne'

const Main = () => {
  return (
    <div className='relative w-full h-[40vh] lg:h-[80vh] sm:mt-[60px] md:mt-[60px] lg:mt-[120px]'>
      <AboutBanner/>
      <AboutUsOne/>
      <AboutUsTwo/>
      <TeamOne/>
    </div>
  )
}

export default Main
