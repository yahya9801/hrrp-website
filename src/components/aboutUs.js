// src/components/AboutUs.js
import React from "react";
import aboutImage from "../images/advertise_with_us.png"; // Replace with your actual image path

const AboutUs = () => (
  <section className="max-w-3xl mx-auto bg-white rounded-lg shadow p-4 sm:p-8 my-10">
    {/* Title */}
    <div className="flex justify-center mb-6">
      <span className="bg-blue-600 text-white text-2xl sm:text-3xl font-bold rounded-lg px-8 py-2 text-center shadow">
        About Us
      </span>
    </div>

    {/* Description */}
    <div className="space-y-4 text-gray-800 text-base sm:text-lg mb-8">
      <p>
        HR Posting Partner is HR based Marketing business providing Job Ads service along with marketing for other companies or businesses. We are here to help you boost your Job Ad and/or Sponsored Ad.
      </p>
      <p>
        Also, we are continuously striving to help job seekers in finding career opportunities.
      </p>
      <p>
        We are one of the best platform for job opportunities in Pakistan as we are one of Pakistan’s fastest-growing Talent Attraction and People Interaction platform.
      </p>
    </div>

    {/* Image */}
    <div className="flex justify-center">
      <img
        src={aboutImage}
        alt="About HR Posting Partner"
        className="w-full max-w-2xl h-auto rounded-lg shadow"
      />
    </div>
  </section>
);

export default AboutUs;
