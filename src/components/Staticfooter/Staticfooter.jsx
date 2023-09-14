

import React, { useState } from 'react';
import './staticfooter.css';

function Staticfooter() {
  const [activeButton, setActiveButton] = useState(null);

  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveButton(sectionId); // Set the active button
    }
  };

  return (
    <footer>
      <div className="footer-links">
        <button
          onClick={() => handleNavigation('section1')}
          className={activeButton === 'section1' ? 'active' : ''}
        >
          A Casually Mad Career
        </button>
        <button
          onClick={() => handleNavigation('section2')}
          className={activeButton === 'section2' ? 'active1' : ''}
        >
          Inside MADBOX
        </button>
        <button
          onClick={() => handleNavigation('section3')}
          className={activeButton === 'section3' ? 'active' : ''}
        >
          Our Values
        </button>
        <button
          onClick={() => handleNavigation('section4')}
          className={activeButton === 'section4' ? 'active2' : ''}
        >
          Power up with Benefits.
        </button>
        <button
          onClick={() => handleNavigation('section5')}
          className={activeButton === 'section5' ? 'active' : ''}
        >
          Our Story
        </button>
      </div>
    </footer>
  );
}

export default Staticfooter;
