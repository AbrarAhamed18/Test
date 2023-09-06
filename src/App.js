
import './App.css';
import NavBar from './components/Navbar/navBar';
import VideoSec from './components/videoSec/videoSec';

import Vidncar from './components/vidncar/vidncar';
import Cards from './components/cards/cards';
import Carousel from './components/carousel/carousel';
import Gallery from './components/gallery/gallery';
import Rating from './components/rating/rating';
import Ourvalues from './components/ourvalues/ourvalues';
import Game from './components/game/game';
import Powerup from './components/powerup/powerup';
import Ourstory from './components/Ourstory/Ourstory';
import Footer from './components/Footer/Footer';
import Staticfooter from './components/Staticfooter/Staticfooter';
function App() {
  return (
    <>
    <NavBar/>
    <VideoSec />
   
    <Vidncar/>
    <Cards/>
    <Carousel />
    <Gallery/>
    <Rating/>
    <Ourvalues/>
    <Game/>
    <Powerup/>
    <Ourstory/>
    <Footer/>
    <Staticfooter/>
    </>
  );
}

export default App;
