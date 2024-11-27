import React from 'react';
import '../styles/WeatherDataStyle.css';
import WeatherDetailComp from './WeatherDetailComp';
import HourDegreeComp from './HourDegreeComp';

export default function WeatherDataComp() {
  return (
    <div className='weather-data-background'>

      <div className='weather-data-container'>

        <div className='location-date-wrapper'>
          <div className='city'>Tel Aviv</div>
          <div className='country'>israel</div>
          <div className='date-time'>13/2/22 at 16:00</div>
        </div>

        <div className='degree-status'>
          <div className='degree'>18&deg;</div>
          <div className='status'>sunny</div>
        </div>

        <div className='weather-details'>
          <WeatherDetailComp title="precipitation" value="0 mm"/>
          <WeatherDetailComp title="humidity" value="53%"/>
          <WeatherDetailComp title="wind" value="28 km/h"/>
        </div>

        <div className='hourly-forecast'>
          <HourDegreeComp/>
          <HourDegreeComp/>
          <HourDegreeComp/>
          <HourDegreeComp/>
          <HourDegreeComp/>
        </div>

      </div>

    </div>
  )
}
