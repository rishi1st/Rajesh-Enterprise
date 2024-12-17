import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [result, setResult] = useState(''); // For handling success/error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending...'); // Indicate that the form is being submitted

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('access_key', '0ea9a642-b6ea-4619-9831-1beecc4c789e'); // Add your access key

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
      } else {
        setResult(data.message); // Set the error message
      }
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 to-black text-white py-12 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-extrabold text-yellow-500 mb-6">Contact Us</h2>
        
        <p className="text-xl md:text-2xl mb-8">
          Have any questions or need assistance? Feel free to reach out to us! We're here to help.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
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

          {/* Result Message */}
          <div className="text-lg text-yellow-500 mt-4">{result}</div>

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
