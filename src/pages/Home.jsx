import React from 'react';
import HeroSection from '../components/Hero1';
import AboutUs from '../components/About';
import OurServices from '../components/Services';
import PropertiesToExplore from '../components/Properties';
import ClientsPartners from '../components/Clients';
const Home = () => {
  return (
    <>
    <HeroSection/>
    <AboutUs />
    <OurServices />
    <PropertiesToExplore />
    <ClientsPartners />
    </>
  )
}

export default Home
