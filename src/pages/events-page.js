import React from "react";
import Breadcrumb from "../components/Breadcrumb/breadcrumb"
import Events from "../components/Events component/events";

const EventsPage = () => {
    return (
        <>
            <Breadcrumb img="2.png" title="Our Events" />
            <Events />
        </>
    );

}

export default EventsPage;