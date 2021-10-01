import React from 'react';

const Member = ({ memberName, post, img, socialMedia }) => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">



                <div className="speaker-single-thumb">
                    <img src={`assets/images/bg-img/${img}`} alt="" />
                </div>



                <div className="social-info">
                    <a href={socialMedia.fb}><i className="zmdi zmdi-facebook"></i></a>
                    <a href={socialMedia.insta}><i className="zmdi zmdi-instagram"></i></a>

                    <a href={socialMedia.linkd}><i className="zmdi zmdi-linkedin"></i></a>
                </div>



                <div className="speaker-info">
                    <h5>{memberName}</h5>
                    <p>{post}</p>
                </div>
            </div>
        </div>
    );
}

export default Member;