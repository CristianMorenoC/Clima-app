import React from 'react';
import './estilos/Card.css'
//componentes
import Videos from './Videos';

//iconos
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Card = ({clima}) => {
    console.log(clima);
    return (
        <div className="card">
        <Videos clima={clima} />
        <button className="card__button" ><FontAwesomeIcon icon={faPlusCircle} /></button>
    </div>
    );
}

export default Card;