import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return ( 
        <div className="flex flex-wrap justify-center items-center flex-col">
        <h1 className="text-red-600 text-4xl font-extrabold text-center">Error 404</h1>
        <p className="m-8">La ciudad que esta buscando, no se encuentra</p>
        <Link to="/information" className="px-4 py-1 rounded bg-blue-400 hover:bg-blue-600">Ir a Inicio</Link>
        </div>
     );
}
 
export default Error404;