import { JSX } from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// AOS (Animate on Scroll)
import "aos/dist/aos.css";

// GLightbox
import "glightbox/dist/css/glightbox.min.css";

// Swiper.js
import "swiper/swiper-bundle.css";

import "../public/assets/css/main.css";
import AppLayout from "./layout/AppLayout";
import SectionOne from "./component/SectionOne";
import AboutSection from "./component/AboutSection";
import StatSection from "./component/StatSection";
import SkillSection from "./component/SkillSection";
import ResumeSection from "./component/ResumeSection";
import ServiceSection from "./component/ServiceSection";
import ContactSection from "./component/ContactSection";
function App(): JSX.Element {
  return (
    <>
      <AppLayout>
        <SectionOne />

        <AboutSection />

        <StatSection />

        <SkillSection />

        <ResumeSection />

        <ServiceSection />

        <ContactSection />
      </AppLayout>
    </>
  )
}

export default App
