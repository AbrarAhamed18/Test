import React,{useState} from 'react'
import './gamecard.css'

const Gamecard = ({ content }) => {
    const [hovered, setHovered] = useState(false);
    const [flipped, setFlipped] = useState(false);
  
    const handleHover = () => {
      setHovered(true);
    };
  
    const handleLeave = () => {
      setHovered(false);
    };
  
    const handleClick = () => {
      setFlipped(!flipped);
    };
  
    return (
      <div
        className={`interactive-card ${hovered ? 'hovered' : ''} ${flipped ? 'flipped' : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >
        <div className="card front">
          {/* Display front content here */}
          <p>{content.front}</p>
        </div>
        <div className="card back">
          {/* Display back content here */}
          <p>{content.back}</p>
        </div>
      </div>
    );
  };

export default Gamecard