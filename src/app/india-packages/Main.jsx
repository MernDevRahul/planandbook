import React from 'react'
import BannerTwo from '../components/BannerTwo'
import DestinationTwo from '../components/DestinationTwo'
import BestSeller from '../components/BestSeller'

const Main = () => {
  return (
    <div className='overflow-x-hidden'>
      <BannerTwo heading="Book India Holiday Packages- Unbeatable Deals At Best Prices"
      subHeading="India Holiday Packages Crafted For Every Dream, Every Destination"
      />
      <DestinationTwo/>
      <BestSeller/>
    </div>
  )
}

export default Main
