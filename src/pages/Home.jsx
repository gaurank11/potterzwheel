import React from 'react';
import HeroSection from '../components/Hero1';
import AboutUs from '../components/About';
import OurServices from '../components/Services';
import PropertiesPage from '../components/Properties';
import ClientsPartners from '../components/Clients';
const Home = () => {
  return (
    <>
    <HeroSection/>
    <PropertiesPage />
    <AboutUs />
    <OurServices />
    <ClientsPartners />
    </>
  )
}

export default Home
