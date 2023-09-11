import React,{useEffect} from 'react';
import './ratingcard.scss';
import Aos from 'aos'
import 'aos/dist/aos.css'

const RatingCard = ({ score, description, gradientColors }) => {
  const calculateDashArray = () => {
    return (190 * score) / 5;
  };

  const gradientStyle = {
    stroke: `url(#gradient-${score})`
  };
  useEffect(()=>{
    Aos.init({duration: 2000})
},[])

  

  return (
    <div  className="rating-card">
      
      <div className="loading-animation">
        <svg className="circular" viewBox="0 0 64 64">
          <defs>
            <linearGradient id={`gradient-${score}`} x1="0%" y1="0%" x2="100%" y2="0%">
              {gradientColors.map((color, index) => (
                <stop key={index} offset={`${(index / (gradientColors.length - 1)) * 100}%`} stopColor={color} />
              ))}
            </linearGradient>
          </defs>
          <circle 
            className="path-bg"
            cx="32"
            cy="32"
            r="30"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="4"
          />
          <circle
            className="path"
            cx="32"
            cy="32"
            r="30"
            fill="none"
            strokeWidth="4"
            style={{ ...gradientStyle, strokeDasharray: calculateDashArray(), strokeDashoffset: 0 }}
          />
          <text className="score-text" x="50%" y="50%" dy=".3em" textAnchor="middle">
            {score}
          </text>
        </svg>
      </div>
      <div className="description">
        {description}
      </div>
    </div>
  );
};

export default RatingCard;
