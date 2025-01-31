import React from 'react';
import Slider from 'react-slick';  // Importing the slick slider

const Testimonials = () => {
  // Slick slider settings
  const settings = {
    dots: true,  // Enable dot navigation
    infinite: true,  // Enable infinite loop
    speed: 500,  // Transition speed
    slidesToShow: 1,  // Show 1 testimonial at a time
    slidesToScroll: 1,  // Scroll one slide at a time
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 3000,  // Change slide every 3 seconds
  };

  // SVG Avatar Component
  const AvatarSVG = ({ name }) => {
    return (
      <svg
        className="w-16 h-16 rounded-full bg-gray-300 text-white flex items-center justify-center"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize="12"
          fontWeight="bold"
        >
          {name ? name[0] : '?'}
        </text>
      </svg>
    );
  };

  return (
    <section id="testimonials" className="bg-blue-950 py-16">
      <div className="container mx-auto text-center text-white">
        <div className="section_head mb-8">
          <h4 className="section-sub-title text-lg font-medium">Testimonials</h4>
          <h2 className="section_title text-3xl font-bold mb-4">Happy Customers</h2>
          <div className="w-24 mx-auto h-1 bg-white rounded-full"></div> {/*  underline */}
        </div>

        <Slider {...settings}>
          {/* First Testimonial */}
          <div className="testimonial-item">
            <div className="flex justify-center items-center mb-4">
              <span className="text-3xl text-blue-500 mr-2">"</span>
              <p className="text-lg max-w-2xl">
                Really impressed with their work, finishing and creative ideas. Professional in approach, perfect execution, and decent price. A few furniture turned out to be more beautiful than the sample images. Highly recommend.
              </p>
              <span className="text-3xl text-blue-500 ml-2">"</span>
            </div>
            <h4 className="text-xl font-semibold">Mr. Ishan Mehta, DLF New Town Heights (Sector-90)</h4>
            <div className="testi-thumb mt-4 flex justify-center items-center">
    <AvatarSVG name="Ishan" />
  </div>
          </div>

          {/* Second Testimonial */}
          <div className="testimonial-item">
            <div className="flex justify-center items-center mb-4">
              <span className="text-3xl text-blue-500 mr-2">"</span>
              <p className="text-lg max-w-2xl">
                They did end-to-end interior renovation work at my house wonderfully. They solved our biggest challenge of utilizing our small space in the best possible way. Team of professionals helped me shape my dream home.
              </p>
              <span className="text-3xl text-blue-500 ml-2">"</span>
            </div>
            <h4 className="text-xl font-semibold">Mr. Sagar Bajpai, Microtek Greenburg</h4>
            <div className="testi-thumb mt-4 flex justify-center items-center">
              <AvatarSVG name="Sagar" />
            </div>
          </div>

          {/* Third Testimonial */}
          <div className="testimonial-item">
            <div className="flex justify-center items-center mb-4">
              <span className="text-3xl text-blue-500 mr-2">"</span>
              <p className="text-lg max-w-2xl">
                Really impressed by the work done by Potterzwheel. They’ve used quality material with latest design. Also, they explained everything in detail with full transparency. Timely delivery even in the COVID-19 situation.
              </p>
              <span className="text-3xl text-blue-500 ml-2">"</span>
            </div>
            <h4 className="text-xl font-semibold">Ms. Ranjana Yadav, M3M Woodshire</h4>
            <div className="testi-thumb mt-4 flex justify-center items-center">
              <AvatarSVG name="Ranjana" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
