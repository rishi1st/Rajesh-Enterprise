import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
     <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-black text-center text-white">
  <div className="space-y-6 max-w-3xl mx-auto px-6">
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-500">
      Your Trusted Partner for Reliable Transportation
    </h2>
    <p className="text-xl sm:text-2xl">
      We provide efficient and timely services through our fleet of well-maintained vehicles.
    </p>
    <p className="text-xl sm:text-2xl">
      With a decade of experience, we understand your transportation needs and ensure that every delivery is safe, on time, and within budget.
    </p>
    <button className="bg-yellow-500 text-gray-900 py-2 px-6 rounded-full text-xl hover:bg-yellow-600 transition duration-300" 
    onClick={()=> navigate('/contact')}>
      Book a Service
    </button>
  </div>
</section>


    </>
  )
}

export default Home
