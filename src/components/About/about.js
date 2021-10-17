import React from 'react';
import { motion } from 'framer-motion';

import AboutContent from './about-content';
import AboutThumb from './about-thumb';
import CounterUpArea from './counterUp-area';
import useAnimationHook from '../../utils/animation-hook';


const AboutUs = () => {

    const { animation, ref } = useAnimationHook();

    return (
        <section ref={ref} className="about-us-countdown-area section-padding-100-0" id="about">
            <div className="container">
                <motion.div className="row align-items-center"
                    animate={animation}>
                    <AboutContent />

                    <AboutThumb />
                </motion.div>
            </div>

            <CounterUpArea />




        </section >
    );
}

export default AboutUs;