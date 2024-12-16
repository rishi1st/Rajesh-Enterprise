import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    // Here you can handle form submission, e.g., sending data to an API
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 to-black text-white py-12 px-6 h-[100vh]">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-extrabold text-yellow-500 mb-6">Contact Us</h2>
        
        <p className="text-xl md:text-2xl mb-8">
          Have any questions or need assistance? Feel free to reach out to us! We're here to help.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name Field */}
          <div className="flex flex-col items-center">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-900 text-white p-3 rounded-lg w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col items-center">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-900 text-white p-3 rounded-lg w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col items-center">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="bg-gray-900 text-white p-3 rounded-lg w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-yellow-500 text-gray-900 py-3 px-8 rounded-full text-xl font-semibold hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
