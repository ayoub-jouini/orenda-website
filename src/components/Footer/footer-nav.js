import React from "react";
import { Link } from "react-router-dom";

const FooterNav = () => {
    return (
        <ul className="footer-nav">
            <li><Link to="/">Video games Developpement</Link></li>
            <li><Link to="/">Graphic Design</Link></li>
            <li><Link to="/">Web Developpement</Link></li>
            <li><Link to="/">Video Editing</Link></li>
        </ul>
    );
}

export default FooterNav;