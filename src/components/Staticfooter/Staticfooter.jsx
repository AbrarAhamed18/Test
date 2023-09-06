import React from 'react';
import './staticfooter.css';

function Staticfooter() {
  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer>
      <div className="footer-links">
        <button onClick={() => handleNavigation('section1')}>A Casually Mad Career</button>
        <button onClick={() => handleNavigation('section2')}>Inside MADBOX</button>
        <button onClick={() => handleNavigation('section3')}>Our Values</button>
        <button onClick={() => handleNavigation('section4')}>Power up with Benefits.</button>
        <button onClick={() => handleNavigation('section5')}>Our Story</button>
      </div>
    </footer>
  );
}

export default Staticfooter;
