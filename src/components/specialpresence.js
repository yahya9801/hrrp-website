// src/components/SpecialPresence.js
import React from "react";
// import linkedinLogo from "../images/linkedin.png"; // Uncomment and set correct path if you have a logo image

const SpecialPresence = () => (
  <section className="max-w-4xl mx-auto bg-white rounded-lg shadow p-4 sm:p-8 my-10">
    {/* Title */}
    <div className="flex justify-center mb-6">
    <h3 className="text-2xl sm:text-3xl font-bold text-blue-500">
        Special Presence<br className="sm:hidden" /> for your Job Ad
    </h3>
    </div>

    {/* Description */}
    <div className="text-gray-800 text-base sm:text-lg mb-5 space-y-3">
      <p>
        If your job ad follows our terms and conditions and follows LinkedIn Community guidelines, then you may get your job ad posted on our LinkedIn page at a very affordable rate.
        Whatsapp message us at:{" "}
        <a href="https://wa.me/923223379647" target="_blank"
            rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
          +92 322 337 9647
        </a>{" "}
        for further details.
      </p>
      <div className="flex items-center space-x-3 mb-2">
        {/* Logo: Uncomment below and set path if you have image, else use emoji */}
        {/* <img src={linkedinLogo} alt="LinkedIn Logo" className="w-9 h-9 rounded" /> */}
        <span className="text-blue-700 text-3xl font-bold">in</span>
        <div>
          <a
            href="https://www.linkedin.com/company/hr-posting-partner/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 font-medium hover:underline"
          >
            Click to view our LinkedIn Page.
          </a>
          <div className="text-xs text-gray-600">Don't forget to follow!</div>
        </div>
      </div>
      <p>
        Please check our{" "}
        <a
          href="/terms-and-conditions"
          className="text-blue-600 underline hover:text-blue-800"
        >
          terms and conditions
        </a>{" "}
        of Job Ads.
      </p>
    </div>

    {/* Rates Grid */}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div className="rounded-2xl border border-gray-300 shadow text-center py-6 px-2">
        <div className="text-xl font-semibold mb-2">12:30 PM</div>
        <div className="text-blue-700 text-2xl font-bold">PKR 500</div>
      </div>
      <div className="rounded-2xl border border-gray-300 shadow text-center py-6 px-2">
        <div className="text-xl font-semibold mb-2">06:00 PM</div>
        <div className="text-blue-700 text-2xl font-bold">PKR 500</div>
      </div>
      <div className="rounded-2xl border border-gray-300 shadow text-center py-6 px-2">
        <div className="text-xl font-semibold mb-2">07:00 PM</div>
        <div className="text-blue-700 text-2xl font-bold">PKR 500</div>
      </div>
      <div className="rounded-2xl border border-gray-300 shadow text-center py-6 px-2">
        <div className="text-xl font-semibold mb-2">08:00 PM</div>
        <div className="text-blue-700 text-2xl font-bold">PKR 500</div>
      </div>
    </div>
  </section>
);

export default SpecialPresence;
