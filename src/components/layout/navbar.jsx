import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/layout.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="/assets/images/logo.png" alt="Logo" className="logo" />
            <ul className="nav-links">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
               
                <li>
                    <Link to="/login">Incio de sesion </Link>
                </li>
                <li>
                    <Link to="/comparador">Comparador </Link>
                </li>
                <li>
                    <Link to="/encuesta">Encuesta </Link>
                </li>

                <li>
                    <Link to="/configurador">Configurador </Link>
                </li>

               
            </ul>
        </nav>
    );
};

export default Navbar;
