const PropertiesToExplore = () => {
    const properties = [
      { name: 'Modern Villa', location: 'Gurgaon', price: '$1,200,000' },
      { name: 'Luxury Apartment', location: 'Gurgaon', price: '$900,000' },
      { name: 'Cozy Cottage', location: 'Gurgaon', price: '$650,000' },
      { name: 'Urban Loft', location: 'Gurgaon', price: '$800,000' },
      { name: 'Beach House', location: 'Gurgaon', price: '$2,500,000' },
      { name: 'Mountain Cabin', location: 'Gurgaon', price: '$450,000' },
      { name: 'Modern Villa 2', location: 'Gurgaon', price: '$1,250,000' },
      { name: 'Luxury Apartment 2', location: 'Gurgaon', price: '$950,000' },
      { name: 'Cozy Cottage 2', location: 'Gurgaon', price: '$680,000' },
      { name: 'Urban Loft 2', location: 'Gurgaon', price: '$850,000' },
      { name: 'Beach House 2', location: 'Gurgaon', price: '$2,550,000' },
      { name: 'Mountain Cabin 2', location: 'Gurgaon', price: '$480,000' },

    ];
  
    return (
      <section className="py-20 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Properties to Explore</h2>
          
          {/* Properties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {properties.slice(0, 16).map((property, index) => (
              <div key={index} className="property bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300">
                <img src="https://destinationcompress.s3.ap-south-1.amazonaws.com/c28eb93b-b48c-4a4e-b076-6f60e3dfedfb.jpg" alt={property.name} className="w-full h-64 object-cover rounded-lg mb-6" /> {/* Replace with actual image */}
                <h3 className="text-xl font-semibold text-gray-900">{property.name}</h3>
                <p className="text-gray-600">{property.location}</p>
                <p className="text-lg text-blue-600">{property.price}</p>
              </div>
            ))}
          </div>
  
          {/* See All Button */}
          <div className="mt-8">
            <a href="/properties" className="text-xl text-blue-600 font-semibold">See All Properties</a>
          </div>
        </div>
      </section>
    );
  };
  
  export default PropertiesToExplore;
  