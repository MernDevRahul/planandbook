import BannerOne from "./components/BannerOne";
import CardStack from "./components/CardStack";
import ContactOne from "./components/ContactOne";
import CtaOne from "./components/CtaOne";
import Destinations from "./components/Destinations";
import ExploreIndia from "./components/ExploreIndia";
import ExploreInternational from "./components/ExploreInternational";
import Footer from "./components/Footer";
import RatingOne from "./components/RatingOne";
import SectionOne from "./components/SectionOne";
import Upcoming from "./components/Upcoming";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
    <div className="">
      <BannerOne/>
      <RatingOne/>
      <Destinations/>
      <SectionOne/>
      <ExploreIndia/>
      <ExploreInternational />
      <Upcoming/>
      <ContactOne/> 
      <WhyChoose/>
      <CtaOne/>
      <Footer/>
      <CardStack />
    </div>
  );
}
