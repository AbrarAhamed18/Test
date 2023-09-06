import React from 'react'
import './ourstory.css'
import oimg from '../../Assets/ourstory.avif'

const Ourstory = () => {
  return (
    <section id='section5'>
    <div className="story">
        <div className="container">
            <div className="Otext">
        <h1 className='our'>Our</h1>
        <h1 className='story'>Story</h1>
        </div>
        <div className="Opic">
            <img className='Oimg' src={oimg} alt="" />
        </div>
        <div className="Para">
            <p>Your adventure at Madbox starts with being a team that shares in the <br/> journey, together. Through achievements and failures, you will overcome <br/>challenges and shape the bonds of those around you.</p>
        </div>
        </div>
        <div className="Discover">
            <button className='Dbtn btn '>Discover</button>
        </div>

        <div className="Enter">
            <h1>Enter the Mad <br/>Life </h1>

            {/* <div className="Epara"> */}
            <p className='ourP'>Hot off the presses, our blog aims to provide a deeper look into the <br/>creativity and passion we have at Madbox.</p>


            {/* </div> */}
            <div className="SeeMoreBtn">
                <button className='Sbtn btn'><h3>See more</h3></button>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Ourstory