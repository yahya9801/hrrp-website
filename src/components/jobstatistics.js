import React from "react"
import { FaBriefcase, FaSearch, FaCoffee, FaUsers } from 'react-icons/fa'; // You can use React Icons for better control

const JobStatistics = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex justify-center items-center space-x-12">
          {/* First Statistic - Job Ads */}
          <div className="flex flex-col items-center">
            <FaBriefcase className="text-4xl text-white-700 mb-2" />
            <p className="text-lg font-semibold text-white-700">500+ job ads every week</p>
          </div>

          {/* Second Statistic - Found Jobs */}
          <div className="flex flex-col items-center">
            <FaSearch className="text-4xl text-white-700 mb-2" />
            <p className="text-lg font-semibold text-white-700">10,000+ found jobs</p>
          </div>

          {/* Third Statistic - Recruiters Helped */}
          <div className="flex flex-col items-center">
            <FaCoffee className="text-4xl text-white-700 mb-2" />
            <p className="text-lg font-semibold text-white-700">1,000+ recruiters helped</p>
          </div>

          {/* Fourth Statistic - Followers */}
          <div className="flex flex-col items-center">
            <FaUsers className="text-4xl text-white-700 mb-2" />
            <p className="text-lg font-semibold text-white-700">200,000+ followers</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobStatistics
