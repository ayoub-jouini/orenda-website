import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

import AboutContent from './about-content';
import AboutThumb from './about-thumb';
import CounterUpArea from './counterUp-area';


const AboutUs = () => {

    const [ref, inView] = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    duration: 1.5
                }
            })
        }
        if (!inView) {
            animation.start({
                y: +500,
                opacity: 0
            })
        }

    }, [inView])

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