import React, { useRef, useState, useEffect } from 'react';

const Tradingbanner = () => {
  const isMobile = window.innerWidth < 600;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      setIsPlaying(!video.paused);
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && isPlaying) {
          toggleVideo();
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, 
    });

    if (video) {
      observer.observe(video);
    }
    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, [isPlaying, toggleVideo]);

  return (
    <div className="elementor-element elementor-element-a4fdc27 e-flex e-con-boxed e-con e-parent" >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} >
        <video loop className="background-video" ref={videoRef} style={{ width: '100%', height: '100%' }}  onClick={toggleVideo} >
          <source src="wp-content\market2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

         {!isPlaying && (
        <img
          src="wp-content/videotop2.png"
          alt="Video Thumbnail"
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', cursor: 'pointer' }}
          onClick={toggleVideo}
        />
      )}
        {isHovered && !isPlaying && (
          <div
            className="elementor-button-wrapper"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <a className="elementor-button elementor-button-link elementor-size-sm" onClick={toggleVideo} >
              <span className="elementor-button-content-wrapper">
                <span  className="elementor-button-icon elementor-align-icon-left" style={{ fontSize: '30px' }} >
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-play"  viewBox="0 0 448 512"  xmlns="http://www.w3.org/2000/svg" >
                    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                  </svg>{' '}
                </span>
              </span>
            </a>
          </div>
        )}
        {isHovered && isPlaying && (
          <div className="elementor-button-wrapper" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', }}  >
            <a className="elementor-button elementor-button-link elementor-size-sm" onClick={toggleVideo} >
              <span className="elementor-button-content-wrapper">
                <span  className="elementor-button-icon elementor-align-icon-left" style={{ fontSize: '30px' }} >
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-pause"  viewBox="0 0 448 512"  xmlns="http://www.w3.org/2000/svg"  >
                    <path d="M176 504h-40c-13.3 0-24-10.7-24-24V32c0-13.3 10.7-24 24-24h40c13.3 0 24 10.7 24 24v448c0 13.3-10.7 24-24 24zm144-24c-13.3 0-24-10.7-24-24V32c0-13.3 10.7-24 24-24h40c13.3 0 24 10.7 24 24v448c0 13.3-10.7 24-24 24z"></path>
                  </svg>{' '}
                </span>
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tradingbanner;
