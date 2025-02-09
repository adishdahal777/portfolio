import { JSX, useState } from "react";
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast'; // Import react-hot-toast

function ContactSection(): JSX.Element {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [sentMessage, setSentMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Sending the form data using EmailJS
            const result = await emailjs.send(
                'service_1je0wtj', // Your Service ID
                'template_wup58hj', // Your Template ID
                formData, // The data you want to send
                'HJEFSmokDczfMW1Uy' // Your User ID
            );
            setSentMessage('Your message has been sent. Thank you!');
            toast.success('Your message has been sent!'); // Success toast
            console.log(result.text); // For logging the result
        } catch (error: any) {
            setErrorMessage('Error sending message. Please try again.');
            toast.error('Error sending message. Please try again.'); // Error toast
            console.log(error.text); // For logging the error
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section id="contact" className="contact section">
                <div className="container section-title">
                    <h2>Contact</h2>
                    <p>Feel free to reach out for any queries or support!</p>
                </div>

                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5">
                            <div className="info-wrap">
                                <div className="info-item d-flex">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h3>Address</h3>
                                        <p>Bhupimarga, Morang, Biratnagar, Nepal</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex">
                                    <i className="bi bi-telephone flex-shrink-0"></i>
                                    <div>
                                        <h3>Call Us</h3>
                                        <p>+977 9844622904</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h3>Email Us</h3>
                                        <p>me.adishdahal@gmail.com</p>
                                    </div>
                                </div>
                                <div className="map-wrap">
                                    <iframe
                                        title="Biratnagar Map"
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d914.9282793709791!2d87.28034602848486!3d26.47637774899842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1739126683205!5m2!1sen!2snp"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <form onSubmit={handleSubmit} method="POST" className="php-email-form">
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <label htmlFor="name-field" className="pb-2">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name-field"
                                            className="form-control"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="email-field" className="pb-2">Your Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email-field"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="subject-field" className="pb-2">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            id="subject-field"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="message-field" className="pb-2">Message</label>
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            id="message-field"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="col-md-12 text-center">
                                        {loading && <div className="loading">Loading</div>}
                                        {sentMessage && <div className="sent-message">{sentMessage}</div>}
                                        {errorMessage && <div className="error-message">{errorMessage}</div>}
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
