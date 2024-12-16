import React from 'react';
import { FaTractor, FaTruck, FaCog, FaLeaf, FaWarehouse, FaWater } from 'react-icons/fa';

const Services = () => {
  return (
    <>
      <div className='bg-gradient-to-r md:bg-gradient-to-b from-gray-800 to-black min-h-screen'>
        <section className="text-white py-12 px-6 min-h-screen">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-yellow-500 mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* JCB Service Card */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-yellow-500 mb-4 text-4xl">
                  <FaTractor />
                </div>
                <h3 className="text-2xl font-semibold mb-4">JCB Services</h3>
                <p>We provide reliable JCB services for all your construction and digging needs.</p>
              </div>

              {/* Tractor Service Card */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-yellow-500 mb-4 text-4xl">
                  <FaTruck />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Tractor Services</h3>
                <p>Our tractors are available for agricultural work, land clearing, and more.</p>
              </div>

              {/* Truck Service Card */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-yellow-500 mb-4 text-4xl">
                  <FaWarehouse />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Truck Services</h3>
                <p>We provide heavy-duty truck services for transportation of goods and materials.</p>
              </div>

              {/* Trolley Service Card */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-yellow-500 mb-4 text-4xl">
                  <FaCog />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Trolley Services</h3>
                <p>Our trolleys are ideal for moving bulk materials like sand, gravel, and more.</p>
              </div>

              {/* Harvester Service Card */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-yellow-500 mb-4 text-4xl">
                  <FaLeaf />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Harvester Services</h3>
                <p>Efficient harvesters for all your agricultural needs, ensuring timely collection of crops.</p>
              </div>

              {/* Paddy Thresher Service Card */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-yellow-500 mb-4 text-4xl">
                  <FaWater />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Paddy Thresher Services</h3>
                <p>We offer paddy threshing services with advanced equipment for optimal yield and efficiency.</p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
