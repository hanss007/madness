import React from "react";
import styled from "styled-components";

const Button = styled.a`
  position: absolute;
  color: #0d142d;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 30px;
  right: 600px;
  border-bottom: 2px solid #fd5825;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    background-color: #fd5825;
    color: white;
  }
`;

const ButtonTable = () => (
  <Button href="/zory/games/gamesZory">Rozwiń Tabelę</Button>
);

export default ButtonTable;
