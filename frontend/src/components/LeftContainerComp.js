import React from 'react'
import '../styles/LeftContainer.css'
import CityInputComp from './CityInputComp'

export default function LeftContainerComp() {
  return (
    <div className='left-container'>
      <div className='title-input-wrapper'>
        <p className='title'>
          Use our weather app <br/>
          to see the weather <br/>
          around the world
        </p>
        <CityInputComp/>
      </div>

      <div className='other-details'>
         <p>latitude 32.78 longtitude 89</p>
        <p>accurate at 13/02/2022 at 16:24</p>
      </div>
    </div>
  )
}
