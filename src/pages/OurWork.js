import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const OurWork = () => {
  return (
    <WorkDiv
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <h1>Our Work</h1>

      <MovieDiv>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="work/the-athlete">
          <img src={athlete} alt="athlete" />
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

const MovieDiv = Styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;