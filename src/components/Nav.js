import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
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
        </li>
        <li>
          <Link to="/work">2. Our work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact us</Link>
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

export default Nav;
