import React from 'react'
import '../styles/WeatherDataStyle.css';

export default function HourDegreeComp() {
  return (
    <div className='hour-degree-container'>
        <div className='hour'>13:00</div>
        <div className='degree'>19&deg;</div>
    </div>
  )
}
