import React from 'react'
import video from '../../Assets/talk1.mp4'
import './videoSec.css'

const VideoSec = () => {
    
  return (
    <section className='videoSec'>
        <div className="videoTalk"></div>
            {/* <h1>Unleash Your Creativity! </h1> */}
            <video className='videoFolder' src={video} muted autoPlay loop type="video/mp4" ></video>
            <div className="vText">
                <h1>Unleash Your Creativity! </h1>
            </div>
        
    </section>
  )
}

export default VideoSec