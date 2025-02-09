import { JSX, useEffect } from "react";
import AOS from "aos";
import Typed from "typed.js";

import Background from "/assets/img/herobg.jpeg";

function SectionOne(): JSX.Element {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    const typed = new Typed(".typed", {
      strings: ["Developer", "Designer", "Freelancer", "Manager"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="hero section dark-background relative text-start">
      <img src={Background} alt="Hero Background" data-aos="fade-in" className="w-full h-auto" />

      <div className="container mx-auto py-10" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-white text-4xl font-bold">Adish Dahal</h2>
        <p className="text-gray-300 text-lg mt-2">
          I'm{" "}
          <span className="typed text-yellow-400"></span>
        </p>
      </div>
    </section>
  );
}

export default SectionOne;
