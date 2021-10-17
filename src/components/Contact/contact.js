import React from 'react';
import { motion } from 'framer-motion';

import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";
import useAnimationHook from '../../utils/animation-hook';

const Contact = () => {

    const { animation, ref } = useAnimationHook();

    return (
        <section ref={ref} className="contact-our-area section-padding-100-0" id="contact">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <div className="section-heading-2 text-center wow fadeInUp" data-wow-delay="300ms">
                            <p>Have Question?</p>
                            <h4>Contact us</h4>
                        </div>
                    </div>
                </div>

                <motion.div className="row justify-content-between"
                    animate={animation}>
                    <div className="col-12 col-sm-3">
                        <ContactInfo />
                    </div>

                    <div className="col-12 col-sm-8">
                        <ContactForm />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;