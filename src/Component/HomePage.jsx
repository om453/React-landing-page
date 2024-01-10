import React from 'react'
import '../App.css'
import './HomePage.css'
import HeroImage from '../assets/images/hero-image.png'
import flipKartIcon from '../assets/images/flipkart.png'
import amazonIcon from '../assets/images/amazon-icon-21103.png'

function HomePage() {
  return (
    <div className='container hero-section'>

      <div className='hero-section-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className='hero-section-button'>
          <button>Shop Now</button>
          <button className='secondary-btn'>Category</button>
        </div>

        <div className='shoping-content'>
          <p>Also Available On</p>

          <div className='shoping-icons'>
            <img src={flipKartIcon} alt="shoping icon" />
            <img src={amazonIcon} alt="shoping icon" width={32} height={32}/>
          </div>
        </div>
      </div>

      <div>
        <img src={HeroImage} alt={HeroImage} />
      </div>



    </div>
  )
}

export default HomePage