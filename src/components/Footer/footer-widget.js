import React from "react";

import FooterContact from './footer-contact';
import FooterGallery from './footer-gallery';
import FooterNav from './footer-nav';

const FooterWidget = () => {

    const widgets = [{
        widgetBody: <FooterContact />,
        title: "Contact"
    }, {
        widgetBody: < FooterNav />,
        title: "Services"
    }, {
        widgetBody: < FooterGallery />,
        title: "Gallery"
    }];

    return (

        widgets.map((widget, key) => {
            return (
                <div className="col-12 col-sm-6 col-lg-3" key={key}>
                    <div className="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">

                        <h5 className="widget-title">{widget.title}</h5>

                        {widget.widgetBody}
                    </div>
                </div>
            )

        })

    );
}

export default FooterWidget;