import React from "react";
import { Link } from "react-router-dom";

const SingleSponsor = ({ img }) => {
    return (
        <div className="single-sponsor wow fadeInUp" data-wow-delay="300ms">
            <Link to="/"><img src={`assets/images/core-img/${img}`} alt="" /></Link>
        </div>
    );

}
export default SingleSponsor;