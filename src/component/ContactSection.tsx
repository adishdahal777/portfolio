import { JSX } from "react";

function ContactSection(): JSX.Element {
    return (
        <>
            <section id="contact" className="contact section">

                <div className="container section-title">
                    <h2>Contact</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className="container">

                    <div className="row gy-4">

                        <div className="col-lg-5">

                            <div className="info-wrap">
                                <div className="info-item d-flex">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h3>Address</h3>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex">
                                    <i className="bi bi-telephone flex-shrink-0"></i>
                                    <div>
                                        <h3>Call Us</h3>
                                        <p>+1 5589 55488 55</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h3>Email Us</h3>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <form action="forms/contact.php" method="post" className="php-email-form">
                                <div className="row gy-4">

                                    <div className="col-md-6">
                                        <label htmlFor="name-field" className="pb-2">Your Name</label>
                                        <input type="text" name="name" id="name-field" className="form-control" />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="email-field" className="pb-2">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email-field" />
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="subject-field" className="pb-2">Subject</label>
                                        <input type="text" className="form-control" name="subject" id="subject-field" />
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="message-field" className="pb-2">Message</label>
                                        <textarea className="form-control" name="message" id="message-field"></textarea>
                                    </div>

                                    <div className="col-md-12 text-center">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>

                                        <button type="submit">Send Message</button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

export default ContactSection;