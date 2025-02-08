import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react'; // Assuming you have lucide-react installed

const PropertiesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900 px-5 md:px-0 mt-6">
      {/* First Row: 1st Column "01 - Featured Listing" with two images next to it */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className='md:p-5 p-3 '>
          <p className="text-6xl font-bold text-right md:text-[78px] text-blue-950">FEATURED</p>
          <p className="text-4xl font-bold text-blue-950 mt-2 text-right md:text-[45px]">LISTINGS</p>
          {/* View All Properties button */}
          <button
  className="mt-6 px-6 py-3 bg-transparent border-2 border-black text-black font-semibold rounded-lg 
             hover:bg-blue-950 hover:text-white transition flex items-center space-x-2 mx-auto md:text-2xl"
  onClick={() => navigate('/properties')}
>
  <span>View All Properties</span>
  <Plus size={20} />
</button>

        </div>

        {/* Two images in the next two columns */}
        {[
          { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Krisumi_Homepage.png", name: "KRISUMI PROPERTIES", link: "/Krisumi", price: "$500,000" },
          { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/mvn/overview_img.jpg", name: "MVN PROPERTIES", link: "/mvn", price: "$750,000" },
        ].map((property, index) => (
          <div key={index} className="relative group cursor-pointer w-full">
            {/* Image */}
            <img
              src={property.img}
              alt={property.name}
              className="w-full h-auto md:h-80 object-cover rounded-md"
              onClick={() => navigate(property.link)}
            />

            {/* Mobile View: Details Below the Image */}
            <div className="md:hidden flex flex-col items-left mx-6 text-left mt-3">
              <p className="text-xl font-bold text-black">Starting From - {property.price}</p>
              <p className="text-md text-gray-700">{property.name}</p>
              <button
                className="mt-3 px-6 py-2 w-1/2 mb-4 bg-transparent border-black border-2 text-black font-semibold hover:bg-black transition"
                onClick={() => navigate(property.link)}
              >
                View More
              </button>
            </div>
           {/* Default: Price & Property Name in White Text */}
           <div className="absolute bottom-4 left-4 text-white text-lg font-semibold 
                hidden lg:block md:group-hover:opacity-0 transition-opacity duration-300">
               <p>{property.price}</p>
               <p>{property.name}</p>
          </div>
            {/* Hover Effect: Name in White Strip, View Details in Black Strip */}
            <div className="absolute inset-x-0 bottom-0 flex justify-between items-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-white text-black py-3 px-4 text-lg font-semibold flex-1">
                {property.name}
              </span>
              <button
                className="bg-blue-950 text-white px-4 py-3 font-semibold"
                onClick={() => navigate(property.link)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row: Three images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
        {[
          { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/trevoc/t_home.png", name: "TREVOC PROPERTIES", link: "/trevoc" },
          { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/ss_camasa/ss_homepage.png", name: "SS CAMASA", link: "/camasa" },
          { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/sobha_altus/sobha_home.jpeg", name: "SOBHA ALTUS", link: "/sobha" }
        ].map((property, index) => (
          <div key={index} className="relative group cursor-pointer w-full">
            <img
              src={property.img}
              alt={property.name} className="w-full h-auto md:h-80 object-cover rounded-md"
             
              onClick={() => navigate(property.link)}
            />
             {/* Mobile View: Details Below the Image */}
             <div className="md:hidden flex flex-col items-left mx-6 text-left mt-3">
              <p className="text-xl font-bold text-black">Starting From - {property.price}</p>
              <p className="text-md text-gray-700">{property.name}</p>
              <button
                className="mt-3 px-6 py-2 w-1/2 mb-4 bg-transparent border-black border-2 text-black font-semibold hover:bg-black transition"
                onClick={() => navigate(property.link)}
              >
                View More
              </button>
            </div>
           
            {/* Default: Price & Property Name in White Text */}
            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold 
                hidden lg:block md:group-hover:opacity-0 transition-opacity duration-300">
               <p>{property.price}</p>
               <p>{property.name}</p>
          </div>

            {/* Hover Effect: Name in White Strip, View Details in Black Strip */}
            <div className="absolute inset-x-0 bottom-0 flex justify-between items-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-white text-black py-3 px-4 text-lg font-semibold flex-1">
                {property.name}
              </span>
              <button
                className="bg-blue-950 text-white px-4 py-3 font-semibold"
                onClick={() => navigate(property.link)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Third Row: Two images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
        {[
          { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/eldico_overview.webp", name: "Eldeco Fairway Reserve", link: "/eldico" },
          { img: "https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/1649818878171-HXGSYXD0JI23307551QB/Francis+York+One+of+the+Most+Beautiful+Homes+For+Sale+in+Illinois+6.jpeg", name: "Property Name", link: "/Krisumi" }
        ].map((property, index) => (
          <div key={index} className="relative group cursor-pointer w-full">
            <img
              src={property.img}
              alt={property.name}
              className="w-full h-auto md:h-80 object-cover rounded-md "
              onClick={() => navigate(property.link)}
            />

             {/* Mobile View: Details Below the Image */}
             <div className="md:hidden flex flex-col items-left mx-6 text-left mt-3">
              <p className="text-xl font-bold text-black">Starting From - {property.price}</p>
              <p className="text-md text-gray-700">{property.name}</p>
              <button
                className="mt-3 px-6 py-2 w-1/2 mb-4 bg-transparent border-black border-2 text-black font-semibold hover:bg-black transition"
                onClick={() => navigate(property.link)}
              >
                View More
              </button>
            </div>
           <div className="absolute bottom-4 left-4 text-white text-lg font-semibold 
                hidden lg:block md:group-hover:opacity-0 transition-opacity duration-300">
               <p>{property.price}</p>
               <p>{property.name}</p>
          </div>
      


            {/* Hover Effect: Name in White Strip, View Details in Black Strip */}
            <div className="absolute inset-x-0 bottom-0 flex justify-between items-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-white text-black py-3 px-4 text-lg font-semibold flex-1">
                {property.name}
              </span>
              <button
                className="bg-blue-950 text-white px-4 py-3 font-semibold"
                onClick={() => navigate(property.link)}
              >
                View Details
              </button>
            </div>
          </div>


        ))}

<div className="w-full flex flex-col justify-center items-center space-y-6 h-full text-2xl md:text-2xl p-6 md:p-0 md:mt-12">
<div className=" flex items-center w-full md:px-7">
 
  <button className="w-full px-6 py-3 rounded-md bg-blue-950 border-2 border-black text-white font-bold hover:bg-white hover:text-black transition duration-300">
   BUY
  </button>
</div>
<div className=" flex items-center w-full md:px-7">
  
  <button className="w-full px-6 py-3 rounded-md bg-blue-950 border-2 border-black text-white font-bold hover:bg-white hover:text-black transition duration-300">
    SELL 
  </button>
</div>
<div className="flex items-center w-full md:px-7">
  <button className="w-full px-6 py-3 rounded-md bg-blue-950 border-2 border-black text-white font-bold hover:bg-white hover:text-black transition duration-300">
    LEASE
  </button>
</div>
</div>

      </div>
    </div>
  );
};

export default PropertiesPage;
