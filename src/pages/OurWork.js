import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from "../Animation";

const OurWork = () => {
  return (
    <WorkDiv
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      {/* This container div was used to stagger these items individually, as otherwise it's automatically controlled by the 'pageAnimation - staggerChildren' */}
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <motion.h1 variants={fade}>Our Work</motion.h1>

      <MovieDiv>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="work/the-athlete">
          <Hide>
            {/* within a component, you can get out of the inherited stagger animations by setting the initial and animate properties explicitly. e.g. initial={hidden} etc. */}
            <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </MovieDiv>

      <MovieDiv>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="work/the-racer">
          <img src={theracer} alt="the racer" />
        </Link>
      </MovieDiv>

      <MovieDiv>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="work/good-times">
          <img src={goodtimes} alt="good times" />
        </Link>
      </MovieDiv>
    </WorkDiv>
  );
};

// Because the main div is a styled component, you need to set it up a little different. Now it's both a styled component and available for framer motion.
const WorkDiv = Styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }
`;

const MovieDiv = Styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = Styled.div`
  overflow: hidden;
`;

// Frame Animation

const Frame1 = Styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = Styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = Styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = Styled(Frame1)`
  background: #8effao;
`;

export default OurWork;
