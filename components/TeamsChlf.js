import React from "react";
import styled from "styled-components";
import { teams } from "../data/teamsChlf";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 320px) {
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    margin-left: -30px;
  }
  @media (min-width: 1200px) {
    margin-left: 50px;
  }
  @media (min-width: 1355px) {
    margin-left: 120px;
  }
`;

const InnerWrapper = styled.div`
  margin-bottom: 40px;
  /* width: 60%; */
  display: grid;

  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-gap: 2px; */
  @media (min-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContentWrapper = styled.div`
  margin: 30px;
  @media (min-width: 1024px) {
    top: 50%;
    left: 50%;
    transform: translate(30%, 10%);
  }
  @media (min-width: 1024px) {
    top: 50%;
    left: 50%;
    transform: translate(-10%, 10%);
  }
  @media (min-width: 1420px) {
    top: 50%;
    left: 50%;
    transform: translate(5%, 10%);
  }
`;

const ImageWrapper = styled.img`
  @media (min-width: 320px) {
    width: 300px;
  }
  @media (min-width: 460px) {
    width: 380px;
  }
  @media (min-width: 640px) {
    width: 480px;
  }
  @media (min-width: 760px) {
    width: 310px;
  }
  @media (min-width: 1024px) {
    width: 400px;
  }
  @media (min-width: 1200px) {
    width: 480px;
  }
  @media (min-width: 1355px) {
    width: 540px;
  }
  @media (min-width: 1420px) {
    width: 600px;
  }
`;

const TeamsChlf = (img, players, item) => (
  <>
    <StyledWrapper>
      <InnerWrapper>
        {teams.map((item) => (
          <>
            <ContentWrapper>
              <ImageWrapper src={item.img} />
              <div>
                <h4>{item.name}</h4>
                <ul>
                  {item["players"].map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </ContentWrapper>
          </>
        ))}
      </InnerWrapper>
    </StyledWrapper>
  </>
);

export default TeamsChlf;
