import React from "react";
import { motion } from "framer-motion";
import { FaCogs, FaUsers, FaTrophy } from "react-icons/fa";

const AboutUsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center mt-12"
        style={{ backgroundImage: "url('https://d1hdtc0tbqeghx.cloudfront.net/wp-content/uploads/2024/03/01115727/Best-About-Us-Page-Examples.jpg')" }}
      >
        <motion.h1
          className="text-4xl text-white font-bold px-6 py-4 bg-black bg-opacity-50 rounded-md"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          About Us
        </motion.h1>
      </section>

      {/* PotterzWheel Realty */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
          <div className="flex-1">
            <motion.p
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-2xl"
            >
              At Potterzwheel Realty, we aim to transform the real estate experience by addressing common inefficiencies, lack of transparency, and fragmented services in the market. Whether buying, selling, or leasing residential or commercial properties, our goal is to provide a seamless, customer-focused experience that maximizes your returns and builds trust.
            </motion.p>
            
            <motion.h2
              className="mt-6 text-3xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Potterzwheel Realty—Crafting Legacies
            </motion.h2>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.img
              src="https://raw.githubusercontent.com/potterzwhealrealty/photos/main/about_img1.png"
              alt="Image 1"
              className="rounded-lg shadow-md"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
            <motion.img
              src="https://raw.githubusercontent.com/potterzwhealrealty/photos/main/about_img2.png"
              alt="Image 2"
              className="rounded-lg shadow-md"
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 px-6 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.img
              src="https://raw.githubusercontent.com/potterzwhealrealty/photos/main/vikas_awasthi.jpg" 
              alt="Vishal Awasthi"
              className="rounded-lg shadow-md"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
            <motion.img
              src="https://raw.githubusercontent.com/potterzwhealrealty/photos/main/amandeep_photo.jpg"
              alt="Amandeep Malhotra"
              className="rounded-lg shadow-md"
              style={{ width: "250px", height: "250px", objectFit: "fit" }}
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </div>
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold"
            >
              Founder's Message
            </motion.h2>
            <p className="mt-6 text-xl">
              At Potterzwheel Realty, we aim to revolutionize the real estate experience by offering a seamless, transparent process for buying, selling, and leasing properties. We eliminate inefficiencies and provide a customer-focused solution every step of the way—from property selection to financing, paperwork, and beyond. Our commitment is simple: to build trust, maximize returns, and ensure that your real estate journey is rewarding and hassle-free. Potterzwheel Realty is here to help you achieve your financial goals and create lasting legacies in the world of real estate.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="flex items-start">
                
                <div className="ml-4">
                  <h3 className="text-2xl md:text-3xl font-bold">Integrity</h3>
                  <p className="text-lg md:text-xl">
                    We value honesty, transparency, and integrity in every aspect of our work.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                
                <div className="ml-4">
                  <h3 className="text-2xl md:text-3xl font-bold">Innovation</h3>
                  <p className="text-lg md:text-xl">
                    Our commitment to creativity and innovation drives us to think outside the box.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
               
                <div className="ml-4">
                  <h3 className="text-2xl md:text-3xl font-bold ">Quality</h3>
                  <p className="text-lg md:text-xl">
                    We strive for excellence and ensure high standards in everything we do.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
              
                <div className="ml-4">
                  <h3 className="text-2xl md:text-3xl font-bold">Sustainability</h3>
                  <p className="text-lg md:text-xl">
                    We are committed to protecting the environment and fostering sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-20 px-6 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <FaCogs size={40} />
              <h3 className="mt-4 text-2xl font-semibold">Technology</h3>
              <p className="text-lg text-center mt-2">
                We leverage the latest technologies to provide cutting-edge solutions.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers size={40} />
              <h3 className="mt-4 text-2xl font-semibold">Teamwork</h3>
              <p className="text-lg text-center mt-2">
                Collaboration is key to our success, and we value strong, cohesive teams.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaTrophy size={40} />
              <h3 className="mt-4 text-2xl font-semibold">Excellence</h3>
              <p className="text-lg text-center mt-2">
                We pursue excellence in every project, delivering outstanding results.
              </p>
            </div>
          </div>
        </div>
      </section>
       {/* Timeline Section */}
       <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            Timeline and Milestones in Our Pursuit to Shape Tomorrow
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center text-xl font-bold text-white">
                2021
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Foundation</h3>
                <p className="text-lg">
                  We laid the foundation of PotterzWheel with a vision to shape a sustainable future.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center text-xl font-bold text-white">
                2022
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Expansion</h3>
                <p className="text-lg">
                  We expanded our services and built strategic partnerships to better serve our clients.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center text-xl font-bold text-white">
                2023
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Innovation</h3>
                <p className="text-lg">
                  Introduced advanced tools and technologies to further elevate our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
