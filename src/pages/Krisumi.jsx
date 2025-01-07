import React from 'react';
import PropertyDetails from '../components/Properties_Details';

const App = () => {
  const images = [
    '/Krisumi1.png',
    '/Krisumi2.png',
    '/Krisumi3.png',
    '/Krisumi4.png',
    '/Krisumi5.png',
    '/Krisumi6.png',
   
  ];
  const description = 'This is a luxurious property located in the heart of the city.';
  const mapImage = 'Krisumi_location.png';

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
    />
  );
};

export default App;
