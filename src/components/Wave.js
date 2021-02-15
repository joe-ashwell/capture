import React from "react";
import { motion } from "framer-motion";
import Styled from "styled-components";

const Wave = () => {
  return (
    <WaveSVG
      viewBox="0 0 1440 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* To animate the path, just need to make it motion.path and use some built-in params from Framer Motion */}
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1 }}
        d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
        stroke="#D96ED4"
        strokeOpacity="0.4"
        strokeWidth="10"
      />
    </WaveSVG>
  );
};

const WaveSVG = Styled.svg`
  position: absolute;
  left: 0;
  z-index: -1;
`;

export default Wave;
