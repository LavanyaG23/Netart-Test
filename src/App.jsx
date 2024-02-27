import React from 'react'
import './App.css';
import Logo from './components/logo';
import { image1, image2, image3, CallImage, FacebookImage, globeImage } from './assets';

const App = () => {
  return (
    <div className="app">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="image-container">
        <div className="left-image-container">
          <img src={image1} alt="Image 1" className="left-image" />
        </div>
        <div className="right-image-container">
          <div className='right-content-top'>
          <h5><b>C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></h5>
          <p className='two-points'><ul><li>C.R.I's energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
          <li>C.R.I is the highest contributor in the country for the projects of EESL(Energy Efficient Services Limited) to replace the old inefficient pumps with 5 star rated energy efficient smart pumps with IoT enabled control panel.</li>
          </ul></p>
          </div>
          <img src={image2} alt="Image 2" className="right-image" />
          {/* Additional content for the right image goes here */}
          <div className='right-content-bottom'>
          <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>, Mr.G.Selvaraj, Joint Managing Director of C.R.I Group recieved the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
        </div>
      </div>
      <div className="additional-content">
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
      </div>
      <div className='bottom-image'>
        <img src={image3} alt="Image 3" className="additional-image" />
      </div>
      <div className='centeredcontent'>
        <p>Valves - Pumps - Pipes - IoT Devices & Controllers - Wires & Cables - Solar Systems - Motors</p>
      </div>
      <div className="red-line"></div>
      <div className='footer'><h4><b>C.R.I FLUIDS SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></h4></div>
      <div  className="centered-content"><p>CHEMICALS & PROCESS<span>|</span>POWER<span>|</span>WATER & WASTE WATER<span>|</span>OIL & GAS<span>|</span>PHARMA<span>|</span>SUGARS & DISTILLERIES<span>|</span>PAPER & PULP<span>|</span>MARINE & DEFENCE<span>|</span>METAL & MINING<span>|</span>FOOD & BEVERAGE<span>|</span>PETROCHEMICAL & REFINERIES<span>|</span>SOLAR<span>|</span>BUILDING<span>|</span>HVAC<span>|</span>FIRE FIGHTING<span>|</span>AGRICULTURE & RESIDENTIAL</p></div>
      <div className="red-box">
        <div className='redbox1'>
          <div>
            <p><img className= "redIcon1" src={CallImage} alt="Phone Icon" /> Toll free <b>1800 200 1234</b></p>
          </div>
        </div>
        <div className='redbox2'>
          <div>
            <a href="https://www.facebook.com/cripumps" target='_blank'> <img className= "redIcon2" src={FacebookImage} alt="Facebook Icon" /> www.facebook.com/cripumps</a>
          </div>
        </div>
        <div className='redbox3'>
          <div>
            <a href="https://www.crigroups.com" target="_blank"><img className= "redIcon3" src={globeImage} alt="Website Icon" /> www.crigroups.com</a>
          </div>
        </div>
    </div>

    </div>
  )
}

export default App