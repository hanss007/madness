import React from "react";
import CardPlayer from "./CardPlayer";
import styled from "styled-components";

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

const Title = styled.h1`
  margin: 10px 0 0 60px;
  text-transform: uppercase;
  color: #023047;
  @media (min-width: 500px) {
    margin-left: 140px;
  }
  @media (min-width: 640px) {
    margin-left: 60px;
  }
  &.futsal {
    display: none;
  }
`;

const InnerWrapper = styled.div`
  /* width: 60%; */
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-gap: 2px; */
  @media (min-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
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
    <Title
      className={
        players.filter((item) => item.position === "Pomocnik").length === 0
          ? "futsal"
          : ""
      }
    >
      Obrońcy
    </Title>

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
    <Title
      className={
        players.filter((item) => item.position === "Pomocnik").length === 0
          ? "futsal"
          : ""
      }
    >
      Pomocnicy
    </Title>
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
    <Title
      className={
        players.filter((item) => item.position === "Napastnik").length === 0
          ? "futsal"
          : ""
      }
    >
      Napastnicy
    </Title>
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
    <Title
      className={
        players.filter((item) => item.position === "futsal").length === 0
          ? "futsal"
          : ""
      }
    >
      Zawodnicy z Pola
    </Title>
    <InnerWrapper>
      {players
        .filter((item) => item.position === "futsal")
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
