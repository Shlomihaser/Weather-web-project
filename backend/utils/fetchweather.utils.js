import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

export const fetchWeatherByCity = async (city) => await axios.get(`${process.env.WEATHER_API_URL}?key=${process.env.WEATHER_API_KEY}&q=${city}&days=1&aqi=no&alerts=no`); 




