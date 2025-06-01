import React from "react"
import sponsoredAd from "../images/storonic-banner.png"

const SponsoredAd = ({ imageUrl }) => {
  return (
    <>
    <div className="w-full flex flex-col justify-center py-8 items-center">
      <a
        href="https://storonic.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-3/5"
      >
        <img
          src={sponsoredAd}
          alt="Sponsor Ad"
          className="w-full object-contain m-0"
          height={80}
        />
      </a>
      <div className="w-full sm:w-3/5 text-black text-sm font-semibold text-center text-right">
        Main Sponsored Ad
      </div>
    </div>
  </>
  
  )
}

export default SponsoredAd
