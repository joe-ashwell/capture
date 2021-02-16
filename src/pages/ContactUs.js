import React from "react";

import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../Animation";
import Styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactDiv
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
        </Hide>
      </Title>

      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h4>Message</h4>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h4>Email</h4>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h4>Social</h4>
          </Social>
        </Hide>
      </div>
    </ContactDiv>
  );
};

const ContactDiv = Styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const Title = Styled.div`
  margin-bottom: 4rem;
  color: black
`;

const Hide = Styled.div`
  overflow: hidden;
`;

const Circle = Styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const Social = Styled(motion.div)`
  display: flex;
  align-items: center;

  h4 {
    margin: 2rem;
  }
`;

export default ContactUs;
