import React from 'react';
import PropertyDetails from '../components/Properties_Details';

const Trevoc = () => {
  const images = [
    '/trevoc/t1.jpeg',
    '/trevoc/t2.jpeg',
    '/trevoc/t3.jpeg',
    '/trevoc/t4.jpeg',
    '/trevoc/t5.jpeg',
    '/trevoc/t6.jpeg',
  ];


  const brochureUrl = "/trevoc/TREVOC.pdf"; 
  const details = "Trevoc Royal Residences";

  const description = `
    Trevoc Royal Residences harmonises modernity with sophistication, integrating smart home automation for ultimate convenience, top-notch security for peace of mind, and ample parking with EV charging stations, all embodying the future of sustainable luxury. The lifestyle here is second to none, with exclusive amenities like a clubhouse featuring fine dining restaurants and bars, a spa & salon, meditation and relaxation zones, and weather-controlled infinity pools. For those who seamlessly blend work and leisure, the co-working spaces within the development provide the ideal environment for productivity and relaxation. Discover the unparalleled lifestyle at Trevoc Royal Residences, where every detail is designed for those who demand the best.
  `;

  const price = ''

  const mapImage = '/trevoc/t_map.jpeg';
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
    { name: '2 Widest Roads in Gurugram’s NPR and CPR', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/the-confluence-SPR-CPR.svg' },
    { name: '3 Minute Drive to NH-48', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/Connected-to-NH-48.svg' },
    { name: 'Planned Mass Rapid Transit System along NPR and CPR', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/planned-mass-rapid.svg' },
    { name: 'Encircled by 220 acres of Green Zone and a 50-metre Green Belt', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/surrounded-by-220.svg' },
    { name: 'Adjacent to Gurgram’s Newest Business Centre', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/adjacent-to-global.svg' },
    { name: 'Unhindered Connectivity to IGI Airport', icon: 'https://krisumi.com/project/waterside-residences/images/icon/location-icon/Near-IGI-Airport.svg' },
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
      pdfUrl ={brochureUrl}
      location = {location}
      handleOpenInMap={handleOpenInMap}
      details = {details}
    />
  );
};

export default Trevoc;
