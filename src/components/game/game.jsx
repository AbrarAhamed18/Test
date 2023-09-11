import React,{useEffect} from 'react'
import gimg from '../../Assets/game.png'
import './game.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Game = () => {
  useEffect(()=>{
    Aos.init({duration: 1000})
},[])
  return (
    <div data-aos='zoom-in' data-aos-duration="1000" className="game">
        <img className='gpic' src={gimg} alt="" />
    </div>
    
  )
}

export default Game