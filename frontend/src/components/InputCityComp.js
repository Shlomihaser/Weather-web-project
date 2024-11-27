import React from 'react'

export default function CityInputComp() {
  return (
<div className="city-input-container">
      <label htmlFor="cityInput">City name</label>
      <div className="input-button-wrapper">
        <input
          type="text"
          id="cityInput"
          placeholder="Enter city name"
        />
        <button type="button">Check</button>
      </div>
    </div>
  )
}
