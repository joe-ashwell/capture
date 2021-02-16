import React from "react";
import Styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNavDiv>
      <h1>
        <Link to="/" id="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">2. Our work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNavDiv>
  );
};

const StyledNavDiv = Styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  width: 100%;

  #logo {
    font-size: 1.8rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }

  li {
    padding-left: 5rem;
    position: relative;
  }
`;

const Line = Styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%

`;

export default Nav;
