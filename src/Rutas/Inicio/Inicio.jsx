import React, {useState} from 'react';
//componentes
import WeatherForm from './../../componentes/WeatherForm';
import WeatherInfo from './../../componentes/WeatherInfo';

//hooks
import useInformation from '../../hooks/useInformation';


const Inicio = () => {


    // const [ciudad, setCiudad] = useState('');
    // const [pais, setPais] = useState('');

    // const [clima, setClima] = useState({
    //     temperature: '',
    //     description: '',
    //     humidity: '',
    //     wind_speed: '',
    //     city: '',
    //     country: '',
    //     error: null
    // })

    const [clima] = useInformation();

    // const getWeather = async (e) => {
    //     e.preventDefault();
    //     const API_CLIMA = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=ae5c7e6662165e8c16bffea7b1b0d3f6&units=metric`
    //     const response = await fetch(API_CLIMA);
    //     const responseJSON = await response.json();
    //     setClima({...clima,
    //         temperature: responseJSON.main.temp,
    //         description: responseJSON.weather[0].description,
    //         humidity: responseJSON.main.humidity,
    //         wind_speed: responseJSON.wind.speed,
    //         city: responseJSON.name,
    //         country: responseJSON.sys.country
    //     })
    // }



    return (
        <>
            <div>
                <WeatherForm />
            </div>
            <div className="flex w-screen mt-4 justify-center">
                <WeatherInfo clima={clima} />
            </div>
        </>
    );
}

export default Inicio;