import React from 'react';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Company Info */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-yellow-500 mb-4">
            Rajesh Enterprises
          </h2>
          <p className="text-lg">
            Providing quality vehicle services in construction for over 10
            years.
          </p>
        </div>

        {/* Owner Information */}
        <div className="flex flex-col md:flex-row justify-center md:space-x-12 mb-8 space-y-6 md:space-y-0">
          <div>
            <h3 className="text-xl font-semibold">Owner: Rajesh Kumar Gupta</h3>
            <p className="flex justify-center md:justify-start items-center">
              <FaPhone className="mr-2" />
              <span>XXXXXXXXX</span>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Owner: Rishikesh Gupta</h3>
            <p className="flex justify-center md:justify-start items-center">
              <FaPhone className="mr-2" />
              <span>8340574346</span>
            </p>
          </div>
        </div>

        {/* Contact and Address */}
        <div className="flex flex-col md:flex-row justify-center md:space-x-16 mb-8 space-y-6 md:space-y-0">
          <div>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="flex justify-center md:justify-start items-center">
              <FaEnvelope className="mr-2" />
              <span>contact@rajeshenterprises.com</span>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="flex justify-center md:justify-start items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>Murharia, kamimur, Bihar, India</span>
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.facebook.com/rajeshenterprises"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl hover:text-yellow-500" />
          </a>
          <a
            href="https://twitter.com/rajeshenterprises"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl hover:text-yellow-500" />
          </a>
          <a
            href="https://www.linkedin.com/company/rajeshenterprises"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-yellow-500" />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-sm text-gray-500">
          <p>&copy; 2024 Rajesh Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
