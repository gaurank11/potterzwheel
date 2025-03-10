import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-950 mb-12 md:text-6xl">About Us</h1>
       
        

        <div className="founders grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Founder 1 */}
          <div className="founder bg-white shadow-xl rounded-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl text-white">
            <img
              src="https://raw.githubusercontent.com/potterzwhealrealty/photos/main/vikas_awasthi.webp"
              alt="Vishal Awasthi"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-gray-900"
            />
            <h3 className="text-xl font-semibold text-black mb-2">Vishal Awasthi</h3>
            <p className="text-gray-700">
              An IIM Kolkata alumnus with 20+ years in Telecom, Financial Services, Education, and Fashion, Vishal combines a people-centric approach with innovative strategies to build long-lasting relationships and successful outcomes.
            </p>
          </div>

          {/* Founder 2 */}
          <div className="founder bg-white shadow-xl rounded-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src="https://raw.githubusercontent.com/potterzwhealrealty/photos/main/malhotra.webp" 
              alt="Amandeep Malhotra"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-gray-900"
            />
            <h3 className="text-xl font-semibold text-black mb-2">Amandeep Malhotra</h3>
            <p className="text-gray-700">
              A Delhi University alumnus with 20+ years in operations management, Aman focuses on understanding client needs and delivering smooth, seamless experiences. His hands-on expertise ensures clients not only meet but exceed their goals.
            </p>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default AboutUs;
