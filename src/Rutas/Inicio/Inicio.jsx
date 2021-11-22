import React, {useState} from 'react';

//componentes
import WeatherForm from './../../componentes/WeatherForm';
import WeatherInfo from './../../componentes/WeatherInfo';

//hooks
import { useInformation } from '../../hooks/useInformation';
import Error404 from '../../componentes/error404/Error404';

const Inicio = () => {


    const [ciudad, setCiudad] = useState('');
    const [pais, setPais] = useState('');

    const {clima, getWeather, error404} = useInformation(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=ae5c7e6662165e8c16bffea7b1b0d3f6&units=metric`);


    return (
        <>
        {
            error404 ?
            <Error404 />
            :
            <>
                <div>
                    <WeatherForm ciudad = {ciudad} pais = {pais} setCiudad = {setCiudad} setPais = {setPais} getWeather = {getWeather} />
                </div>
                <div className = "flex w-screen mt-4 justify-center">
                    <WeatherInfo clima = {clima} />
                </div>
            </>
        }
        </>
    );
}

export default Inicio;