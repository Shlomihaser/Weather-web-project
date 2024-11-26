import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();
const WEATHER_URL = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=`;

export const fetchWeatherByCity = async (city) => await axios.get(`${WEATHER_URL}${city}`);
