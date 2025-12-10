import React from 'react'
import BannerTwo from '../../components/BannerTwo'
import DestinationTwo from '../../components/DestinationTwo'
import BestSeller from '../../components/BestSeller'
import WhyChoose from '../../components/WhyChoose'
import EventSection from '../../components/EventSection'
import Footer from '../../components/Footer'
import CtaOne from '../../components/CtaOne'
import Faq from '../../components/Faq'
import AllPackages from '../../components/AllPackages'
import Testimonials from 'src/components/Testimonials'
const data=[
  {
    question:"1) Which is the best package in India?",
    answer:"That would depend on what you are looking for: mountains, beaches, culture, or adventure. The most popular choices include Kashmir for natural beauty, Ladakh for adventure, Himachal for scenic hills, Rajasthan for heritage, and Andaman for beaches. We also customize packages to fit your travel style and budget."
  },
  {
    question:"2) What is the best time to visit India?",
    answer:"India has varied climatic conditions depending on the regions. The winter (Oct-Mar) is great for most destinations, summer (Apr-Jun) for Himalayan regions like Ladakh & Spiti, and monsoon (Jul-Sep) for lush getaways like Kerala, Meghalaya, and Goa. The best season depends on where you want to go."
  },
  { 
    question:"3) How do I book a trip with you?",
    answer:"You can book a tour by contacting us directly through our website, WhatsApp, or email. After that, our team will understand your travel preferences, share the best itinerary options, and help you complete your booking securely and quickly."
  },
  {
    question:"4) Do you provide customized travel packages?",
    answer:"Yes, all our packages can be customized. Whether you want a luxury stay, budget travel, adventure activities, or a romantic getaway, we design itineraries tailored to your dates, group size, interests, and budget."
  },
  {
    question:"5) What is included in your tour packages?",
    answer:"Most of the packages contain accommodation, transfers, sightseeing, guided tours, and selected meals. Some destinations also include activities related to trekking, water sports, and cultural experiences. You will be given a detailed inclusion/exclusion list prior to booking."
  },
  {
    question:"6) Are flights included in the package?",
    answer:"Flight tickets are generally not included in any standard packages, but we can arrange them if requested. Our team checks for the best available fares to match your travel dates."
  },
  {
    question:"7) Is your trip safe for solo travelers?",
    answer:"Yes, our trips are completely safe for solo travellers. We offer verified stays, professional drivers, 24/7 assistance and group departures where you are able to travel with other solo participants."
  },
  {
    question:"8) What payment methods do you accept?",
    answer:"We accept UPI, bank transfers, credit/debit cards, and online payment links. A small advance is required to confirm your booking; the rest can be paid in easy installments before travel."
  },
  {
    question:"9) Can I reschedule my trip after booking?",
    answer:"Yes, you can reschedule your trip, provided it's available and the destination policy permits the same. We try our best to offer flexible options, especially in case of emergencies."
  },
  {
    question:"10) Do you provide support during the trip?",
    answer:"Absolutely, our support team keeps in touch with you throughout the trip. Whether it is adjusting the itinerary, preparing transport, or resolving any issue, we're available 24/7 for help."
  },
]

const Main = () => {
  return (
    <div className='overflow-x-hidden'>
      <BannerTwo heading="Best India Holiday Packages at Unbeatable Prices"
      subHeading="Tailored Trips for Every Traveler"
      image="/banner/India-banner.webp"
      />
      <EventSection image={"https://wanderon-images.gumlet.io/ziro-t-d.png"} link="/"/>
      <DestinationTwo/>
      <BestSeller/>
      <AllPackages/>
      <WhyChoose/>
      <Testimonials/>
      <Faq data={data}/>
      <CtaOne/>
      <Footer/>
    </div>
  )
}

export default Main
