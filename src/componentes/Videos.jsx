import React, {useEffect, useState} from 'react';

const Videos = ({clima}) => {

    const [fuente, setFuente] = useState('')

    useEffect (() => {
        const climaDescription = (clima) => {
            if(clima.description === "clear sky" ){
                setFuente ("soleado.gif")
            }else if (clima.description === "rain" || clima.description === "light rain" || clima.description === "shower rain"){
                setFuente ("lluvioso.gif")
            }else if (clima.description === "few clouds" || clima.description === "broken clouds" || clima.description === "scattered clouds" || clima.description === "overcast clouds" ){
                setFuente ("nublado.gif")
            }else if (clima.description === "thunderstorm"){
                setFuente ("tormenta.gif")
            }else if (clima.description === "snow") {
                setFuente ("nevado.gif")
            }else if (clima.description === "mist"){
                setFuente ("nublado.gif")
            }else {
                setFuente("soleado.gif")
            }
        }
        climaDescription(clima)
        console.log( clima );
    }, [clima])


    return (
        fuente !== '' &&
        <div className="card__video">
            <img src={require(`./../videos/${fuente}`).default} alt="clima" /><span className="card__video-span" > {clima.temperature}°C </span>
            <span className="card__video-span-city"> {clima.city} </span>
        </div>
    );
}
 
export default Videos;