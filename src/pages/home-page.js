import React from "react";
import AboutUs from "../components/About/about";
import Blogs from "../components/Blogs/blogs";
import Contact from "../components/Contact/contact";
import Schedule from "../components/Schedule/schedule";
import Sponsors from "../components/Sponsors/sponsors";
import Team from "../components/Team/team";
import Welcome from "../components/Welcome/welcome";

const HomePgae = () => {
    return (
        <>
            <Welcome />
            <AboutUs />
            <Team />
            <Schedule />
            <Blogs />
            <Sponsors />
            <Contact />
        </>
    );

}

export default HomePgae;