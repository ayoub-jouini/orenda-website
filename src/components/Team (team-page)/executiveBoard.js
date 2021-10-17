import React from 'react';
import Member from '../Team/member';

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
    },
    {
        memberName: "Lilia Abdeljlil",
        post: "Commercial Developpement Manager",
        img: "5.jpg",
        socialMedia: {
            fb: "https://www.facebook.com/lilya.abdeljlil",
            insta: "https://www.instagram.com/liliaabdeljelil/",
            linkd: ""
        }
    },
    {
        memberName: "Rahma Mejri",
        post: "Marketing and Communication Manager",
        img: "10_1.jpg",
        socialMedia: {
            fb: "https://www.facebook.com/RaHmGm",
            insta: "",
            linkd: "https://www.linkedin.com/in/rahma-mejri-616423155/"
        }
    },
    {
        memberName: "Hamza Khanchouch",
        post: "Logistics Manager Assistant",
        img: "8_1.jpg",
        socialMedia: {
            fb: "https://www.facebook.com/khanchouch.97",
            insta: "https://www.instagram.com/hamza.kh5/",
            linkd: "https://www.linkedin.com/in/hamza-kh-800013177"
        }
    },
    {
        memberName: "Siwar Gharbi",
        post: "Marketing and communication Manager Assistant",
        img: "9.jpg",
        socialMedia: {
            fb: "https://www.facebook.com/Siwar056",
            insta: "https://www.instagram.com/siwar_ghr",
            linkd: ""
        }
    },
    {
        memberName: "Sayed Hamdi ",
        post: "Project Manager Assistant",
        img: "a9wa equipe/8.jpg",
        socialMedia: {
            fb: "https://www.facebook.com/tkdsayed",
            insta: "https://www.instagram.com/sayed__hamdi/",
            linkd: "https://www.linkedin.com/in/sayed-hamdi/"
        }
    }
];

const ExecutiveBoard = () => {
    return (
        <section className="our-speaker-area section-padding-100">
            <div className="container">
                <div className="row">
                    {
                        members.map((member, key) => {
                            return (
                                <Member key={key}
                                    memberName={member.memberName}
                                    post={member.post}
                                    img={member.img}
                                    socialMedia={member.socialMedia} />
                            );
                        })
                    }

                </div>
            </div>
        </section>

    );
}

export default ExecutiveBoard;