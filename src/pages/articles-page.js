import React from "react";
import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import Articles from "../components/Blogs ( articles-page)/articles";

const ArticlesPage = () => {
    return (
        <>
            <Breadcrumb img="37.jpg" title="Our Articles" />
            <Articles />
        </>
    );

}

export default ArticlesPage;