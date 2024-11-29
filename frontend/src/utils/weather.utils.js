import axios from "axios";
import { parse, format } from 'date-fns';

const WEATHER_SERVER_URL = `http://localhost:5000/api/weather`;

export const fetchWeatherData = async (city) => {
    return await axios.get(WEATHER_SERVER_URL, {
        params: { city: city }
    });
};

export const formatDate = (dateString) => {
    const parsedDate = parse(dateString, 'yyyy-MM-dd HH:mm', new Date());
    return format(parsedDate, 'dd/MM/yyyy \'at\' HH:mm');
}