
import { Helmet } from 'react-helmet';
import IntroComp from './components/IntroComp'
import WeatherDataComp from './components/WeatherDataComp';
import { createContext, useState } from 'react';
import { fetchWeatherData } from './utils/weather.utils';
import './styles/AppStyle.css'
export const WeatherContext = createContext();

function App() {
  const [weatherData,setWeatherData] = useState(null);

  const getWeatherData = async (city) => {
    try {
      const response = await fetchWeatherData(city);
      if(response.data.success){
        setWeatherData(response.data.data);
        return true;
      } else {
        setWeatherData(null);
        return false;
      }
    } catch (error){
      setWeatherData(null);
      return false; 
    }
  }

  return (
    <div className="app-container">
      
      <Helmet>
        <link 
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Heebo:wght@100..900&display=swap" rel="stylesheet" 
        />
      </Helmet>

      <WeatherContext.Provider value={{weatherData,getWeatherData}}>
        <IntroComp/>
        <WeatherDataComp/>
      </WeatherContext.Provider>

    </div>
  );
}

export default App;
