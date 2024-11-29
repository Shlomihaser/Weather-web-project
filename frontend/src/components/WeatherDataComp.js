import React, { useContext } from 'react';
import '../styles/WeatherDataStyle.css';
import WeatherDetailComp from './WeatherDetailComp';
import { WeatherContext } from '../App';
import { formatDate } from '../utils/weather.utils';

export default function WeatherDataComp() {
  const { weatherData } = useContext(WeatherContext);

  const getNextFiveHours = () => {
    const currentHour = new Date(weatherData.location.localtime).getHours();
    const hourlyForecast = weatherData.forecast.forecastday[0].hour;
    const nextFiveHours = [];

    for (let i = 0; i < 5; i++) {
      const index = (currentHour + i + 1) % 24;
      nextFiveHours.push(hourlyForecast[index]);
    }

    return nextFiveHours;
  };

  return (
    <div className='weather-data-background'>
      {weatherData ? (
        <div className='weather-data-container'>
          <div className='location-date-wrapper'>
            <div className='city'>{weatherData.location.name}</div>
            <div className='country'>{weatherData.location.country}</div>
            <div className='date-time'>{formatDate(weatherData.current.last_updated)}</div>
          </div>

          <div className='degree-status'>
            <div className='degree'>{Math.round(weatherData.current.temp_c)}°</div>
            <div className='status'>{weatherData.current.condition.text} sunny</div>
          </div>

          <div className='weather-details'>
            <WeatherDetailComp title="precipitation" value={`${weatherData.current.precip_mm} mm`} />
            <WeatherDetailComp title="humidity" value={`${weatherData.current.humidity}%`} />
            <WeatherDetailComp title="wind" value={`${weatherData.current.wind_kph} km/h`} />
          </div>

          <div className='weather-details'>
            {getNextFiveHours().map((hour, index) => (
              <WeatherDetailComp
                key={index}
                title={new Date(hour.time).getHours() + ":00"}
                value={`${Math.round(hour.temp_c)}°`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className='weather-data-container blank'>
          <div className="placeholder-text">
            <h2>No weather data available</h2>
            <p>Enter a location to see the weather forecast</p>
          </div>
        </div>
      )}
    </div>
  );
}