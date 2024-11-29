import React, { useContext, useEffect } from 'react'
import '../styles/IntroStyle.css'
import fintekLogo from '../assets/fintek-logo.png';
import CityInputComp from '../components/CityInputComp';
import { WeatherContext } from '../App';
import { formatDate } from '../utils/weather.utils';
import WeatherDataComp from './WeatherDataComp';

export default function IntroComp() {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div className='intro'>

      <img className='intro__logo' alt="Fintek logo" src={fintekLogo}/>
      
      <div className='intro__content'>

        <div className='intro__header'>
          <h1 className='intro__title'>
            Use our weather app<br/>
            to see the weather<br/>
            around the world
          </h1>
          <CityInputComp/>

        </div>
        
        {weatherData && (
          <div className='intro__details'>
            <p>Latitude: {String(weatherData.location.lat).substring(0,5)} &emsp;Longitude: {String(weatherData.location.lon).substring(0,5)}</p>
            <p>Accurate to: {formatDate(weatherData.location.localtime)}</p>
          </div>
        )}
        
      </div>

    </div>
  )
}
