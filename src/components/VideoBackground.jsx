import React from 'react'
import { useEffect, useRef } from 'react'

const VideoBackground = ({ src }) => {
    const videoRef = useRef(null);
  
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.setAttribute('src', src);
        videoRef.current.load();
        videoRef.current.play();
      }
    }, [src]);
  
    return (
      <div className="video-background absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video ref={videoRef} autoPlay muted loop id="background-video" className="w-full h-full object-cover">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default VideoBackground;
