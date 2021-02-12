import React from "react";
import Styled from "styled-components";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

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

const ServicesDiv = Styled.div``;
const DescriptionDiv = Styled.div``;
const CardsDiv = Styled.div``;
const CardDiv = Styled.div``;
const IconDiv = Styled.div``;
const ImageDiv = Styled.div``;

export default ServicesSection;
