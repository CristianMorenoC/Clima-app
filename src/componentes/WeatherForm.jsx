import React, {useState} from 'react';
import './estilos/weatherForm.css'

//hooks
import UseInformation from '../hooks/useInformation';

const WeatherForm = () => {

    const [ciudad, setCiudad] = useState('');
    const [pais, setPais] = useState('');

    const [ getWeather] = UseInformation(pais, ciudad);

    return (
        <div className="">
            <form className="flex w-screen items-center flex-col" onSubmit={getWeather} >
                <div className="contenedor-input my-4 px-4 py-1">
                    <input
                    type="text"
                    name="city"
                    placeholder="CITY"
                    className="focus:outline-none my-1 p-1 rounded w-full "
                    value={ciudad}
                    onChange={(e)=>setCiudad(e.target.value)}
                    />
                </div>
                <div className="contenedor-input my-4 px-4 py-1">
                    <input
                    type="text"
                    name="country"
                    placeholder="COUNTRY"
                    className="focus:outline-none my-1 p-1 rounded w-full "
                    value={pais}
                    onChange={(e)=>setPais(e.target.value)}
                    />
                </div>
                <button type="submit" className="boton-formulario w-1/4 py-1 px-4">GET WEATHER</button>
            </form>
        </div>
    );
}

export default WeatherForm;