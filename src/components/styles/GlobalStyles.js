import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'inter', sans-serif;
  }

  body {
    background-color: #1b1b1b;
  }

  button {
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover {
      color: white;
      background-color: #23d997;
    }
  }

  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }

  h3 {
    color: white;
  }

  h4 {
    font-weight: bold;
    font-size: 2rem;
  }

  a {
    font-size: 1.1rem;
  }

  span {
    font-weight: bold;
    color: #23d997;
  }

  p {
    padding: 1rem 0;
    font-size: 1.4rem;
    color: #ccc;
    line-height: 150%;
  }

`;

export default GlobalStyle;
