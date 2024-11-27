import React from 'react'
import '../styles/AppStyle.css';
import '../styles/IntroStyle.css'
import fintekLogo from '../assets/fintek-logo.png';
import InputCityComp from '../components/InputCityComp';

export default function IntroComp() {
  return (
    <div className='intro-container'>
      <img className='fintek-logo' alt="fintek-logo" src={fintekLogo}/>
      
      <div className='intro-flex-wrapper'>

        <div className='title-input-wrapper'>
          <p className='title'>
            Use our weather app <br/>
            to see the weather <br/>
            around the world
          </p>
          <InputCityComp/>
        </div>

        <div className='other-details'>
          <p>latitude 32.78&emsp;&ensp;longtitude 89.76</p>
          <p>accurate at 13/02/2022 at 16:24</p>
        </div>
        
      </div>
     
    </div>
  )
}
