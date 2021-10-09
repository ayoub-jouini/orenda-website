import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Member from './member';


const members = [
    {
        memberName: "Mejri Seyf",
        post: "President",
        img: "4.jpg",
        socialMedia: {
            fb: "https://www.facebook.com/mejrii.seyf",
            insta: "https://www.instagram.com/mejri.seyf/",
            linkd: "https://www.linkedin.com/in/seyf-mejri-848a8416b/"
        }
    },
    {
        memberName: "Mouheb Ben Cheikh",
        post: "Vice President",
        img: "6_1.jpg",
        socialMedia: {
            fb: "https://www.facebook.com/mouheb.l.mio",
            insta: "https://www.instagram.com/mouhebbencheikh_/",
            linkd: "https://www.linkedin.com/in/ben-chiekh-mouheb-51027615a"
        }
    },
    {
        memberName: "Ines Rafrafi",
        post: "general secretary",
        img: "6.jpg",
        socialMedia: {
            fb: "https://www.facebook.com/ines.rafrafy",
            insta: "https://www.instagram.com/ines_rafrafi",
            linkd: ""
        }
    },
    {
        memberName: "M.Feres Landolsi",
        post: "Project manager",
        img: "a9wa equipe/7.jpg",
        socialMedia: {
            fb: "https://www.facebook.com/mohamedfaresandalous",
            insta: "",
            linkd: "https://www.linkedin.com/in/mohamed-fares-andaloussi/"
        }
    },
    {
        memberName: "Nouha Kabtni",
        post: "Human Resources Manager",
        img: "9_1.jpg",
        socialMedia: {
            fb: "https://www.facebook.com/nouha.kabtni",
            insta: "https://www.instagram.com/nouha_kabtni/",
            linkd: "https://www.linkedin.com/in/nouha-kabtni-1b039b17a/"
        }
    },
    {
        memberName: "Sondes Maazoul",
        post: "Logistics Manager",
        img: "7_1.jpg",
        socialMedia: {
            fb: "https://www.facebook.com/dousa.maazoul",
            insta: "",
            linkd: "https://www.linkedin.com/in/maazoul-sondes-61097815b/"
        }
    }
];

const Team = () => {

    const [ref, inView] = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                x: 0,
                transition: {
                    type: "spring",
                    duration: 1
                }
            })
        }
        if (!inView) {
            animation.start({
                x: -100,
                opacity: 0
            })
        }

    }, [inView])

    return (
        <section ref={ref} className="our-speaker-area bg-img bg-gradient-overlay section-padding-100-60" style={{ backgroundImage: "url(assets/images/bg-img/3.jpg)" }} id="team">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <div className="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                            <p>About our team</p>
                            <h4>OUR TEAM</h4>
                        </div>
                    </div>
                </div>



                <motion.div className="row"
                    animate={animation}>


                    {members.map((member, key) => {
                        return (
                            <Member key={key}
                                memberName={member.memberName}
                                post={member.post}
                                img={member.img}
                                socialMedia={member.socialMedia} />
                        )
                    })}


                    <div className="col-12">
                        <div className="more-speaker-btn text-center mt-20 mb-40 wow fadeInUp" data-wow-delay="300ms">
                            <Link className="btn confer-btn-white" to="/team">view all Team <i className="zmdi zmdi-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Team;