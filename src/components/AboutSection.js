import React from "react";
import Styled from "styled-components";
import {
  AboutDiv,
  DescriptionDiv,
  HideDiv,
  ImageDiv,
} from "../components/styles/AboutPageStyles";
import home1 from "../img/home1.png";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <AboutDiv>
      <DescriptionDiv>
        <motion.div>
          <HideDiv>
            <motion.h2>We work to make</motion.h2>
          </HideDiv>
          <HideDiv>
            <motion.h2>
              your <span>dreams</span>
            </motion.h2>
          </HideDiv>
          <HideDiv>
            <motion.h2>come true.</motion.h2>
          </HideDiv>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have.
        </p>
        <button>Contact us</button>
      </DescriptionDiv>
      <ImageDiv>
        <img src={home1} alt="man with camera" />
      </ImageDiv>
    </AboutDiv>
  );
};

export default AboutSection;
