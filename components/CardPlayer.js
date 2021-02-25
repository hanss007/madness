import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  margin: 60px;
  width: 240px;
  height: 380px;
  display: flex;
  flex-direction: column;
`;

const ImagePlayer = styled.img`
  background-size: cover;
  height: 265px;
`;

const InfoStyled = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  width: auto;
  height: auto;
`;

const NumPlayer = styled.div`
  width: 65px;
  height: 65px;
  text-align: center;
  padding: 10px;
  line-height: 45px;
  background-color: #ef273d;
  color: white;
  font-size: 30px;
  font-weight: 900;
`;

const NamePlayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 175px;
  height: 65px;
  background-color: #1d2646;
`;

const NameContent = styled.strong`
  margin-top: -20px;
  text-align: center;
  line-height: 45px;
  text-transform: uppercase;
  word-wrap: break-word;
  font-size: 16px;
  color: white;
`;

const CardPlayer = ({ firstname, surname, number, img }) => (
  <CardWrapper>
    <ImagePlayer src={img} />
    <InfoStyled>
      <NumPlayer>
        <span>{number}</span>
      </NumPlayer>
      <NamePlayer>
        <NameContent>{firstname}</NameContent>
        <NameContent>{surname}</NameContent>
      </NamePlayer>
    </InfoStyled>
  </CardWrapper>
);

export default CardPlayer;
