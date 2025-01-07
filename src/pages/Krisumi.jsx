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

  const locationDescription = `
    Nestled in sector 36-A, Waterside Residences on Dwarka Expressway offers unmatched connectivity to Delhi and other sectors of Gurugram.
  `;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <PropertyDetails
      images={images}
      description={description}
      mapImage={mapImage}
      onFormSubmit={handleFormSubmit}
      amenities={amenities}
      locationDescription={locationDescription}
    />
  );
};

export default Krisumi;
