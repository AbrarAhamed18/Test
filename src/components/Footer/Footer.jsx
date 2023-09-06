import React from 'react'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

import {AiFillLinkedin} from 'react-icons/ai'
import {BiLogoDiscord} from 'react-icons/bi'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillApple} from 'react-icons/ai'
import {BiLogoPlayStore} from 'react-icons/bi'
import './footer.css'
import img from '../../Assets/logo.png'
import Pflag from '../../Assets/parisFlag.jpeg'
import Bflag from '../../Assets/barcelonaFlag.jpeg'

const Footer = () => {
  return (
    <div className="Footer">
        <div className="MadLogo">
            <div className="MLogo">
                <img className='MadboxLogo' src={img} alt="" />
            </div>
            <p>Copyright © 2021 MadBox. <br/>all rights reserved</p>
        </div>
        <div className="CountryFlag">
        <div className="Paris">
            
                <img className="parisflag" src={Pflag} alt="" />
            
            <h4>Madbox Paris</h4>
            <p>19 Rue Poissonnière <br/>75002 Paris France</p>


        </div>
        <div className="Barcelona">
            
                <img className="Barflag" src={Bflag} alt="" />
            
            <h4>Madbox Barcelona</h4>
            <p>Utopicus Gal·la Placídia <br />08006 Barcelona</p>

        </div>
        </div>

        <div className="socials">
            <h4 className='Stay'>Stay tuned!</h4>
            <div className="EmailInput">
                <input type="email" placeholder='Enter your email' className='Email'/>
            </div>
            <div data-aos='fade-up' className="footerSocials flex">
                <BiLogoDiscord className="icon"/>
                <AiFillFacebook className="icon"/>
                <AiFillInstagram className="icon"/>
                <AiOutlineTwitter className="icon"/>
                <AiFillLinkedin className='icon'/>
                <AiFillApple className='icon'/>
                <BiLogoPlayStore className='icon'/>
              </div>
        </div>
    </div>
                
    )
}






export default Footer


