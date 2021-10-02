import React from 'react';
import { Link } from 'react-router-dom';

const ScheduleTab = ({ img, tabName, about, date, place }) => {
    return (
        <div className="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">

            <div className="single-schedule-tumb-info d-flex align-items-center">

                <div className="single-schedule-tumb">
                    <img src={`assets/images/bg-img/${img}`} alt="" />
                </div>

                <div className="single-schedule-info">
                    <h6>{tabName}</h6>
                    <p>{about}</p>
                </div>
            </div>

            <div className="schedule-time-place">
                <p><i className="zmdi zmdi-time"></i>{date}</p>
                <p><i className="zmdi zmdi-map"></i>{place}</p>
            </div>

            <Link to="/events" className="btn confer-btn">View More <i className="zmdi zmdi-long-arrow-right"></i></Link>
        </div>
    );
}

export default ScheduleTab;