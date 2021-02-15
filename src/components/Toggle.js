import React, { useState } from "react";
import { motion } from "framer-motion";
import Styled from "styled-components";

// JSX can understand a components' children elements based on what the element is wrapped around. In this case it's in the FAQ section. But by breaking up the functionality into a reusable component, it can be used throughout the app.
const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    // Needed to make the div -> motion.div so that AnimateSharedLayout would work.
    // 'layout' needed to tell framer motion where to look
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <FAQLine layout></FAQLine>
    </motion.div>
  );
};

const FAQLine = Styled(motion.div)`
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
`;

export default Toggle;
