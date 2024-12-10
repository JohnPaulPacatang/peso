import React from 'react';
import HowItWorks from '../components/HowItWorks';
import VisionMission from '../components/VissionMission';
import aboutBanner from "../assets/aboutbanner.jpg";
import LogoCarousel from '../components/LogoCarousel';

const Aboutus = () => {
  return (
    <div>
      <div className="w-full pt-40">
        <img src={aboutBanner} alt="About Us Banner" className="w-full h-auto" />
      </div>
      <div className='lg:px-48 px-8'>
        <VisionMission />
      </div>
      <HowItWorks />
      <LogoCarousel />
    </div>
  );
};

export default Aboutus;
