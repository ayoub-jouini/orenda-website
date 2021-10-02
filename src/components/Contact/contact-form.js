import React, { useState } from "react";

const ContactForm = () => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleLastName = (event) => {
        setLastName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleNumber = (event) => {
        setNumber(event.target.value);
    }
    const handleMessage = (event) => {
        setMessage(event.target.value)
    }

    const submitForm = (event) => {
        event.preventDefault();
    }

    return (
        <div class="contact_from_area mb-100 clearfix wow fadeInUp" data-wow-delay="300ms">
            <div class="contact_form">
                <form id="main_contact_form" onSubmit={submitForm}>
                    <div class="contact_input_area">
                        <div id="success_fail_info"></div>
                        <div class="row">

                            <div class="col-12 col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control mb-30" name="name" id="name" placeholder="Your Name" value={name} onChange={handleName} />
                                </div>
                            </div>

                            <div class="col-12 col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control mb-30" name="name" id="name2" placeholder="Last Name" value={lastName} onChange={handleLastName} />
                                </div>
                            </div>

                            <div class="col-12 col-lg-6">
                                <div class="form-group">
                                    <input type="email" class="form-control mb-30" name="email" id="email" placeholder="E-mail" value={email} onChange={handleEmail} />
                                </div>
                            </div>

                            <div class="col-12 col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control mb-30" name="subject" id="subject" placeholder="Your Number" value={number} onChange={handleNumber} />
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="form-group">
                                    <textarea name="message" class="form-control mb-30" id="message" cols="30" rows="6" placeholder="Your Message *" value={message} onChange={handleMessage} ></textarea>
                                </div>
                            </div>

                            <div class="col-12">
                                <button type="submit" class="btn confer-btn">Send Message <i class="zmdi zmdi-long-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;