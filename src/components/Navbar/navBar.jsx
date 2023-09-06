// import React, { useState, useEffect } from 'react';
// import './navBar.css';
// import img from '../../Assets/logo.png';

// const NavBar = () => {
//   const [showNavBar, setShowNavBar] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setShowNavBar(false);
//       } else {
//         setShowNavBar(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const navBarStyles = showNavBar
//     ? {
//         position: 'fixed',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         background: 'white',
//         width: '98%',
//         height: '7rem',
//         zIndex: 1000,
//         transition: 'all 0.3s ease',
//       }
//     : {
//         position: 'fixed',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         background: 'white',
//         width: '98%',
//         height: '7rem',
//         zIndex: 1000,
//         borderBottomLeftRadius: '30px',
//         borderBottomRightRadius: '30px',
//         marginLeft: '1rem',
//         boxShadow: '0 2px 4px rgba(2, 15, 29, 0.242)',
//         transition: 'all 0.3s ease',
//       };

//   return (
//     <section className="navBarSection">
//       <header style={navBarStyles}>
//         <div className="logoDiv">
//           <a href="#">
//             <img src={img} className="logo" alt="" />
//           </a>
//         </div>
//         <div>
//           <ul className="navLists">
//             <li className="navItems">
//               <a href="#" className="navLink">
//                 Our Games
//               </a>
//             </li>
//             <li className="navItems">
//               <a href="#" className="navLink">
//                 Our Story
//               </a>
//             </li>
//             <li className="navItems">
//               <a href="#" className="navLinkhire">
//                 We're Hiring 🔥
//               </a>
//             </li>
//           </ul>
//         </div>
//       </header>
//     </section>
//   );
// };

// export default NavBar;

import React, { useState, useEffect } from 'react';
import './navBar.css';
import img from '../../Assets/logo.png';

const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(true); // Initially show the navbar
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Check if the user is scrolling up or down
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down, hide the navbar
        setShowNavBar(false);
      } else {
        // Scrolling up, show the navbar
        setShowNavBar(true);
      }

      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const navBarStyles = showNavBar
    ? {
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'white',
        width: '98%',
        height: '7rem',
        zIndex: 1000,
        transition: 'all 0.3s ease',
      }
    : {
        display: 'none', // Hide the navbar when not scrolling up
      };

  return (
    <section className="navBarSection">
      <header style={navBarStyles}>
        <div className="logoDiv">
          <a href="#">
            <img src={img} className="logo" alt="" />
          </a>
        </div>
        <div>
          <ul className="navLists">
            <li className="navItems">
              <a href="#" className="navLink">
                Our Games
              </a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">
                Our Story
              </a>
            </li>
            <li className="navItems">
              <a href="#" className="navLinkhire">
                We're Hiring 🔥
              </a>
            </li>
          </ul>
        </div>
      </header>
    </section>
  );
};

export default NavBar;







