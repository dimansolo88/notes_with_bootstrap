import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => (
    <nav className='navbar navbar-dark navbar-expand-lg bg-secondary '>
        <div className='navbar-brand'>
            Note
        </div>
        <ul className="navbar-nav">
            <li className="nav-link ">
                <NavLink className="nav-link" to="/" exact > Home </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

        </ul>
    </nav>
);

export default Navbar