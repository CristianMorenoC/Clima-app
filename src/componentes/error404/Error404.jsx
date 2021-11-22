import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return ( 
        <>
        <h1>Pagina no encontrada</h1>
        <p>La ciudad que esta buscando, no se encuentra</p>
        <Link to="/">Ir a Inicio</Link>
        </>
     );
}
 
export default Error404;