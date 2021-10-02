import React from "react";

const SingleSponsor = ({ img }) => {
    return (
        <div className="single-sponsor wow fadeInUp" data-wow-delay="300ms">
            <a href=""><img src={`assets/images/core-img/${img}`} alt="" /></a>
        </div>
    );

}
export default SingleSponsor;