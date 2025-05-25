import React from "react"
import { Link } from "gatsby"
import pakistan from '../images/jobs_in_pakistan.png';
import karachi from '../images/jobs_in_karachi.png';
import lahore from '../images/jobs_in_lahore.png';
import faisalabad from '../images/jobs_in_faisalabad.png';
import islamabad from '../images/jobs_in_islamabad.png';

import remote_jobs from '../images/remote_jobs.png';
import jobs_non_experienced from '../images/jobs_non_experienced.png';




const JobCards = () => {

  const jobData = [
    { title: "Jobs in Pakistan", link: "/jobs-in-pakistan", imageUrl: pakistan },
    { title: "Jobs in Karachi", link: "/jobs-in-karachi", imageUrl: karachi },
    { title: "Jobs in Lahore", link: "/jobs-in-lahore", imageUrl: lahore },
    { title: "Jobs in Islamabad/Rawalpindi", link: "/jobs-in-islamabad-rawalpindi", imageUrl: islamabad },
    { title: "Jobs in Faisalabad", link: "/jobs-in-faisalabad", imageUrl: faisalabad },
    { title: "Remote Jobs for Pakistan", link: "/remote-jobs-for-pakistan", imageUrl: remote_jobs },
    { title: "Jobs/Internship for Non-experienced", link: "/jobs-internships-for-non-experienced", imageUrl: jobs_non_experienced },
  ];

  // Split the data into first row (4 cards) and remaining rows
  const firstRowCards = jobData.slice(0, 4)
  const remainingCards = jobData.slice(4)

  const JobCard = ({ job, index }) => (
    <Link 
      to={`${job.link}`} 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-blue-300 h-full flex flex-col overflow-hidden"
      key={index}
    >
      {/* Top Image */}
      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
        {job.imageUrl ? (
          <img 
            src={job.imageUrl} 
            alt={`${job.title} job`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="text-white text-2xl font-bold opacity-50">
              {job.title}
            </div>
          </div>
        )}
      </div>

      {/* Content at bottom */}
      <div className="p-6 flex-1 flex flex-col justify-end">
        {/* Header */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">{job.title}</h3>
            <p className="text-sm text-gray-600 truncate">{job.company}</p>
          </div>
        </div>
       
      </div>
    </Link>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* First row - exactly 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {firstRowCards.map((job, index) => (
          <JobCard job={job} index={index} key={`first-${index}`} />
        ))}
      </div>
      
     {/* Remaining cards in subsequent rows - centered */}
     {remainingCards.length > 0 && (
  <div className="flex justify-center w-full p-0">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center w-full max-w-screen-lg">
      {remainingCards.map((job, index) => (
        <div className="w-full max-w-sm" key={`remaining-${index}`}>
          <JobCard job={job} index={index + 4} />
        </div>
      ))}
    </div>
  </div>
)}
    </div>
  )
}

export default JobCards