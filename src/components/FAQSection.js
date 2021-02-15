import React from "react";
import Styled from "styled-components";
import { AboutDiv } from "./styles/AboutPageStyles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FAQSection = () => {
  return (
    <FAQDiv>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      {/* Animate shared layout is used to add animation to areas that are affected by change somewhere else, i.e. change the toggle, makes the p dissapear. It's a smooth affect. */}
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <QuestionDiv>
            <AnswerDiv>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                voluptatibus.
              </p>
            </AnswerDiv>
          </QuestionDiv>
        </Toggle>

        <Toggle title="Daily schedule?">
          <QuestionDiv>
            <AnswerDiv>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                voluptatibus.
              </p>
            </AnswerDiv>
          </QuestionDiv>
        </Toggle>

        <Toggle title="Different payment options?">
          <QuestionDiv>
            <AnswerDiv>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                voluptatibus.
              </p>
            </AnswerDiv>
          </QuestionDiv>
        </Toggle>

        <Toggle title="What products do you offer?">
          <QuestionDiv>
            <AnswerDiv>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                voluptatibus.
              </p>
            </AnswerDiv>
          </QuestionDiv>
        </Toggle>
      </AnimateSharedLayout>
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
