import React from "react"
import linkedinLogo from "../images/karachi.jpg" // Assuming you have a LinkedIn logo image
import peopleIllustration from "../images/karachi.jpg" // Assuming you have a people illustration image
import japLogo from "../images/karachi.jpg" // Assuming you have the JAP logo
import megaphoneImage from "../images/karachi.jpg" //
import recruiters from "../images/recruiters.png"
import special_presence from "../images/special_presence.png"
import open_platform from "../images/open_platform.png"
import advertise_with_us from "../images/advertise_with_us.png"
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const RecruiterSection = () => {
  return (
    <div className="bg-white py-4 px-4 lg:px-16">
      {/* Section 1: For Recruiters */}
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex flex-col-reverse lg:flex-row items-center bg-white shadow-2xl rounded-2xl p-6 sm:p-10 gap-8">
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src={recruiters}
              alt="People Illustration"
              className="w-52 h-auto sm:w-64 lg:w-full rounded-lg shadow"
            />
          </div>
          {/* Right side: Text and button */}
          <div className="w-full lg:w-2/3 text-center lg:text-left space-y-4 lg:pr-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-500">
              For Recruiters
            </h3>
            <p className="text-base sm:text-lg text-gray-700">
              We have some terms and conditions to avoid scam or fake jobs, so
              if you follow those T&amp;C, you may share your job ad/s on our
              official Whatsapp Number:{" "}
              <a
                href="https://wa.me/923223379647"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700"
              >
                +92 322 337 9647
              </a>
              .
            </p>
            <a
              href="/terms-and-conditions"
              className="inline-block text-blue-600 font-medium hover:underline transition"
            >
              Please check our terms and conditions of Job Ads.
            </a>
          </div>
          {/* Left side: Illustration */}
        </div>
      </div>

      {/*  Section 2: Want Special resence for your job ad? **/}
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex flex-col-reverse lg:flex-row items-center bg-white shadow-2xl rounded-2xl p-6 sm:p-10 gap-8">
          {/* Right side: Text and button */}
          <div className="w-full lg:w-2/3 text-center lg:text-left space-y-4 lg:pr-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-500">
              Want Special Presence for your job ad?
            </h3>
            <p className="text-lg text-gray-700">
              If your job ad follows our terms and conditions and follows
              LinkedIn Community guidelines, then you may get your job ad posted on our LinkedIn 
              page at a very affordable rate. Whatsapp message us at{" "}
              <a
                href="https://wa.me/923223379647"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700"
              >
                +92 322 337 9647
              </a> for
              further details.
            </p>
            <a href="/terms-and-conditions" className="text-blue-500 hover:underline">
              Please check our terms and conditions of Job Ads.
            </a>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src={special_presence}
              alt="People Illustration"
              className="w-52 h-auto sm:w-64 lg:w-full rounded-lg shadow"
            />
          </div>
          {/* Left side: Illustration */}
        </div>
      </div>

      {/*  Section 3: Open Platform **/}
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex flex-col-reverse lg:flex-row items-center bg-white shadow-2xl rounded-2xl p-6 sm:p-10 gap-8">
          {/* Right side: Text and button */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src={open_platform}
              alt="People Illustration"
              className="w-52 h-auto sm:w-64 lg:w-full rounded-lg shadow"
            />
          </div>

          <div className="w-full lg:w-2/3 text-center lg:text-left space-y-4 lg:pr-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-500">
              Open Platforms
            </h3>
            <p className="text-gray-700 text-lg mb-3">
              In case your job ad doesn't follow our terms and conditions, you
              can post your job ad on our open platforms below:
            </p>
            {/* Social Buttons */}
            <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start mb-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/groups/644836695155098" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 font-medium hover:underline text-lg"
            >
              <FaFacebook className="text-3xl mr-2" />
              Click for Open Facebook Group Platform
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/groups/13176545" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 font-medium hover:underline text-lg"
            >
              <FaLinkedin className="text-3xl mr-2" />
              Click for Open LinkedIn Group Platform
            </a>
          </div>

            {/* Benefits */}
            <div className="text-gray-800 mb-4">
              <h3 className="font-semibold text-lg mb-2">
                Benefits of our open platforms:
              </h3>
              <ul className="list-disc pl-6 text-base space-y-1 text-left inline-block">
                <li>Post as many jobs as you like.</li>
                <li>No restriction on Job Ads.</li>
                <li>Anonymous post on Open Facebook Group platform.</li>
                <li>Connecting Recruiters with Job Seekers.</li>
                <li>Our reach will be your reach.</li>
              </ul>
            </div>
            <a
              href="/terms-and-conditions"
              className="text-blue-600 hover:underline font-medium"
            >
              Please check our terms and conditions of Open Platforms.
            </a>
          </div>
          
          {/* Left side: Illustration */}
        </div>
      </div>

       {/*  Section 4: Advertise with Us! **/}
       <div className="max-w-7xl mx-auto py-4">
        <div className="flex flex-col-reverse lg:flex-row items-center bg-white shadow-2xl rounded-2xl p-6 sm:p-10 gap-8">
          {/* Right side: Text and button */}
          <div className="lg:w-2/3 text-center lg:text-left space-y-4">
          <h3 className="text-3xl font-semibold text-blue-500">
            Advertise with Us!
          </h3>
          <p className="text-lg text-gray-700">
            Promote your business in front of thousands of people through our
            social media platforms with great engagement! Promote your business
            tremendously and get the attention of new clients easily on our
            Whatsapp Channels and Facebook page for a very affordable rate. (No
            sponsored ads allowed on LinkedIn).
          </p>
          <p className="text-lg text-gray-700">
            We have different packages and different slot times. Please Whatsapp
            message us at{" "}
            <a
              href="https://wa.me/923223379647"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-700"
            >
              +92 322 337 9647
            </a> for further
            details.
          </p>
          <a href="/terms-and-conditions" className="text-blue-500 hover:underline">
            Please check our terms and conditions of Sponsored Ads.
          </a>
        </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src={advertise_with_us}
              alt="People Illustration"
              className="w-52 h-auto sm:w-64 lg:w-full rounded-lg shadow"
            />
          </div>
          {/* Left side: Illustration */}
        </div>
      </div>
    </div>
  )
}

export default RecruiterSection
