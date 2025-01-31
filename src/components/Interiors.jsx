import React from "react";
import Slider from "./Slider";
import ServicesSection from "./Interior_Services";

const processSteps = [
  {
    number: "01",
    icon: "fal fa-lightbulb-on",
    title: "PERSPECTIVE DEVELOPMENT",
    link: "https://www.potterzwheel.com/#",
    description:
      "In-depth understanding of client’s tastes & preferences, lifestyle, professions, budget, and functional needs."
  },
  {
    number: "02",
    icon: "fal fa-drafting-compass",
    title: "CONCEPT & RENDERS",
    link: "https://www.potterzwheel.com/#",
    description:
      "Project outline, budget & timeframes, mood boards, space planning, 2D & 3D renders."
  },
  {
    number: "03",
    icon: "fal fa-swatchbook",
    title: "MATERIAL SELECTION",
    link: "https://www.potterzwheel.com/#",
    description:
      "Finalizing materials, textures, colors, lighting, furniture, and procuring essential fittings."
  },
  {
    number: "04",
    icon: "fal fa-digging",
    title: "EXECUTION",
    link: "https://www.potterzwheel.com/#",
    description:
      "Manufacturing and on-site installation of furniture with precision and expert craftsmanship."
  }
];

const recentWorks = [
  {
    imgSrc: "https://i0.wp.com/www.potterzwheel.com/wp-content/uploads/2021/11/Project-Image-2.jpeg?fit=1024%2C576&ssl=1",
    title: "Living Room (DLF Ultima, Gurugram)",
    link: "https://www.potterzwheel.com/portfolio/living-room/"
  },
  {
    imgSrc: "https://i0.wp.com/www.potterzwheel.com/wp-content/uploads/2021/10/3.png?fit=1024%2C768&ssl=1",
    title: "Modular Kitchen (AWHO Complex, Shanti Vihar, Gurugram)",
    link: "https://www.potterzwheel.com/portfolio/kitchen/"
  },
  {
    imgSrc: "https://i0.wp.com/www.potterzwheel.com/wp-content/uploads/2021/10/2.png?fit=1024%2C768&ssl=1",
    title: "Kid’s Room (DLF Ultima, Gurugram)",
    link: "https://www.potterzwheel.com/portfolio/kids-room-dlf-ultima-gurugram/"
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-12" id="howitworks">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Working Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
              <div className="text-4xl font-bold text-gray-700">{step.number}</div>
              <div className="text-gray-500 text-2xl my-4">
                <i className={step.icon}></i>
              </div>
              <h3 className="text-xl font-semibold">
                <a href={step.link} className="text-blue-600 hover:underline">
                  {step.title}
                </a>
              </h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RecentWork = () => {
  return (
    <section className="py-12" id="recentwork">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Recent Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recentWorks.map((work, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={work.imgSrc} alt={work.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  <a href={work.link} className="text-blue-600 hover:underline">
                    {work.title}
                  </a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Interiors = () => {
  return (
    <>
      <Slider />
      <HowItWorks />
      <RecentWork />
     <ServicesSection />
    </>
  );
};

export default Interiors;
