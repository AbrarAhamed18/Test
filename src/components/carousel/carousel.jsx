import React,{useState,useEffect} from 'react'
import './carousel.css'
import cimg from '../../Assets/carousel.png'
// import car1 from '../../Assets/car1.mp4'
// import car2 from '../../Assets/car2.mp4'

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
  

// import PlayIcon from '../../Assets/play.png';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Carousel = () => {
  useEffect(()=>{
    Aos.init({duration: 500})
},[])


  // const videoData = [
  //   {
  //     id: 1,
  //     title: 'Video 1',
  //     description: " “What makes Madbox special is the Madboxers” Jean-Nicolas Co-founder & CEO ",
  //     videoUrl: {car1},
  //   },
  //   {
  //     id: 2,
  //     title: 'Video 2',
  //     description: 'Description for Video 2',
  //     videoUrl: {car2},
  //   },
  //   {
  //     id: 3,
  //     title: 'Video 3',
  //     description: 'Description for Video 3',
  //     videoUrl: 'video3.mp4',
  //   },
  //   {
  //     id: 4,
  //     title: 'Video 4',
  //     description: 'Description for Video 4',
  //     videoUrl: 'video4.mp4',
  //   },
  //   {
  //     id: 5,
  //     title: 'Video 5',
  //     description: 'Description for Video 5',
  //     videoUrl: 'video5.mp4',
  //   },
  //   // Add more video data objects here
  // ];
  // const settings = {
  //   slidesToShow: 4, // Number of visible slides
  //   slidesToScroll: 1,
  //   infinite: false,
  // };

  // const [selectedVideo, setSelectedVideo] = useState(null);

  // const selectVideo = (video) => {
  //   setSelectedVideo(video);
  // };

  // const playVideo = () => {
  //   // Add logic to play the selected video
  //   if (selectedVideo) {
  //     // You can use HTML5 video player methods to play the video
  //     const videoElement = document.getElementById('video-player');
  //     if (videoElement) {
  //       videoElement.play();
  //     }
  //   }
  // };
  return (
   <section id='section2'>
   <div className="carousel">
    <div className="textc">
      <h1 data-aos='fade-up'>Inside MADBOX </h1>
      <p data-aos='fade-up'>What they think about working at Madbox and what their days look like</p>
    </div>
    

    <img src={cimg} className='carimg' alt="" />
   






   </div>
   
   
   </section>
  )
}
export default Carousel;

