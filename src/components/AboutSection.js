import React from "react";
import Styled from "styled-components";
import {
  AboutDiv,
  DescriptionDiv,
  HideDiv,
  ImageDiv,
} from "../components/styles/AboutPageStyles";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <AboutDiv>
      <DescriptionDiv>
        <TitleDiv>
          <HideDiv>
            <h2>We work to make</h2>
          </HideDiv>
          <HideDiv>
            <h2>
              your <span>dreams</span>
            </h2>
          </HideDiv>
          <HideDiv>
            <h2>come true.</h2>
          </HideDiv>
        </TitleDiv>
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

const TitleDiv = Styled.div``;

export default AboutSection;
