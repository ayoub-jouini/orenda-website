import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
    return (
        <div className="classynav">
            <ul id="nav">
                <li ><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/team" activeClassName="active">Team</NavLink></li>
                <li><NavLink to="/events" activeClassName="active">Events</NavLink></li>
                <li><NavLink to="/articles" activeClassName="active">Articles</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
        </div>
    );
}

export default NavMenu;