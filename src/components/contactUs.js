import React from "react";
// import mapImage from "../images/map.png"; // Replace with your map image path

const ContactUs = () => (
  <section className="max-w-3xl mx-auto bg-white rounded-lg shadow p-4 sm:p-8 my-10">
    {/* Title */}
    <div className="flex justify-center mb-6">
      <span className="bg-blue-600 text-white text-2xl sm:text-3xl font-bold rounded-lg px-8 py-2 text-center shadow">
        Contact Us
      </span>
    </div>

    {/* Main Content */}
    <div className="text-gray-800 space-y-4 text-base sm:text-lg">
      <p>
        Are you a recruiter and want to post your job ad on our Whatsapp Channel and Facebook page? If you follow our terms and conditions of job ad, then Whatsapp message us at:{" "}
        <a href="https://wa.me/923223379647" className="text-blue-600 underline hover:text-blue-800">
          +92 322 337 9647
        </a>
        .
      </p>
      <p>
        Do you want to post a sponsored ad on our Whatsapp Channels and Facebook page? Whatsapp message us at:{" "}
        <a href="https://wa.me/923223379647" className="text-blue-600 underline hover:text-blue-800">
          +92 322 337 9647
        </a>
        .
      </p>
      <p className="italic text-gray-600 text-sm">
        (Note: Please do not share with us your resumes and do not request us to send you job ads separately)
      </p>
    </div>

  </section>
);

export default ContactUs;
