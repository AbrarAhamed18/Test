import React,{useState} from "react";
import "./gallery.css";
import img from "../../Assets/pic1.png";
import img1 from "../../Assets/pic2.png";
import img2 from "../../Assets/pic3.png";
import img3 from "../../Assets/pic4.png";
import video1 from "../../Assets/diss1.mp4";
import { IoMdPlay } from 'react-icons/io';

const Gallery = () => {
  // const [isPlaying, setIsPlaying] = useState(false);

  // const togglePlay = () => {
  //   setIsPlaying(!isPlaying);
  // };
  return (
    <>
      <div className="gallery">
        <div className="firstRow">
          <div className="pic1d">
            <img className="pic1" src={img} alt="" />
          </div>
          <div className="outer">
            < video 
              src={video1}
              className="videoFolder1"
              
              controls={true} 
              // onClick={togglePlay}
              autoPlay
              type="video/mp4"/>
              {/* {!isPlaying && (
        <div className="play-button" onClick={togglePlay}>
          <IoMdPlay size={40} />

        </div>
      )} */}
          </div>
        </div>
        <div className="secondRow">
          <img className="pic2" src={img1} alt="" />

          <img className="pic3" src={img2} alt="" />
          <img className="pic4" src={img3} alt="" />
        </div>
      </div>

      <div className="line"></div>
    </>
  );
};

export default Gallery;
