import React from 'react'
import BannerTwo from '../components/BannerTwo'
import DestinationTwo from '../components/DestinationTwo'
import BestSeller from '../components/BestSeller'
import WhyChoose from '../components/WhyChoose'

const Main = () => {
  return (
    <div className='overflow-x-hidden'>
      <BannerTwo heading="Book India Holiday Packages- Unbeatable Deals At Best Prices"
      subHeading="India Holiday Packages Crafted For Every Dream, Every Destination"
      />
      <DestinationTwo/>
      <BestSeller/>
      <WhyChoose/>
    </div>
  )
}

export default Main
