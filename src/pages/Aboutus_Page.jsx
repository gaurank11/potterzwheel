import React from "react";
import { motion } from "framer-motion"; 
import { FaCogs, FaUsers, FaTrophy } from "react-icons/fa"; 

const AboutUsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
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

      {/* Curators of the Future */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between space-x-12">
          <div className="flex-1">
            <motion.p
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-2xl"
            >
              Curators of the Future at PotterzWheel, we craft the future with
              passion and innovation.
            </motion.p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-6">
            <motion.img
              src="/path/to/image1.jpg"
              alt="Image 1"
              className="rounded-lg shadow-md"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
            <motion.img
              src="/path/to/image2.jpg"
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
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between space-x-12">
          <div className="flex-1 grid grid-cols-2 gap-6">
            <motion.img
              src="/path/to/founder-image.jpg"
              alt="Founder"
              className="rounded-lg shadow-md"
              initial={{ x: "-100vw" }}
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
              Welcome to PotterzWheel. Our journey is powered by vision,
              innovation, and a commitment to shaping a better future.
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
                <motion.div
                  className="w-12 h-12 bg-blue-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                ></motion.div>
                <div className="ml-4">
                  <h3 className="text-2xl font-semibold">Integrity</h3>
                  <p className="text-lg">
                    We value honesty, transparency, and integrity in every
                    aspect of our work.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <motion.div
                  className="w-12 h-12 bg-green-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                ></motion.div>
                <div className="ml-4">
                  <h3 className="text-2xl font-semibold">Innovation</h3>
                  <p className="text-lg">
                    Our commitment to creativity and innovation drives us to
                    think outside the box.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <motion.div
                  className="w-12 h-12 bg-red-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                ></motion.div>
                <div className="ml-4">
                  <h3 className="text-2xl font-semibold">Quality</h3>
                  <p className="text-lg">
                    We strive for excellence and ensure high standards in
                    everything we do.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <motion.div
                  className="w-12 h-12 bg-yellow-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                ></motion.div>
                <div className="ml-4">
                  <h3 className="text-2xl font-semibold">Sustainability</h3>
                  <p className="text-lg">
                    We are committed to protecting the environment and fostering
                    sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <FaCogs size={40} />
              <h3 className="mt-4 text-2xl font-semibold">Technology</h3>
              <p className="text-lg text-center mt-2">
                We leverage the latest technologies to provide cutting-edge
                solutions.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers size={40} />
              <h3 className="mt-4 text-2xl font-semibold">Teamwork</h3>
              <p className="text-lg text-center mt-2">
                Collaboration is at the heart of our success; our team works
                together to create amazing results.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaTrophy size={40} />
              <h3 className="mt-4 text-2xl font-semibold">Excellence</h3>
              <p className="text-lg text-center mt-2">
                Our pursuit of excellence drives us to deliver the best in
                everything we do.
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
              <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold">
                2021
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Foundation</h3>
                <p className="text-lg">
                  We laid the foundation of PotterzWheel with a vision to shape
                  a sustainable future.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-xl font-bold">
                2022
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Growth</h3>
                <p className="text-lg">
                  Our team expanded, and we started implementing innovative
                  solutions.
                </p>
              </div>
            </div>
            {/* Add more timeline entries here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
