import React from 'react'
import BannerTwo from '../components/BannerTwo'
import DestinationTwo from '../components/DestinationTwo'
import BestSeller from '../components/BestSeller'
import WhyChoose from '../components/WhyChoose'
import EventSection from '../components/EventSection'
import Footer from '../components/Footer'
import CtaOne from '../components/CtaOne'

const Main = () => {
  return (
    <div className='overflow-x-hidden'>
      <BannerTwo heading="Book India Holiday Packages- Unbeatable Deals At Best Prices"
      subHeading="India Holiday Packages Crafted For Every Dream, Every Destination"
      />
      <DestinationTwo/>
      <BestSeller/>
      <EventSection image={"https://wanderon-images.gumlet.io/ziro-t-d.png"} link="/"/>
      <WhyChoose/>
      <CtaOne/>
      <Footer/>
    </div>
  )
}

export default Main
