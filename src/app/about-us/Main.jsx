import React from 'react'
import AboutBanner from '../components/AboutBanner'
import AboutUsOne from '../components/AboutUsOne'
import AboutUsTwo from '../components/AboutUsTwo'
import TeamOne from '../components/TeamOne'
import Footer from '../components/Footer'
import BrandOne from '../components/BrandOne'
import CtaOne from '../components/CtaOne'

const Main = () => {
  return (
    <div className='relative w-full h-[40vh] lg:h-[80vh] sm:mt-[60px] md:mt-[60px] lg:mt-[120px]'>
      <AboutBanner/>
      <AboutUsOne/>
      <TeamOne/>
      <AboutUsTwo/>
      <BrandOne/>
      <CtaOne/>
      <Footer/>
    </div>
  )
}

export default Main
