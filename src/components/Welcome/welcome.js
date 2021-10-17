import React, { useState } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl
} from 'reactstrap';


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
const Welcome = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === Slides.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? Slides.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const slides = Slides.map((item, key) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={key}
            >
                <div className="single-welcome-slide bg-img bg-overla jarallax parallax" style={{ backgroundImage: 'url(' + item.image + ')' }
                }>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">

                            <div className="col-12">
                                <div className="welcome-text text-right">
                                    <h2 data-animation="fadeInUp" data-delay="300ms">{item.firstWord}<br />{item.secondWord}</h2>


                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </CarouselItem>
        );
    });

    return (
        <section className="welcome-area">
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className="welcome-slides"
            >

                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
            <div className="icon-scroll" id="scrollDown"></div>
        </section>
    );
}

export default Welcome;