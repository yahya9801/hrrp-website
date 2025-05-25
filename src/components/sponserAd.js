import React from 'react';
import sponsoredAd from '../images/sponsered-ad.jpg'

const SponsoredAd = ({ imageUrl }) => {
  return (
    <div className="w-full flex justify-center py-8">
      <img
        src={sponsoredAd}
        alt="Sponsor Ad"
        className="w-3/5 object-contain m-0"
        height={80}
      />
    </div>
  );
};

export default SponsoredAd;
