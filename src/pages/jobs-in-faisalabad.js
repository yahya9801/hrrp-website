import React from 'react'
import Layout from '../components/layout' // If you want to wrap it with Layout
import faisalabad from '../images/jobs_in_faisalabad.png';

const JobsInFaisalabad = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Jobs in Faisalabad</h1>

        {/* Main Content */}
        <div className="flex justify-center mt-8 mb-4">
          <img
            src={faisalabad}
            alt="JAP by HRPP"
            className="rounded-lg w-full max-w-sm h-auto"
          />
        </div>
        <div className="text-center">
          <p className="text-xl mb-4">Hey there! Are you looking for a job in Faisalabad?</p>
          <p className="text-xl mb-6">
          We have a WhatsApp Channel full of job opportunities in Faisalabad.
          </p>

          {/* WhatsApp Channel Button */}
          <div className="mb-4">
            <a
              href="https://whatsapp.com/channel/0029Vay4uuK0QealX8zNg30Q" // Replace with your actual WhatsApp channel link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600"
            >
              WhatsApp Channel
            </a>
            <p className="mt-2">Click and follow our WhatsApp Channel containing job ads of Faisalabad.</p>
          </div>

          {/* Closing Message */}
          <p className="mt-8 text-xl">
            So what are you waiting for? Click and follow now!
          </p>
          <p className="mt-4 text-lg">
            Also, invite your friends and/or family too, let’s end unemployment together.
            <br />
            (Note: Please do not share your resumes with us and do not request us to send you job ads separately)
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default JobsInFaisalabad
