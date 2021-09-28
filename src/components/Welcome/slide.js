import React from "react";

const Slide = ({ firstWord, secondWord, image }) => {
    return (
        <div className="single-welcome-slide bg-img bg-overlay jarallax" style={{ backgroundImage: 'url(' + image + ')' }
        }>
            <div className="container h-100">
                <div className="row h-100 align-items-center">

                    <div className="col-12">
                        <div className="welcome-text text-right">
                            <h2 data-animation="fadeInUp" data-delay="300ms">{firstWord}<br />{secondWord}</h2>


                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Slide;