import React from "react";
import Slide from "./slide";

const Welcome = () => {

    const Slides = [
        {
            firstWord: "Video games ",
            secondWord: "Developpement",
            image: "./assets/images/bg-img/1.jpg"
        },
        {
            firstWord: "Graphic ",
            secondWord: "Design",
            image: "./assets/images/bg-img/45.jpg"
        },
        {
            firstWord: "Web",
            secondWord: "Developpement",
            image: "./assets/images/bg-img/46.jpg"
        },
        {
            firstWord: "Video ",
            secondWord: "Editing",
            image: "./assets/images/bg-img/47.jpg"
        }
    ];

    return (
        <section className="welcome-area">
            <div className="welcome-slides owl-carousel">
                {Slides.map((slide, key) => {
                    return (
                        <Slide key={key} firstWord={slide.firstWord} secondWord={slide.secondWord} image={slide.image} />
                    );
                })}

            </div>


            <div className="icon-scroll" id="scrollDown"></div>
        </section>
    );
}

export default Welcome;