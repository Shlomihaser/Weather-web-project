import { fetchWeatherByCity } from "../utils/fetchweather.utils.js";

export const getWeatherByCity = async (req,res) => {
    const {city} = req.body;
    
    try {
        if(!city)
            throw new Error("City field is missing");
        
        const weatherFetch =  await fetchWeatherByCity(city);
        res.send(weatherFetch.data);
    } catch(error){
        return res.status(400).json({success:false,message:error.message});
    }
}