import { useEffect } from "react";
import AOS from "aos";

const skills = [
    { name: "React JS", level: 100 },
    { name: "Laravel Framework", level: 100 },
    { name: "React Native", level: 85 },
    { name: "MySQL Database", level: 95 },
    { name: "Bootstrap Framework", level: 100 },
    { name: "Responsive Design", level: 100 },
    { name: "UI/UX", level: 100 },
    { name: "jQuery", level: 95 },
    { name: "Tailwind CSS", level: 100 },
];

export default function SkillSection() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="skills" className="py-5 bg-light">

            <div className="container section-title" data-aos="fade-up">
                <h2>Skills</h2>
                <p>My expertise and the technologies I use to build modern, scalable, and high-performance web applications.</p>
            </div>

            <div className="container text-center">
                <div className="row">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="col-md-6 mb-4"
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                        >
                            <div className="text-start mb-2">
                                <span className="fw-bold">{skill.name}</span>
                                <span className="float-end">{skill.level}%</span>
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-primary"
                                    role="progressbar"
                                    style={{ width: `${skill.level}%` }}
                                    aria-valuenow={skill.level}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
