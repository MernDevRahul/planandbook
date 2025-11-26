import BannerOne from "./components/BannerOne";
import ContactOne from "./components/ContactOne";
import CtaOne from "./components/CtaOne";
import Destinations from "./components/Destinations";
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
      <Upcoming/>
      <ContactOne/> 
      <WhyChoose/>
      <CtaOne/>
      <Footer/>
    </div>
  );
}
