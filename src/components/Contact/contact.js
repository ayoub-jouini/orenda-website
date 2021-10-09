import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

const Contact = () => {

    const [ref, inView] = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                x: 0,
                transition: {
                    type: "spring",
                    duration: 1.5
                }
            })
        }
        if (!inView) {
            animation.start({
                x: +500,
                opacity: 0
            })
        }

    }, [inView])

    return (
        <section ref={ref} class="contact-our-area section-padding-100-0" id="contact">
            <div class="container">
                <div class="row">

                    <div class="col-12">
                        <div class="section-heading-2 text-center wow fadeInUp" data-wow-delay="300ms">
                            <p>Have Question?</p>
                            <h4>Contact us</h4>
                        </div>
                    </div>
                </div>

                <motion.div class="row justify-content-between"
                    animate={animation}>
                    <div class="col-12 col-sm-3">
                        <ContactInfo />
                    </div>

                    <div class="col-12 col-sm-8">
                        <ContactForm />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;