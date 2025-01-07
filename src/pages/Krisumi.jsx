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
    'Swimming Pool',
    'Gymnasium',
    'Spa & Sauna',
    'Clubhouse',
    'Kids Play Area',
    '24x7 Security',
    'Amphitheatre',
    'Walking Trails',
  ];

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
    />
  );
};

export default Krisumi;
