import React from "react";
import SingleEvent from "./single-event";

const blogs = [
    {
        title: "Megatron 6.0",
        body: `Megatron 6.0 was an event that took place on April 18, 2018 at ISAMM.
        It was composed of two parts: the first was workshops: Machine learning, chatbot and NLP.
        The second part was a conference consisting of three speakers.
        There are also prizes for workshop participants as well as for the conference`,
        date: "April 18, 2019",
        img1: "46_1.jpg",
        img3: "51.jpg",
        img2: "52.jpg"
    },
    {
        title: "Launch The Impact",
        body: `Launch The Impact is the first event organized by Orenda Junior Enterprise within the ISAMM.
         This event took place on November 24, 2018, the general theme of which is entrepreneurship and community life.
         It is about a conference composed of 3 speakers who spoke about the impact of the associative life in their courses.`,
        date: "November 24, 2018",
        img1: "46_2.jpg",
        img3: "51_1.jpg",
        img2: "52_1.jpg"
    }
]

const Events = () => {
    return (
        blogs.map((blog, key) => {
            return (
                <SingleEvent key={key}
                    title={blog.title}
                    body={blog.body}
                    date={blog.date}
                    img1={blog.img1}
                    img2={blog.img2}
                    img3={blog.img3} />
            );
        })
    );
}

export default Events;