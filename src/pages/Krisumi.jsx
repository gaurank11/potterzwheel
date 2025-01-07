import React from 'react';
import PropertyDetails from '../components/Properties_Details';

const Krisumi = () => {
  const images = [
    '/Krisumi1.png',
    '/Krisumi2.png',
    '/Krisumi3.png',
    '/Krisumi4.png',
    '/Krisumi5.png',
    '/Krisumi6.png',
  ];

  const description = `
    Welcome to Waterside Residences, where luxury living merges with holistic wellness in the heart of Gurgaon's Sector 36A.
    Embrace a lifestyle of opulence and serenity. With premium amenities and picturesque surroundings, Waterside Residences
    offers a sanctuary where comfort meets tranquility.
    A masterpiece, where the meticulously crafted exteriors by Nikken Housing System seamlessly blend with the opulent interiors
    envisioned by Aoyama Nomura Design (A.N.D). Innovation, expertise, and creativity have shaped the captivating Waterside
    Residences offering you a fine living experience.
  `;

  const mapImage = '/Krisumi_location.png';
  const mapUrl = 'https://www.google.com/maps/place/Krisumi+Sales+Lounge/@28.4192531,76.9649014,17z/data=!3m1!4b1!4m6!3m5!1s0x390d3d63b59907ff:0x92efb89d2926d143!8m2!3d28.4192485!4d76.9697723!16s%2Fg%2F11f57wszxq?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D';

  const amenities = [
    { name: 'Round the Clock Security', icon: '/Amenities/a1.svg' },
    { name: '24 Hours Electricity and Waterm', icon: '/Amenities/a2.svg' },
    { name: '100% Power Back-up', icon: '/Amenities/a3.svg' },
    { name: 'Piped Gas System', icon: '/Amenities/a4.svg' },
    { name: 'Open & Covered Parking Spaces', icon: '/Amenities/a5.svg' },
    { name: 'All the Lobbies are Air-conditioned', icon: '/Amenities/a6.svg' },
    { name: 'High Speed Elevators with Service Lift', icon: '/Amenities/a7.svg' },
    { name: 'Swimming Pools', icon: '/Amenities/a8.svg' },
    { name: 'Convenience Store', icon: '/Amenities/a9.svg' },
    { name: 'Landspace & Green Areas', icon: '/Amenities/a10.svg' },
    { name: 'Water Features', icon: '/Amenities/a11.svg' },
    { name: 'Seating Areas', icon: '/Amenities/a12.svg' },
    { name: 'Resident’s Lounge/ Gym/ Business Centre', icon: '/Amenities/a13.svg' },
  ];

  const location =[
    { name: '2 Widest Roads in Gurugram’s NPR and CPR', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/the-confluence-SPR-CPR.svg' },
    { name: '3 Minute Drive to NH-48', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/Connected-to-NH-48.svg' },
    { name: 'Planned Mass Rapid Transit System along NPR and CPR', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/planned-mass-rapid.svg' },
    { name: 'Encircled by 220 acres of Green Zone and a 50-metre Green Belt', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/surrounded-by-220.svg' },
    { name: 'Adjacent to Gurgram’s Newest Business Centre', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/adjacent-to-global.svg' },
    { name: 'Unhindered Connectivity to IGI Airport', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/Near-IGI-Airport.svg' },
  ];
  const locationDescription = `
    Nestled in sector 36-A, Waterside Residences on Dwarka Expressway offers unmatched connectivity to Delhi and other sectors of Gurugram.
  `;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted successfully!');
  };
  const handleOpenInMap = (mapUrl) => {
    window.open(mapUrl, '_blank'); 
  };
  
  return (
    <PropertyDetails
      images={images}
      description={description}
      mapImage={mapImage}
      mapUrl={mapUrl} 
      onFormSubmit={handleFormSubmit}
      amenities={amenities}
      locationDescription={locationDescription}
      location = {location}
      handleOpenInMap={handleOpenInMap}
    />
  );
};

export default Krisumi;
