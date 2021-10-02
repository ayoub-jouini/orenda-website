import React from "react";
import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

const Contact = () => {
    return (
        <section class="contact-our-area section-padding-100-0" id="contact">
            <div class="container">
                <div class="row">

                    <div class="col-12">
                        <div class="section-heading-2 text-center wow fadeInUp" data-wow-delay="300ms">
                            <p>Have Question?</p>
                            <h4>Contact us</h4>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-between">
                    <div class="col-12 col-sm-3">
                        <ContactInfo />
                    </div>

                    <div class="col-12 col-sm-8">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;