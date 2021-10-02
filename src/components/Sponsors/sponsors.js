import React from 'react';
import SingleSponsor from './single-sponsor';

const sponsors = ["p-1.png", "p-2.png", "p-3.png", "p-4.png"]

const Sponsors = () => {
    return (
        <section className="our-sponsor-client-area section-padding-100">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <div className="section-heading-2 text-center wow fadeInUp" data-wow-delay="300ms">
                            <p>Partners &amp; Sponsors</p>
                            <h4>OFFICIAL SPONSOR</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">

                        <div className="our-sponsor-area d-flex flex-wrap">
                            {
                                sponsors.map((sponsor, key) => {
                                    return (
                                        <SingleSponsor key={key}
                                            img={sponsor} />
                                    );
                                })
                            }
                        </div>
                    </div>




                    <div className="client-icon">
                        <i className="zmdi zmdi-quote"></i>
                    </div>
                </div>


            </div>

        </section >
    );
}

export default Sponsors;