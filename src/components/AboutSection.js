import React from "react";
import {
  AboutDiv,
  DescriptionDiv,
  HideDiv,
  ImageDiv,
} from "../components/styles/AboutPageStyles";
import home1 from "../img/home1.png";
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../Animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <AboutDiv>
      <DescriptionDiv>
        <motion.div>
          <HideDiv>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </HideDiv>
          <HideDiv>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </HideDiv>
          <HideDiv>
            <motion.h2 variants={titleAnimation}>come true.</motion.h2>
          </HideDiv>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have.
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </DescriptionDiv>
      <ImageDiv>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="man with camera"
        />
      </ImageDiv>
      <Wave />
    </AboutDiv>
  );
};

export default AboutSection;
