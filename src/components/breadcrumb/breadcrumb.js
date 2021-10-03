import React from 'react';
import "../../style/scss/_breadcrumb.scss";


const Breadcrumb = ({ title }) => {
    return (
        <section className="breadcrumb-area bg-img bg-gradient-overlay" style={{ backgroundImage: "url(assets/images/bg-img/27.jpg)" }}>
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="breadcrumb-content">
                            <h2 className="page-title">{title}</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">

                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Breadcrumb;