import React from 'react'
import './App.css';
import Logo from './components/logo';
import { image1, image2, image3 } from './assets';

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
          <h5><b>C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 FOR THE 4TH TIME</b></h5>
          <p><ul><li>C.R.I's energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
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
      <img src={image3} alt="Image 3" className="additional-image" />
    </div>
  )
}

export default App