import React from 'react'
import '../styles/WeatherDataStyle.css';

export default function WeatherDetail({title,value}) {
  return (
    <div className='weather-details-container'>
        <div className='title-detail'>{title}</div>
        <div className='value'>{value}</div>
    </div>
  )
}
