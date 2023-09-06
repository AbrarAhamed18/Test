import React from "react";
import "./rating.css";
import star from "../../Assets/start1.png";
import RatingCard from "./ratingcard";

const Rating = () => {
  return (
    <section id='section4'>
      <div className="line1">
        
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
            
        <p>
          Our ratings on  <span>GlassDoor</span>
        </p>
        
        

        
            <img className="starpic" src={star} alt="" />
         


        
       

       
        
        
          
        </div>
      </div>

      <div className="line2">
        <p>
          Transparency builds trust and that is why we encourage everyone to
          share their{" "}
        </p>
        <p>experiences at Madbox.</p>
      </div>

      <div className="rating-card-container">
      <RatingCard score={4.9} description="Culture & Values" gradientColors={['#87CEEB', '#32CD32']}  />
      <RatingCard score={4.7} description="Diversity & Inclusion"  gradientColors={['#9B59B6', '#3498DB']} />

      <RatingCard score={4.5} description="Work/Life Balance" gradientColors={['#FFB74D', '#FF8A65']} />
      <RatingCard score={4.7} description="Senior Leadership" gradientColors={['#FF69B4', '#9B59B6']} />
      <RatingCard score={4.7} description="Career Opportunities" gradientColors={['#FF1493', '#FFA500']}/>


    </div>

      
    </section>
  );
};

export default Rating;
