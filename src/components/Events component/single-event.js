import React from "react";
import { Link } from "react-router-dom";

const SingleEvent = ({ img1, img2, img3, title, body, date }) => {
    return (
        <section class="confer-blog-details-area section-padding-100-0">
            <div class="container">
                <div class="row justify-content-center">

                    <div class="col-12 col-lg-8 col-xl-9">
                        <div class="pr-lg-4 mb-100">

                            <div class="post-details-content">


                                <div class="post-blog-thumbnail mb-30">
                                    <img src={`assets/images/bg-img/${img1}`} alt="" />
                                </div>


                                <h4 class="post-title">{title}</h4>


                                <div class="post-meta">
                                    <Link class="post-date" to="/events"><i class="zmdi zmdi-alarm-check"></i>{date}</Link>

                                </div>

                                <p>{body}</p>


                                <div class="row">
                                    <div class="col-6">
                                        <img class="mb-30" src={`assets/images/bg-img/${img2}`} alt="" />
                                    </div>
                                    <div class="col-6">
                                        <img class="mb-30" src={`assets/images/bg-img/${img3}`} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    );
}

export default SingleEvent;