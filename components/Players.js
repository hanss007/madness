import React from "react";
import CardPlayer from "./CardPlayer";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 10px 0 0 60px;
  text-transform: uppercase;
  color: #023047;
`;

const InnerWrapper = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-gap: 2px; */
`;

const Players = ({ players }) => (
  <StyledWrapper>
    <Title>Bramkarze</Title>
    <InnerWrapper>
      {players
        .filter((item) => item.position === "Bramkarz")
        .map((item) => (
          <CardPlayer
            img={item.img}
            firstname={item.firstname}
            surname={item.surname}
            number={item.number}
          />
        ))}
    </InnerWrapper>
    <Title>Obrońcy</Title>
    <InnerWrapper>
      {players
        .filter((item) => item.position === "Obrońca")
        .map((item) => (
          <CardPlayer
            img={item.img}
            firstname={item.firstname}
            surname={item.surname}
            number={item.number}
          />
        ))}
    </InnerWrapper>
    <Title>Pomocnicy</Title>
    <InnerWrapper>
      {players
        .filter((item) => item.position === "Pomocnik")
        .map((item) => (
          <CardPlayer
            img={item.img}
            firstname={item.firstname}
            surname={item.surname}
            number={item.number}
          />
        ))}
    </InnerWrapper>
    <Title>Napastnicy</Title>
    <InnerWrapper>
      {players
        .filter((item) => item.position === "Napastnik")
        .map((item) => (
          <CardPlayer
            img={item.img}
            firstname={item.firstname}
            surname={item.surname}
            number={item.number}
          />
        ))}
    </InnerWrapper>
  </StyledWrapper>
);

export default Players;
