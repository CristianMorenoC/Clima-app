import React from 'react';
import { NavLink } from 'react-router-dom';

//estilos
import './estilos/header.css'

//iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <div className="header-container w-screen bg-yellow-200" >
            <h2 className="titulo text-center text-white cursor-pointer text-4xl font-extrabold p-4 " >WEATHER APP</h2>
            <div className="flex justify-center">
                <NavLink to="/" exact={true} className="link  mx-1 p-4  text-white " ><FontAwesomeIcon icon={faCloud} className="icon-header" /><p> Form</p></NavLink>
                <NavLink to="/information" className="link  mx-1 p-4  text-white" ><FontAwesomeIcon icon={faCloud} className="icon-header" /><p> Information</p></NavLink>
            </div>
        </div>
    );
}

export default Header;