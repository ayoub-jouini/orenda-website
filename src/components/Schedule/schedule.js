import React from 'react';
import { motion } from 'framer-motion';

import ScheduleTab from './schedule-tab';
import useAnimationHook from '../../utils/animation-hook';

const events = [
    {
        tabName: "Megatron 6.0",
        about: "About artificial intelligence",
        img: "10.jpg",
        date: "18 April 2019",
        place: "ISAMM"
    },
    {
        tabName: "Launch The Impact",
        about: "Aboout entrepreneurship",
        img: "11.jpg",
        date: " 24 November 2019",
        place: "ISAMM"
    }
]

const Schedule = () => {

    const { animation, ref } = useAnimationHook();

    return (
        <section ref={ref} className="our-schedule-area section-padding-100" id="event">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <div className="section-heading-2 text-center wow fadeInUp" data-wow-delay="300ms">
                            <p>About our events</p>
                            <h4>Our Events </h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="schedule-tab">


                        </div>


                        <div className="tab-content" id="conferScheduleTabContent">
                            <div className="tab-pane fade show active" id="step-one" role="tabpanel" aria-labelledby="monday-tab">

                                <div className="single-tab-content">
                                    <div className="row">
                                        <motion.div className="col-12"
                                            animate={animation}>

                                            {
                                                events.map((event, key) => {
                                                    return (
                                                        <ScheduleTab key={key}
                                                            tabName={event.tabName}
                                                            about={event.about}
                                                            img={event.img}
                                                            date={event.date}
                                                            place={event.place} />
                                                    )
                                                })
                                            }

                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Schedule;