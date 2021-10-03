import React from "react";
import ContactForm from "../Contact/contact-form";

const Contact = () => {
    return (
        <section class="contact--us-area section-padding-100-0">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="contact-us-thumb mb-100">
                            <img src="assets/images/bg-img/2.png" alt="" />
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="contact_from_area mb-100 clearfix">

                            <div class="contact-heading">
                                <h4>Contact us</h4>
                                <p></p>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}


export default Contact;