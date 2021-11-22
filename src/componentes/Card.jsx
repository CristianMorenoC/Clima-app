import React, {useContext} from 'react';
import './estilos/Card.css'
import { useLocation } from 'react-router';

//componentes
import Videos from './Videos';

//iconos
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//context
import CardContext from '../context/CardContext';


const Card = ({clima}) => {
    const {addCard, removeCard} = useContext(CardContext);

    const {pathname} = useLocation()

    const addOrRemoveCard = () => {
        if (pathname === '/'){
            addCard(clima)
        }else {
            removeCard(clima.id)
        }
    }

    return (
            <div className = "card m-4">
                {
                    pathname === '/' ?
                    <>
                        <Videos clima = {clima} />
                        <span className = "card__video-span-city"> {clima.city} </span>
                        <button className="card__button" onClick={addOrRemoveCard} ><FontAwesomeIcon icon={faPlusCircle} /></button>
                    </>
                    :
                    <>
                        <Videos clima={clima} />
                        <span className = "card__video-span-city">Ciudad: {clima.city} </span>
                        <span className = "card__video-span-city">Pais: {clima.country} </span>
                        <span className = "card__video-span-city">{clima.description} </span>
                        <span className = "card__video-span-city">Wind: {clima.wind_speed}km/h </span>
                        <span className = "card__video-span-city">Humidity: {clima.humidity} </span>
                        <button className = "card__button transform rotate-45" onClick={addOrRemoveCard} ><FontAwesomeIcon icon={faPlusCircle} /></button>
                    </>
                }
            </div>
    );
}

export default Card;