import {createContext, useState} from 'react';

const cardContext = createContext();

const CardProvider = ({children}) => {

    const [cards, setCards] = useState([]);

    const addCard = (clima) => {
        setCards([...cards, clima])
    }

    const removeCard = (id) => {
        setCards(cards.filter(card => card.id !== id))
    }


    let data = {
        cards,
        addCard,
        removeCard
    }


    return <cardContext.Provider  value={data} >{children}</cardContext.Provider>;
}
 

export {CardProvider};
export default cardContext;


