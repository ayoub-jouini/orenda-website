import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {

    const [navToggler, setNavTogler] = useState("");
    const [classyMenu, setClassyMenu] = useState("");
    const [breakpoint, setBreakpoint] = useState("breakpoint-off")

    const screen = useMediaQuery({ query: '(max-width: 991px)' })

    useEffect(() => {
        if (screen) {
            setBreakpoint("breakpoint-on")
        } else {
            setBreakpoint("breakpoint-off")
        }
    }, [screen])

    const navBarToggler = () => {
        if (navToggler === "") {
            setNavTogler("active");
            setClassyMenu("menu-on");
        } else {
            setNavTogler("");
            setClassyMenu("");
        }
    }


    return (
        <header className="header-area">
            <div className={`classy-nav-container ${breakpoint}`}>
                <div className="container">

                    <nav className="classy-navbar justify-content-between" id="conferNav">


                        <Link to="/" className="nav-brand"><img src="./assets/images/core-img/logo.png" alt="" /></Link>


                        <div className="classy-navbar-toggler">
                            <span className={`navbarToggler ${navToggler}`} onClick={navBarToggler}><span></span><span></span><span></span></span>
                        </div>


                        <div className={`classy-menu ${classyMenu}`}>

                            <div className="classycloseIcon" onClick={navBarToggler}>
                                <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                            </div>

                            <div className="classynav">
                                <ul id="nav">
                                    <li ><NavLink to="/" activeClassName="active">Home</NavLink></li>
                                    <li><NavLink to="/team" activeClassName="active">Team</NavLink></li>
                                    <li><NavLink to="/events" activeClassName="active">Events</NavLink></li>
                                    <li><NavLink to="/articles" activeClassName="active">Articles</NavLink></li>
                                    <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                                </ul>



                            </div>

                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;