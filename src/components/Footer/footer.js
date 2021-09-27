import React from 'react';
import { Link } from 'react-router-dom';

import FooterContact from './footer-contact';
import FooterGallery from './footer-gallery';
import FooterNav from './footer-nav';
import FooterWidget from './footer-widget';

const widgets = [{
    widgetBody: <FooterContact />,
    title: "Contact"
}, {
    widgetBody: < FooterNav />,
    title: "Services"
}, {
    widgetBody: < FooterGallery />,
    title: "Gallery"
}];

const Footer = () => {

    return (
        <footer className="footer-area bg-img bg-overlay-2 section-padding-100-0">

            <div className="main-footer-area">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">

                                <Link to="/" className="footer-logo"><img src="./assets/images/core-img/logo.png" alt="" /></Link>
                                <p>ORENDA Junior Entreprise is a student association in economic and educational vocation, a non-profit organization founded in 2018 at the ISAMM .</p>

                                <div className="social-info">
                                    <a href="https://www.facebook.com/OrendaJE/"><i className="zmdi zmdi-facebook"></i></a>
                                    <a href="https://www.instagram.com/orenda_je/"><i className="zmdi zmdi-instagram"></i></a>

                                    <a href="https://www.linkedin.com/in/orenda-je-18b29417a/"><i className="zmdi zmdi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        {widgets.map((widget, key) => {
                            return (
                                <FooterWidget key={key} title={widget.title} widgetBody={widget.widgetBody} />
                            )
                        })}
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;