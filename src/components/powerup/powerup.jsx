import React from 'react'
import './powerup.css'
import icard from '../../Assets/invertedCard.png'
// import Gamecard from '../GameCard/Gamecard'

const Powerup = () => {
//     const cardContents = [{
//         front: 'Front Content',
//         back: 'Back Content',
//       },
//     {
//         front: 'Front Content',
//         back: 'Back Content',
//     },
//     {
//         front: 'Front Content',
//         back: 'Back Content',
//     },


// ];
  return (
    <section className='power'>
    <div className="powerUp">
        <div className="Htext">
        <h1 className='HPower'>Power up with </h1>
        <h1 className='Bpower'> Benefits. </h1>

        <p className='Pone'>We offer benefits that embrace work life balance so that you can take </p> 
        <p className='Ptwo'>full advantage of being at the best place to make games.</p>
        </div>
    </div>
    <div >
        <img className="icard" src={icard} alt="" />
    </div>

    {/* <div className="card-container">
        {cardContents.map((content, index) => (
          <Gamecard key={index} content={content} />
        ))}
      </div> */}



    </section>
  )
}
export default Powerup
