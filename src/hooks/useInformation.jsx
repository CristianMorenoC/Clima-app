import {useState} from 'react';


 export const useInformation  = (url) => {

    const [clima, setClima] = useState({
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        error: null
    })

        const getWeather = async (e) => {
            e.preventDefault();
            const API_CLIMA = url
            const response = await fetch(API_CLIMA);
            const responseJSON = await response.json();
            setClima({...clima,
                temperature: responseJSON.main.temp,
                description: responseJSON.weather[0].description,
                humidity: responseJSON.main.humidity,
                wind_speed: responseJSON.wind.speed,
                city: responseJSON.name,
                country: responseJSON.sys.country
            })
        }

    return {clima, getWeather};
}
 
