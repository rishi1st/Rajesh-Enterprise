import React from 'react';

const About = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-black text-white py-12 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-extrabold text-yellow-500">About Us</h2>
        <p className="text-xl md:text-2xl">
          At Rajesh Enterprises, we take pride in providing reliable and timely services through our diverse fleet of vehicles. 
          Over the last 10 years, we have earned the trust of our clients by offering a range of services tailored to meet your needs. 
          Our company is led by Rajesh Kumar Gupta, whose experience and leadership have helped us grow, and supported by Rishikesh Gupta, 
          who ensures smooth operations and customer satisfaction.
        </p>
        <p className="text-xl md:text-2xl">
          We offer a wide variety of services, thanks to our extensive fleet, which includes vehicles suited for different types of jobs. 
          Whether it’s for construction, transportation, or any other service, our vehicles are always ready to deliver efficient and dependable results. 
        </p>
        <p className="text-xl md:text-2xl">
          Our mission is simple – to provide our clients with the best service possible, backed by a fleet of well-maintained vehicles and a dedicated team. 
          With over a decade of experience, we continue to improve and evolve to meet the ever-growing needs of our customers.
        </p>
        <p className="text-xl md:text-2xl text-yellow-400 font-semibold">
          What sets us apart is not just the quality of our services, but the passion we bring to each project. We believe in building lasting relationships with our clients, founded on trust, reliability, and excellence. We are committed to making every experience with Rajesh Enterprises a positive one.
        </p>
      </div>
    </section>
  );
};

export default About;
