import {useState} from 'react';


 export const useInformation  = (url) => {

    const [error404, setError404] = useState(false);

    const [clima, setClima] = useState({
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        id: '',
        error: null
    })

        const getWeather = async (e) => {
                setError404(false)
                e.preventDefault();
                const API_CLIMA = url
                const response = await fetch(API_CLIMA);
                const responseJSON = await response.json();
                console.log(typeof responseJSON.cod)
                if(responseJSON.cod === '404'){
                    setError404(true)
                }else{
                setClima({...clima,
                    temperature: responseJSON.main.temp,
                    description: responseJSON.weather[0].description,
                    humidity: responseJSON.main.humidity,
                    wind_speed: responseJSON.wind.speed,
                    city: responseJSON.name,
                    country: responseJSON.sys.country,
                    id: responseJSON.id
                })
                }
        }

    return {clima, getWeather, error404};
}

