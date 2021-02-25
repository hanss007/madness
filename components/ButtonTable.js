import React from "react";
import styled from "styled-components";

const Button = styled.a`
  position: absolute;
  color: #0d142d;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;

  border-bottom: 2px solid #fd5825;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    background-color: #fd5825;
    color: white;
  }
  @media (min-width: 320px) {
    right: 8%;
  }
  @media (min-width: 1024px) {
    margin-top: 30px;
  }
  @media (min-width: 1200px) {
    right: 12%;
  }
  @media (min-width: 1400px) {
    right: 18%;
  }
`;

const ButtonTable = () => (
  <Button href="/zory/games/gamesZory">Rozwiń Tabelę</Button>
);

export default ButtonTable;
