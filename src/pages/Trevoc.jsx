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
    { name: 'Top Security', icon: 'https://www.svgrepo.com/show/383733/security-protection-camera-cctv-video-crime-cyber.svg' },
    { name: 'Ample Parking', icon: 'https://www.svgrepo.com/show/208856/parking-car.svg' },
    { name: 'Smart Automation', icon: 'https://www.svgrepo.com/show/519296/smart-life.svg' },
    { name: 'Concierge Services', icon: 'https://www.svgrepo.com/show/455905/hotel-concierge.svg' },
    { name: 'Infinity Pools', icon: 'https://www.svgrepo.com/show/359888/swimming.svg' },
    { name: 'Gym', icon: 'https://www.svgrepo.com/show/383987/gym-workout.svg' },


   
  ];

  const location =[
    { name: '25 mins to IGI Airport', icon: 'https://www.svgrepo.com/show/490515/airport-departure.svg' },
    { name: '8 mins to Corporate Hubs', icon: 'https://www.svgrepo.com/show/403900/office-building.svg' },
    { name: '2 mins to Sector 56 Metro Station', icon: 'https://www.svgrepo.com/show/490847/metro.svg' },
    { name: '2 mins to Grand Hyatt', icon: 'https://www.svgrepo.com/show/490127/hotel-building.svg' },
    { name: '5 mins to DLF Camellias', icon: 'https://www.svgrepo.com/show/456974/real-estate-building.svg' },
    { name: '5 mins to One Horizon Center', icon: 'https://www.svgrepo.com/show/70483/office-block.svg' },
    
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
