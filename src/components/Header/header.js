import React from 'react';
import '../../style/css/default-assets/classy-nav.css'

const Header = () => {
    return (
        <header className="header-area">
            <div className="classy-nav-container breakpoint-off">
                <div className="container">

                    <nav className="classy-navbar justify-content-between" id="conferNav">


                        <a className="nav-brand" href="./index.html"><img src="./assets/images/core-img/logo.png" alt="" /></a>


                        <div className="classy-navbar-toggler">
                            <span className="navbarToggler"><span></span><span></span><span></span></span>
                        </div>


                        <div className="classy-menu">

                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top"></span><span class="bottom"></span></div>
                            </div>

                            <div className="classynav">
                                <ul id="nav">
                                    <li className="active"><a href="index.html">Home</a></li>

                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="events.html">Events</a></li>
                                    <li><a href="blog.html">Articles</a></li>
                                    <li><a href="contact.html">Contact</a></li>
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