import { fetchWeatherByCity } from "../utils/fetchweather.utils.js";

export const getWeatherByCity = async (req,res) => {
    const {city} = req.query;
    
    try {
        if(!city)
            throw new Error("City field is missing");
        const weatherFetch =  await fetchWeatherByCity(city);
        res.send({success:true,data:weatherFetch.data});
    } catch(error){
        res.send( {success:false,message:error.message});
    }
}