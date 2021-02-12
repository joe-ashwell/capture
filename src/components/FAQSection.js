import React from "react";
import Styled from "styled-components";

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
      </QuestionDiv>
    </FAQDiv>
  );
};

const FAQDiv = Styled.div``;
const QuestionDiv = Styled.div``;
const AnswerDiv = Styled.div``;

export default FAQSection;
