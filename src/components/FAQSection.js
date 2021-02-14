import React from "react";
import Styled from "styled-components";
import { AboutDiv } from "./styles/AboutPageStyles";

const FAQSection = () => {
  return (
    <FAQDiv>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      <QuestionDiv>
        <h4>How do I start?</h4>
        <AnswerDiv>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            voluptatibus.
          </p>
        </AnswerDiv>
        <FAQLine></FAQLine>
      </QuestionDiv>

      <QuestionDiv>
        <h4>Daily schedule?</h4>
        <AnswerDiv>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            voluptatibus.
          </p>
        </AnswerDiv>
        <FAQLine></FAQLine>
      </QuestionDiv>

      <QuestionDiv>
        <h4>Different payment options?</h4>
        <AnswerDiv>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            voluptatibus.
          </p>
        </AnswerDiv>
        <FAQLine></FAQLine>
      </QuestionDiv>

      <QuestionDiv>
        <h4>What products do you offer?</h4>
        <AnswerDiv>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            voluptatibus.
          </p>
        </AnswerDiv>
        <FAQLine></FAQLine>
      </QuestionDiv>
    </FAQDiv>
  );
};

const FAQDiv = Styled(AboutDiv)`
  display: block;

  > span {
    display: block;
  }

  > h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
`;

const FAQLine = Styled.div`
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
`;

const QuestionDiv = Styled.div`
  padding: 3rem 0rem;
  cursor: pointer;
`;

const AnswerDiv = Styled.div`
  padding: 2rem 0rem;

  > p {
    padding: 1rem 0rem;
  }
`;

export default FAQSection;
