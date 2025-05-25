import React from "react";
import { Facebook, Linkedin } from "lucide-react";
import japHrppLogo from "../images/open_platform.png"; // Still import your JAP banner

const OpenPlatformsFull = () => (
  <section className="max-w-3xl mx-auto bg-white rounded-lg shadow p-4 sm:p-8 my-10">
    {/* Title */}
    <div className="flex justify-center mb-6">
      <span className="bg-blue-600 text-white text-2xl sm:text-3xl font-bold rounded-lg px-8 py-2 text-center shadow">
        Open Platforms
      </span>
    </div>

    {/* Description */}
    <div className="text-gray-800 text-base sm:text-lg mb-4 text-center">
      In case, your job ad doesn’t follow our terms and conditions then you can post your job ad on our open platforms below:
    </div>

    {/* Social Buttons */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-4">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/groups/your-group"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-blue-700 hover:underline font-medium"
      >
        <Facebook className="w-10 h-10" />
        <span>Click for Open Facebook Group Platform</span>
      </a>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/groups/your-group"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-blue-700 hover:underline font-medium"
      >
        <Linkedin className="w-10 h-10" />
        <span>Click for Open LinkedIn Group Platform</span>
      </a>
    </div>

    {/* Benefits */}
    <div className="text-gray-800 mb-4 text-left sm:ml-16">
      <div className="font-semibold mb-1">Benefits of our open platforms:</div>
      <ul className="list-disc pl-6 text-base space-y-1">
        <li>Post as many jobs as you like.</li>
        <li>No restriction on Job Ads.</li>
        <li>Anonymous post on Open Facebook Group platform.</li>
        <li>Connecting Recruiters with Job Seekers.</li>
        <li>Our reach will be your reach.</li>
      </ul>
    </div>
    <div className="mb-8">
      Please check our{" "}
      <a
        href="/terms"
        className="text-blue-600 underline hover:text-blue-800"
      >
        terms and conditions
      </a>{" "}
      of Open Platforms.
    </div>

    {/* JAP HRPP banner */}
    <div className="flex justify-center mt-8">
      <img
        src={japHrppLogo}
        alt="JAP by HRPP"
        className="rounded-lg w-full max-w-lg h-auto"
      />
    </div>
  </section>
);

export default OpenPlatformsFull;
