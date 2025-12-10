import React from 'react'
import BannerTwo from 'src/components/BannerTwo'
import UpcomingTrip from 'src/components/UpcomingTrip'

const Main = () => {
  return (
    <div>
      <BannerTwo image="/banner/India-banner.webp" heading="Best India Holiday Packages at Unbeatable Prices" subHeading="Tailored Trips for Every Traveler" />
      <UpcomingTrip/>
    </div>
  )
}

export default Main
