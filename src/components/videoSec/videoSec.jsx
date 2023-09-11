import React,{useEffect} from 'react'
import video from '../../Assets/hero1.mp4'
import './videoSec.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const VideoSec = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
},[])
    
  return (
    <section className='videoSec'>
        {/* <div className="videoTalk"></div> */}
           
            <video data-aos='zoom-in' className='videoFolder' src={video} muted autoPlay loop type="video/mp4" ></video>
            <div className="vText">
                <h1 data-aos='slide-up'>Unleash Your Creativity! </h1>
            </div>
        
    </section>
  )
}

export default VideoSec