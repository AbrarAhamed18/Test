import React, { useEffect, useRef } from 'react';
import video from '../../Assets/hero1.mp4';
import './videoSec.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const VideoSec = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });

    // Intersection Observer callback
    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        // Video is in view, play it
        videoRef.current.play();
      } else {
        // Video is out of view, pause it
        videoRef.current.pause();
      }
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    // Observe the video element
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup: disconnect the observer when the component unmounts
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className='videoSec'>
      <video
        data-aos='zoom-in'
        className='videoFolder'
        src={video}
        muted
        autoPlay
        loop
        type='video/mp4'
        ref={videoRef} // Reference to the video element
      ></video>
      <div className='vText'>
        <h1 data-aos='slide-up'>Unleash Your Creativity! </h1>
      </div>
    </section>
  );
};

export default VideoSec;
