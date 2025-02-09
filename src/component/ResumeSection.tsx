import { JSX } from "react";

export default function ResumeSection(): JSX.Element {
  return (
    <>
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>Know more about my work experience and education.</p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Adish Dahal</h4>
                <p>
                  <em>Frontend Developer with experience in UI/UX design and web development. Currently pursuing a Bachelor of Science in Computer Science, with hands-on experience working with modern web technologies, frameworks, and responsive design strategies.</em>
                </p>
                <ul>
                  <li>Biratnagar, Nepal</li>
                  <li>(Your Phone Number)</li>
                  <li>adish.dahal@example.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bachelor of Computer Science - BsCSit</h4>
                <h5>2022 - Present</h5>
                <p><em>Himalaya Darshan College, Biratnagar</em></p>
                <p>Currently pursuing a Bachelor of Science in Computer Science, focusing on software development, programming languages, and advanced computing concepts.</p>
              </div>

              <div className="resume-item">
                <h4>Computer Science</h4>
                <h5>2020 - 2022</h5>
                <p><em>Arniko +2, Biratnagar</em></p>
                <p>Studied foundational concepts and practical applications in technology and computing, building a strong understanding of programming and modern IT practices.</p>
              </div>

              <h3 className="resume-title">Certification</h3>
              <div className="resume-item">
                <h4>Backend Development Training</h4>
                <h5>2021</h5>
                <p><em>Techware Pvt Ltd</em></p>
                <p>
                  Completed a comprehensive 3-month training in Laravel, focusing on backend operations and development. Gained hands-on experience in performing CRUD operations, managing database interactions, and building dynamic web applications. During the training, I solved real-world problems, enhancing my problem-solving and logic-building abilities. Developed a strong understanding of backend development best practices, data management, and optimizing application performance.
                </p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Frontend Developer</h4>
                <h5>October 2021 - August 2023</h5>
                <p><em>Spatial Geeks, Kathmandu</em></p>
                <ul>
                  <li>Worked as a Frontend Developer and UI/UX Designer, focusing on creating user-friendly and responsive web interfaces.</li>
                  <li>Designed and developed seamless user experiences with modern web technologies and frameworks.</li>
                  <li>Contributed to impactful projects, honing technical and creative problem-solving skills.</li>
                  <li>Specialized in creating responsive designs and innovative UI/UX strategies.</li>
                  <li>Gained hands-on experience in frontend development, contributing to professional growth in web development.</li>
                  <li>CEO: <a href="https://www.linkedin.com/in/anup-dahal-85893426b/" target="_blank" rel="noopener noreferrer">Anup Dahal</a></li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Fullstack Developer</h4>
                <h5>January 2022 - Present</h5>
                <p><em>Techware Pvt Ltd, Biratnagar</em></p>
                <ul>
                  <li>Working as a Full-time Developer at Techware Pvt Ltd, Biratnagar, since January 2022.</li>
                  <li>Specialize in developing and maintaining robust web applications using Laravel.</li>
                  <li>Collaborate on building dynamic user interfaces with React, Tailwind CSS, and Bootstrap to deliver modern, responsive designs.</li>
                  <li>Develop and optimize mobile applications using React Native for seamless cross-platform functionality.</li>
                  <li>Utilize jQuery to enhance interactivity and implement dynamic features in web projects.</li>
                  <li>Engage in the full development lifecycle, including designing, coding, debugging, and deploying scalable applications.</li>
                  <li>Contribute to creating efficient and innovative solutions for client requirements while ensuring high-quality code and user-centric results.</li>
                  <li>Actively improve technical expertise and stay updated on emerging technologies to align with industry standards.</li>
                  <li>Visit <a href="https://techware.com.np/" target="_blank" rel="noopener noreferrer">Techware Pvt Ltd</a> for more information.</li>
                  <li>CEO: <a href="https://www.linkedin.com/in/kapil-dahal-90666b99/" target="_blank" rel="noopener noreferrer">Kapil Dahal</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
