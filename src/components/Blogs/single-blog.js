import React from "react";
import { Link } from "react-router-dom";

const SingleBlog = ({ img, link, title, date, author, body }) => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="single-blog-area wow fadeInUp" data-wow-delay="300ms">

                <div className="single-blog-thumb">
                    <img src={`assets/images/bg-img/${img}`} alt="" />
                </div>
                <div className="single-blog-text text-center">
                    <a className="blog-title" href={link}>{title}</a>

                    <div className="post-meta">
                        <Link className="post-date" to="/"><i className="zmdi zmdi-alarm-check"></i>{date}</Link>
                        <Link className="post-author" to="/"><i className="zmdi zmdi-account"></i>{author}</Link>
                    </div>
                    <p>{body}</p>
                </div>
                <div className="blog-btn">
                    <a href={link}><i className="zmdi zmdi-long-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;