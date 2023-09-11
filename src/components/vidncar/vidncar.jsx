import './vidncar.css'
import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Vidncar = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
},[])
  return (
    <section id="section1" className='midText'>
        <div className="container">
            <div className="bigText">
        <h1 data-aos='fade-up'>A Casually Mad</h1>
        <h1 data-aos='fade-up'>Career</h1>
        </div>
        <div className="sepText">
        <p data-aos='fade-up' className='sep'>come and join talented team of passionate game makers</p>
        </div>
        </div>
    </section>
  )
}

export default Vidncar