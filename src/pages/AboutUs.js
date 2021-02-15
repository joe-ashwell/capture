import React from "react";

import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FAQSection from "../components/FAQSection";

import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const AboutUs = () => {
  return (
    // Wrap the whole page in the motion div as it's a page transition, so you need to transition everything in one go.
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FAQSection />
    </motion.div>
  );
};

export default AboutUs;
