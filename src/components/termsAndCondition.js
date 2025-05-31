// src/components/TermsAndConditions.js
import React from 'react';

const TermsAndConditions = () => (
  <section className="max-w-3xl mx-auto bg-white shadow rounded-lg p-4 sm:p-8 my-8">
    {/* Title */}
    <div className="flex justify-center mb-6">
    <h3 className="text-2xl sm:text-3xl font-bold text-blue-500">
        Terms and Conditions
      </h3>
    </div>

    {/* Main Content */}
    <div className="text-sm sm:text-base text-gray-800 space-y-6">

      {/* Job Ads on Main Platforms */}
      <div>
        <h2 className="font-semibold text-lg sm:text-xl mb-2">
          For Job Ads on our Main Platforms:
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Job Ads containing only Whatsapp Numbers for reaching out candidates are not allowed.</li>
          <li>We don’t post job ads without company’s official email address or company’s official link to job.</li>
          <li>Google Form Links are not allowed.</li>
          <li>@gmail.com, @ymail.com etc are not official email addresses, thus they are not allowed.</li>
          <li>For Walk-In interview job ads we do allow “only Whatsapp Number/s”. But we don’t allow unofficial email addresses in Walk-In interview job ads.</li>
          <li>Walk-In interview job ads contains a proper location or its link along with date and timing. Any Walk-In interview job ads not containing a proper location, date and time will not be allowed.</li>
        </ul>
      </div>

      {/* Sponsored Ads */}
      <div>
        <h2 className="font-semibold text-lg sm:text-xl mb-2">
          For Sponsored Ads:
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Make sure you are not doing illegal business.</li>
          <li>Make sure you don’t scam our audience.</li>
          <li>Scrutiny will be done if you scam our audience later, we may report you and your sponsored ad will be deleted on the spot.</li>
          <li>Same case goes if we find out later that you are doing an illegal business.</li>
          <li>Team HRPP will try their best for scrutiny but if anything happens later then we are not responsible and you may report the fraudulent party. (Be safe, be vigilant).</li>
        </ul>
      </div>

      {/* Open Platforms */}
      <div>
        <h2 className="font-semibold text-lg sm:text-xl mb-2">
          For Open Platforms:
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Don’t post anything else other than job ads.</li>
          <li>No bullying or foul language (Immediate ban from group/s).</li>
          <li>For sponsored ads message us on our official Whatsapp Number.</li>
          <li>Will be monitored by Team HRPP.</li>
          <li>Team HRPP will not be responsible for any scam or fake jobs as it is an open platform.</li>
        </ul>
      </div>

    </div>
  </section>
);

export default TermsAndConditions;
