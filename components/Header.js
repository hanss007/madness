import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 600px;
  background-image: url("/images/header.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-color: #e6e6e6;
  color: black;
  margin: 0;
  z-index: -1;
  @media (min-width: 460px) {
    width: 100vw;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleStyled = styled.h1`
  color: white;
  text-align: center;
  font-size: 40px;
  letter-spacing: 0.2em;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a,
    0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222,
    0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a,
    0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212,
    0 22px 30px rgba(0, 0, 0, 0.9);

  @media (min-width: 320px) {
    font-size: 22px;
    margin-top: 57px;
    margin-left: 20px;
  }
  @media (min-width: 460px) {
    font-size: 22px;
    margin-top: 57px;
    margin-left: -110px;
  }
  @media (min-width: 640px) {
    font-size: 32px;
    margin-left: 57px;
  }
  @media (min-width: 1024px) {
    font-size: 40px;
    margin-top: 50px;
  }
`;
const NameTitle = styled.h2`
  margin-left: 420px;
  text-align: center;

  text-transform: uppercase;
  color: white;
  letter-spacing: 0.2em;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a,
    0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222,
    0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a,
    0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212,
    0 22px 30px rgba(0, 0, 0, 0.9);

  @media (min-width: 320px) {
    font-size: 20px;
    margin-left: 10px;
  }
  @media (min-width: 460px) {
    font-size: 20px;
    margin-left: 170px;
  }
  @media (min-width: 640px) {
    font-size: 28px;
    margin-left: 70px;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
    margin-left: 420px;
  }
`;

const Header = () => (
  <StyledWrapper>
    <InnerWrapper>
      <TitleStyled>Stowarzyszenie</TitleStyled>
      <NameTitle>Madness</NameTitle>
    </InnerWrapper>
  </StyledWrapper>
);

export default Header;
