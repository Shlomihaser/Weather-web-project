import React, { useContext, useState } from 'react';
import '../styles/CityInputStyle.css';
import { WeatherContext } from '../App';

export default function CityInputComp() {
  const [city, setCity] = useState('');
  const [error, setError] = useState(false);
  const { getWeatherData } = useContext(WeatherContext);
  
  const handleClick = async () => {
    if (!city.trim()) {
      setError(true);
      return;
    }
    const success = await getWeatherData(city);
    if (!success) {
      setCity('');
      setError(true);
    }
  }
  
  const handleChange = (e) => {
    setCity(e.target.value);
    if (error) setError(false);
  }

  return (
    <div className="city-input">
      <label htmlFor="cityInput" className="city-input__label">City name</label>
      <div className="city-input__wrapper">
        <input
          type="text"
          id="cityInput"
          className="city-input__field"
          placeholder="Enter city name"
          autoComplete="off"
          value={city}
          onChange={handleChange}
        />
        <button type="button" className="city-input__button" onClick={handleClick}>Check</button>
      </div>
      {error && <div className='city-input__error'>*Please enter a valid city name*</div>}
    </div>
  )
}
