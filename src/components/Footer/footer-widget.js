import React from "react";


const FooterWidget = ({ title, widgetBody }) => {

    return (

        <div className="col-12 col-sm-6 col-lg-3">
            <div className="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">

                <h5 className="widget-title">{title}</h5>

                {widgetBody}
            </div>
        </div>


    );
}

export default FooterWidget;