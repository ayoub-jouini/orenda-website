import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import NavMenu from './nav';

const Header = () => {

    const [navToggler, setNavTogler] = useState("");
    const [classyMenu, setClassyMenu] = useState("");
    const [breakpoint, setBreakpoint] = useState("breakpoint-off")

    const [scrollPosition, setScrollPosition] = useState(0);
    const [sticky, setSticky] = useState("");

    const screen = useMediaQuery({ query: '(max-width: 991px)' })

    window.addEventListener("scroll", (e) => {
        setScrollPosition(e.target.documentElement.scrollTop)
    })

    useEffect(() => {
        if (scrollPosition > 0) {
            setSticky("sticky");
        } else {
            setSticky("");
        }
    }, [scrollPosition])

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
        <header className={`header-area ${sticky}`} >
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

                            <NavMenu />

                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;