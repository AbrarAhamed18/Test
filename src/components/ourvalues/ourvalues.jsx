import React,{useEffect} from 'react'
import './ourvalues.css'
import rimg1 from '../../Assets/rpic1.png'
import rimg2 from '../../Assets/rpic2.png'
import limg1 from '../../Assets/lpic1.png'
import limg2 from '../../Assets/lpic2.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Ourvalues = () => {
    useEffect(()=>{
        Aos.init({duration: 1000})
    },[])
  return (
    <section id='section3' className='ourval'>
        <div className="outerBox">
            <div data-aos='fade-up' className="firstText">
            <h1>Our Values</h1>
            <p>We believe that in order to make the best games, you need to empower</p>
            <p className='bottomText'>the best people to unleash their creativity. </p>
            </div>
            <div className="firstContainer">
                <div className="leftText">
                    <h1 data-aos='fade-up' className='Explore'>Explore <br/>
                    Together.</h1>
                    <p data-aos='fade-up'>Game making is about exploration and facing uncertainty, together. High ambitions require humility about what we don’t know. That is why we have created an environment where our talents constantly support each other and where passion & learnings are shared.</p>
                </div>
                <div className="rightpic">
                    <img data-aos='zoom-in' className='rpic1' src={rimg1} alt="" />
                </div>
            </div>
            <div className="secondContainer">
                <div className="leftpic">
                <img data-aos='zoom-in' className='rpic1' src={limg1} alt="" />
                    
                </div>
                <div className="rightText">
                <h1 data-aos='fade-up' className='Learn'>Learn Fast.</h1>
                    <p data-aos='fade-up'>
Assessing our ideas through high-speed testing, and receiving feedback as fast and often as we can is paramount at Madbox. Quick failure and iteration is always preferred to long-drawn-out discussions.</p>                    
                </div>
            </div>
            <div className="thirdContainer">
                <div className="leftText">
                    <h1 data-aos='fade-up'  className='Be'>Be Thoughtfully Candid.</h1>
                    <p data-aos='fade-up'>At Madbox, anything should be said as long as it is thoughtfully shared. We believe that the delivery of feedback is as equally important as the message itself. This is our way to build a transparent culture, where everyone participates in both the celebrations and challenges of building a company together.</p>
                </div>
                <div className="rightpic">
                    <img data-aos='zoom-in'  className='rpic1' src={rimg2} alt="" />
                </div>
            </div>
            <div className="fourthContainer">
                <div className="leftpic">
                <img data-aos='zoom-in' className='rpic1' src={limg2} alt="" />
                    
                </div>
                <div data-aos='fade-up' className="rightText">
                <h1 className='Shape'>Shape (y)our Journey.</h1>
                    <p>
                    We expect each Madboxers to shape their own journey, fully supported by a culture of complete ownership in decision making based on accountability and trust. This aims to allow everyone to learn, grow and write the next chapters in our Mad Story.</p>                </div>
            </div>
        </div>
        </section>
  )
}

export default Ourvalues