import React from 'react';
import { useContext } from 'react/cjs/react.development';

//componentes
import Card from './../../componentes/Card';

// context
import CardContext from './../../context/CardContext'


const Detalles = () => {

    const {cards} =useContext(CardContext);

    return (
        <div className="flex w-screen">
            {
                cards && cards.length > 0 ?
                cards.map(card => <Card  key={card.id} clima={card} />)
                :
                <h1 className="text-center w-full" >No hay información</h1>
            }
        </div>
    );
}

export default Detalles;