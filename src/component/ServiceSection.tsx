import { JSX } from "react";

function ServiceSection(): JSX.Element {
    const services = [
        { title: "Website Development", description: "Building modern, responsive, and scalable websites using React, Laravel, and Bootstrap." },
        { title: "Web Application Development", description: "Developing powerful web applications with a robust backend built on Laravel and a dynamic frontend using React." },
        { title: "Mobile Application Development", description: "Creating cross-platform mobile applications using React Native for seamless experiences on both iOS and Android." },
        { title: "Custom Software Development", description: "Designing and developing custom software solutions tailored to your business needs, optimizing performance with Laravel and MySQL." },
        { title: "Database Design & Optimization", description: "Building efficient and scalable databases with MySQL and optimizing queries for faster performance." },
        { title: "UI/UX Design", description: "Designing user-friendly interfaces and enhancing user experience with an emphasis on usability and aesthetic appeal." },
        { title: "Responsive Web Design", description: "Ensuring websites are mobile-friendly, responsive, and accessible across all devices using Tailwind CSS and Bootstrap." },
        { title: "Frontend Development", description: "Developing highly interactive and responsive web pages using React.js and other modern frontend technologies." },
        { title: "Backend Development", description: "Creating secure and scalable backend systems using Laravel for handling complex logic and database operations." },
        { title: "jQuery & Animation", description: "Enhancing interactivity with jQuery, creating smooth animations and dynamic features for a richer user experience." }
    ];

    return (
        <section id="services" className="services section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Services</h2>
                <p>Offering a range of services to build robust and modern digital solutions, from website development to custom software tailored to your needs.</p>
            </div>

            <div className="container">
                <div className="row gy-4">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={`${100 * (index + 1)}`}>
                            <div className="icon flex-shrink-0"><i className="bi bi-box"></i></div>
                            <div>
                                <h4 className="title"><a href="service-details.html" className="stretched-link">{service.title}</a></h4>
                                <p className="description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;
