import React from "react";
import Styled from "styled-components";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import {
  AboutDiv,
  DescriptionDiv,
  HideDiv,
  ImageDiv,
} from "../components/styles/AboutPageStyles";

const ServicesSection = () => {
  return (
    <ServicesDiv>
      <DescriptionDiv>
        <h2>
          High <span>quality</span> services
        </h2>
        <CardsDiv>
          <CardDiv>
            <IconDiv>
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </IconDiv>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardDiv>
          <CardDiv>
            <IconDiv>
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </IconDiv>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardDiv>
          <CardDiv>
            <IconDiv>
              <img src={diaphragm} alt="" />
              <h3>Diaphragm</h3>
            </IconDiv>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardDiv>
          <CardDiv>
            <IconDiv>
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </IconDiv>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardDiv>
        </CardsDiv>
      </DescriptionDiv>
      <ImageDiv>
        <img src={home2} alt="" />
      </ImageDiv>
    </ServicesDiv>
  );
};

// Extending the AboutDiv stylings
const ServicesDiv = Styled(AboutDiv)`

  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const CardsDiv = Styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const CardDiv = Styled.div`
  /* flex-basis: 20rem; */
`;

const IconDiv = Styled.div`
  display: flex;
  align-items: center;

  > h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;

export default ServicesSection;
