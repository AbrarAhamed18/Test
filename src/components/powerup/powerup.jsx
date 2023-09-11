import React,{useEffect} from 'react'
import './powerup.css'
import icard from '../../Assets/invertedCard.png'
// import Gamecard from '../GameCard/Gamecard'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Powerup = () => {
  useEffect(()=>{
    Aos.init({duration: 1000})
},[])
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
    <div data-aos='zoom-in' className="powerUp">
        <div className="Htext">
        <h1 className='HPower'>Power up with </h1>
        <h1 className='Bpower'> Benefits. </h1>

        <p className='Pone'>We offer benefits that embrace work life balance so that you can take </p> 
        <p className='Ptwo'>full advantage of being at the best place to make games.</p>
        </div>
    </div>
    <div >
        <img data-aos='zoom-in' data-aos-duration="500" className="icard" src={icard} alt="" />
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
