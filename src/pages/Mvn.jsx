import React from 'react';
import PropertyDetails from '../components/Properties_Details';

const Mvn = () => {
  const images = [
    '/mvn/m2.jpg',
    '/mvn/m4.png',
    '/mvn/m5.png',
    '/mvn/m1.jpg',
    '/mvn/m3.jpg',
    '/mvn/m6.png',
  ];

  const details = "MVN MALL";

  const description = `
   The mall is designed to be the ultimate destination for both families and tourists, offering a vibrant and inviting atmosphere. With the airport just a stone's throw away, this destination also has its own luxury hotel for tourists visiting from far & wide.

There are dedicated floors thoughtfully curated to focus on a specific category, such as apparel, furniture, dining, and entertainment, ensuring a seamless and well-organized shopping experience.
  `;

  const price = ''

  const mapImage = '/mvn/mvn_map.png';
  const mapUrl = 'https://www.google.com/maps/place/Krisumi+Sales+Lounge/@28.4192531,76.9649014,17z/data=!3m1!4b1!4m6!3m5!1s0x390d3d63b59907ff:0x92efb89d2926d143!8m2!3d28.4192485!4d76.9697723!16s%2Fg%2F11f57wszxq?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D';

  const amenities = [
    { name: 'Round the Clock Security', icon: '/Amenities/a1.svg' },
    { name: '24 Hours Electricity and Waterm', icon: '/Amenities/a2.svg' },
    { name: '100% Power Back-up', icon: '/Amenities/a3.svg' },
    { name: 'Open & Covered Parking Spaces', icon: '/Amenities/a5.svg' },
    { name: 'All the Lobbies are Air-conditioned', icon: '/Amenities/a6.svg' },
    { name: 'Swimming Pools', icon: '/Amenities/a8.svg' },


   
  ];

  const location =[
    { name: '5.4 Kms Drive to NH-48', icon: 'https://mvnmall.in/images/icons/highway.svg' },
    { name: '29.7 Kms from IGI Airport', icon: 'https://mvnmall.in/images/icons/airport.svg' },
    { name: '10.5 Kms from Gurgaon’s railway station', icon: 'https://mvnmall.in/images/icons/cyber-city.svg' },
    { name: '17.4 Kms from DLF City Center', icon: 'https://mvnmall.in/images/icons/railway-station.svg' },
    { name: 'Adjacent to Gurgram’s Newest Business Centre', icon: 'https://mvnmall.in/images/icons/city-center.svg' },

  ];


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
      price={price}
      mapImage={mapImage}
      mapUrl={mapUrl} 
      onFormSubmit={handleFormSubmit}
      amenities={amenities}
    
      location = {location}
      handleOpenInMap={handleOpenInMap}
      details = {details}
    />
  );
};

export default Mvn;
