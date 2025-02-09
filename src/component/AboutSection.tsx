import { JSX } from "react";

function AboutSection(): JSX.Element {
    return (
        <>
            <section id="about" className="about section">

                <div className="container section-title" data-aos="fade-up">
                    <h2>About</h2>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <img src="assets/img/profile.jpg" className="img-fluid" alt="Adish Dahal" />
                        </div>
                        <div className="col-lg-8 content">
                            <h2>Full Stack Developer</h2>
                            <p className="fst-italic py-3">
                                I specialize in backend development with expertise in Laravel, PHP, MySQL, and Ajax. I focus on creating robust and scalable web applications that ensure seamless interactions between the frontend and backend.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>31 December</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Github:</strong> <span>https://github.com/adishdahal777</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+977 9844622904</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Biratnagar, Nepal</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>Not specified</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BSCSIT</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>me.adishdahal@gmail.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="py-3">
                                Currently working as a Full Stack Developer at Techware Pvt Ltd. I specialize in Laravel for backend development and React for frontend applications. I have experience working with modern frameworks and technologies to create responsive and scalable applications.
                            </p>
                        </div>
                    </div>

                </div>


            </section>

        </>
    );
}

export default AboutSection;