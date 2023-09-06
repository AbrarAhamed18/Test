import React from 'react'
import './carousel.css'
import cimg from '../../Assets/carousel.png'

const Carousel = () => {
  return (
   <section id='section2'>
   <div className="carousel">
    <div className="textc">
      <h1>Inside MADBOX </h1>
      <p>What they think about working at Madbox and what their days look like</p>
    </div>
    <img src={cimg} className='carimg' alt="" />
   </div>
   
   
   </section>
  )
}
export default Carousel;

