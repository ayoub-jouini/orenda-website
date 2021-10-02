import React from "react";
import AboutUs from "../components/About/about";
import Blogs from "../components/Blogs/blogs";
import Schedule from "../components/Schedule/schedule";
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
        </>
    );

}

export default HomePgae;