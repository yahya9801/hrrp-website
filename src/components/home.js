import React from 'react';
import Banner from "../components/banner"
import SponsoredAd from "../components/sponserAd"
import JobCards from "../components/jobCards"
import RecruiterSection from "../components/recruiterSection"
import HomePageSlider from "../components/homePageSlider"

const Home = () => {
 return (
  <div>
    <Banner />
    <SponsoredAd />
    <JobCards />
    <RecruiterSection />
    <HomePageSlider />
  </div>
 );
}
export default Home;