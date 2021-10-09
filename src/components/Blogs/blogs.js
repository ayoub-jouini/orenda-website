import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

import SingleBlog from "./single-blog";

const blogs = [
    {
        img: "18_3.jpg",
        link: "https://www.facebook.com/notes/orenda-junior-enterprise/whats-graphic-design-do-you-have-an-answer-/1070861333108206/",
        title: "What’s Graphic Design ? Do you have an answer !",
        date: "April 23, 2019",
        author: " By Landalousi",
        body: "IF YOU ARE INTO MARKETING AND COMMUNICATION, AND LOOKING FOR A POWERFUL TOOL TO EXPAND YOUR SKILL SET,THEN MAYBE GRAPHIC DESIGN IS GOOD FOR YOU "
    },
    {
        img: "18_1.jpg",
        link: "https://www.facebook.com/notes/orenda-junior-enterprise/what-can-you-extract-from-knowing-that-burnout-may-happen-to-you/1045929948934678/",
        title: "WHAT CAN YOU EXTRACT FROM KNOWING THAT BURNOUT MAY HAPPEN TO YOU?",
        date: "12 Mars,2019",
        author: "By Landalous",
        body: "BURNOUT is a tough enemy to deal with as an INDIVIDUAL or as TEAM LEADER.."
    },
    {
        img: "18_2.jpg",
        link: "https://www.facebook.com/notes/orenda-junior-enterprise/what-we-have-learned-as-part-of-the-movement-junior-enterprise-and-orenda-junior/1041948852666121/",
        title: "WHAT WE HAVE LEARNED AS PART OF THE MOVEMENT JUNIOR ENTERPRISE AND ORENDA JUNIOR ENTERPRISE EXECUTIVES?",
        date: "Mars 5, 2019",
        author: "By Landalous",
        body: "It’s been several months since Orenda’s first launch as.."
    },
    {
        img: "18.jpg",
        link: "https://www.facebook.com/notes/orenda-junior-enterprise/am-i-a-good-game-developer-well-you-wont-know-until-you-are-in-a-real-competitio/1033427833518223/",
        title: "Am I a good game developer? Well, you won’t know until you are in a real competition.",
        date: " February 19, 2019",
        author: " By Landalous",
        body: "Think about that for seconds. Am I able to win competitions.."
    },
    {
        img: "19.jpg",
        link: "https://www.facebook.com/notes/orenda-junior-enterprise/if-you-have-ever-dreamed-of-creating-your-own-video-game-this-article-is-for-you/1029268640600809/",
        title: "If you have ever dreamed of creating your own video game, this article is for you!",
        date: "February 12, 2019",
        author: "By Landalous",
        body: "Street Food Convention will showcase products like Packed food, beef and lamb, street food."
    },
    {
        img: "20.jpg",
        link: "https://www.facebook.com/notes/orenda-junior-enterprise/video-games-are-bad-for-you-thats-what-they-said-about-rock-and-roll-utter-the-f/1024712091056464/",
        title: "Video games are bad for you?",
        date: "February 5, 2019",
        author: "By Landalous ",
        body: "Alongside with films, books, poetry, video games is a great source of enlightenment, amusement, and knowledge. "
    }
];

const Blogs = () => {

    const [ref, inView] = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    duration: 1.5
                }
            })
        }
        if (!inView) {
            animation.start({
                y: +500,
                opacity: 0
            })
        }

    }, [inView])

    return (
        <section ref={ref} className="our-blog-area bg-img bg-gradient-overlay section-padding-100-60" style={{ backgroundImage: "url(assets/images/bg-img/17.jpg)" }} id="article">
            <div className="container">
                <motion.div className="row"
                    animate={animation}>
                    <div className="col-12">

                        <div className="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                            <p>Press</p>
                            <h4>Our Articles</h4>
                        </div>
                    </div>

                    {
                        blogs.map((blog, key) => {
                            return (
                                <SingleBlog key={key}
                                    img={blog.img}
                                    link={blog.link}
                                    title={blog.title}
                                    date={blog.date}
                                    author={blog.author}
                                    body={blog.body} />
                            );
                        })
                    }

                    <div className="col-12">
                        <div className="more-speaker-btn text-center mt-20 mb-40 wow fadeInUp" data-wow-delay="300ms">
                            <a className="btn confer-btn-white" href="blog.html">view all Articles <i className="zmdi zmdi-long-arrow-right"></i></a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Blogs;