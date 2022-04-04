import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo-container">
                <img src={logo} className="logo" alt="PGASZ" />
            </Link>

            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
