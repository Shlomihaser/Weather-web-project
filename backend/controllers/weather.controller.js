import { fetchWeatherByCity } from "../utils/fetchweather.utils.js";

export const getWeather = async (req,res) => {
    const {city} = req.body;

    try {
        const weatherFetch =  await fetchWeatherByCity(city);
        res.send(weatherFetch.data);
    } catch(error){
        console.error('Error',error);
    }
}