import React, { useEffect, useState } from 'react';
import './css/Ads.css';

const Ads = ({ adClient, adSlot, style = {}, className = '' }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  useEffect(() => {
    if (!adClient || !adSlot) {
      setShowPlaceholder(true); // Show placeholder if AdSense details are not provided
      return;
    }

    // Dynamically inject Google AdSense script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.setAttribute('data-ad-client', adClient);
    document.body.appendChild(script);

    // Clean up script to prevent duplicates
    return () => {
      document.body.removeChild(script);
    };
  }, [adClient, adSlot]);

  return (
    <div className={`ads-container ${className}`} style={style}>
      {showPlaceholder ? (
        <div className="ad-placeholder">
          <p>Ad Placeholder</p>
          <p>300x250</p>
        </div>
      ) : (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={adClient}
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      )}
      {!showPlaceholder && (
        <script>
          {(window.adsbygoogle = window.adsbygoogle || []).push({})}
        </script>
      )}
    </div>
  );
};

export default Ads;
