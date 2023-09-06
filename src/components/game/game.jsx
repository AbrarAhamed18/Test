import React from 'react'
import gimg from '../../Assets/game.png'
import './game.css'

const Game = () => {
  return (
    <div className="game">
        <img className='gpic' src={gimg} alt="" />
    </div>
    
  )
}

export default Game