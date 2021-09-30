import React from 'react';

import AboutContent from './about-content';
import AboutThumb from './about-thumb';
import CounterUpArea from './counterUp-area';


const AboutUs = () => {
    return (
        <section className="about-us-countdown-area section-padding-100-0" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <AboutContent />

                    <AboutThumb />
                </div>
            </div>

            <CounterUpArea />




        </section >
    );
}

export default AboutUs;