import React from "react";
import Styled from "styled-components";
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

const AboutDiv = Styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const DescriptionDiv = Styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const TitleDiv = Styled.div``;

const HideDiv = Styled.div`
  overflow: hidden;
`;

const ImageDiv = Styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export default AboutSection;
