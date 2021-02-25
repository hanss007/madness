import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { ArrowRightCircleFill } from "@styled-icons/bootstrap/ArrowRightCircleFill";
import { ArrowLeftCircleFill } from "@styled-icons/bootstrap/ArrowLeftCircleFill";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 700px; */
  margin-top: 60px;

  @media (min-width: 320px) {
    width: 300px;
    margin-left: 30px;
  }
  @media (min-width: 460px) {
    width: 400px;
  }
  @media (min-width: 640px) {
    width: 600px;
  }
  @media (min-width: 800px) {
    width: 780px;
  }
`;

const CalendarHeader = styled.div`
  height: 55px;
  display: flex;
  justify-content: space-around;
  background-color: #ef273d;
  /* margin-left: -60%; */
  @media (min-width: 320px) {
    width: 300px;
    margin-left: -30px;
  }
  @media (min-width: 460px) {
    width: 400px;
  }
  @media (min-width: 640px) {
    width: 580px;
  }
  @media (min-width: 800px) {
    width: 700px;
  }
`;

const NameHeader = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: white;
  letter-spacing: 3px;
  margin-top: 12px;
`;

const NextButton = styled(ArrowRightCircleFill)`
  width: 30px;
  height: 30px;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

const PrevButton = styled(ArrowLeftCircleFill)`
  width: 30px;
  height: 30px;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

const Table = styled.table`
  /* top: 50%;
  left: 50%;
  transform: translate(-41%, 2%); */
  /* width: 700px; */

  /* margin-left: 150px; */
  border-spacing: 0;
  border-collapse: collapse;
  @media (min-width: 320px) {
    width: 240px;
    margin-left: -20px;
  }
  @media (min-width: 460px) {
    width: 380px;
  }
  @media (min-width: 640px) {
    width: 560px;
  }
  @media (min-width: 800px) {
    width: 680px;
  }
`;

const RowStyled = styled.tr`
  border-bottom: 1px solid rgba(34, 34, 34, 0.5);
  color: #0d142d;
  display: table-row;
  height: 38px;
  &.madness {
    background: linear-gradient(
      90deg,
      rgba(13, 20, 44, 1) 30%,
      rgba(239, 39, 61, 1) 99%
    );

    color: white;
  }
`;
const CellContentStyled = styled.td`
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  &.date {
    width: 20%;
    text-align: center;
    font-weight: 500;
    color: #999;
  }
  &.time {
    width: 5%;
    font-size: 12px;
    text-align: center;
    font-weight: 500;
    color: #999;
  }
  &.team1 {
    width: 35%;
    text-align: right;
    padding-right: 15px;
  }

  &.score {
    width: 6%;
    text-align: center;
    font-weight: 600;
    letter-spacing: 2px;
  }
  @media (min-width: 320px) {
    font-size: 10px;
  }
  @media (min-width: 800px) {
    font-size: 14px;
  }
`;

function Round({ allRound }) {
  const [count, setCount] = useState(1);

  const nextRound = () => {
    if (count === 26) {
      setCount(1);
      return;
    }
    setCount(count + 1);
  };

  const currentRound = allRound.filter((item) => item.numberRound === count);

  const previousRound = () => {
    if (count === 1) {
      setCount(26);
      return;
    }
    setCount(count - 1);
  };

  return (
    <StyledWrapper>
      <CalendarHeader>
        <PrevButton onClick={previousRound} />

        <NameHeader>{count}.Kolejka</NameHeader>

        <NextButton onClick={nextRound} />
      </CalendarHeader>

      <Table>
        <tbody>
          {currentRound.map((item) => (
            <RowStyled
              className={
                item.team1 == "Madness"
                  ? "madness"
                  : "" || item.team2 == "Madness"
                  ? "madness"
                  : ""
              }
            >
              <CellContentStyled className="date">
                {item.date}
              </CellContentStyled>
              <CellContentStyled className="time">
                {item.time}
              </CellContentStyled>
              <CellContentStyled className="team1">
                {item.team1}
              </CellContentStyled>
              <CellContentStyled className="score">
                {item.score}
              </CellContentStyled>

              <CellContentStyled>{item.result2}</CellContentStyled>
              <CellContentStyled>{item.team2}</CellContentStyled>
            </RowStyled>
          ))}
        </tbody>
      </Table>
    </StyledWrapper>
  );
}

export default Round;
