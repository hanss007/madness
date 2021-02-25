import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  /* width: 100%;
  top: 30px; */
  @media (min-width: 320px) {
    margin-top: 60px;
  }
`;

const Table = styled.table`
  height: 380px;

  border-spacing: 50px;
  border-collapse: collapse;
  @media (min-width: 320px) {
    width: 300px;
    margin: 0 auto;
  }
  @media (min-width: 460px) {
    width: 410px;
  }
  @media (min-width: 640px) {
    width: 550px;
  }
  @media (min-width: 800px) {
    width: 720px;
  }
  @media (min-width: 1024px) {
    width: 795px;
  }
`;

const HeadlineStyled = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;

const RowStyled = styled.tr`
  border-bottom: 1px solid rgba(34, 34, 34, 0.5);
  color: #0d142d;
  display: table-row;

  &.madness {
    background: linear-gradient(
      90deg,
      rgba(13, 20, 44, 1) 30%,
      rgba(239, 39, 61, 1) 99%
    );

    color: white;
  }
`;

const CellHeadlineStyled = styled.th`
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  padding: 20px 10px 8px;

  @media (min-width: 320px) {
    font-size: 12px;
  }
  @media (min-width: 800px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const CellContentStyled = styled.td`
  font-weight: 600;

  @media (min-width: 320px) {
    padding: 10px 10px 8px;
    font-size: 12px;
  }
  @media (min-width: 640px) {
    font-size: 14px;
    padding: 10px 25px 8px;
  }
  @media (min-width: 800px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    padding: 20px 35px 8px;
  }
`;

const TableTeam = ({ table }) => (
  <StyledWrapper>
    <Table>
      <HeadlineStyled>
        <RowStyled>
          <CellHeadlineStyled>LP.</CellHeadlineStyled>
          <CellHeadlineStyled>Drużyna</CellHeadlineStyled>
          <CellHeadlineStyled>Mecze</CellHeadlineStyled>
          <CellHeadlineStyled>PTS</CellHeadlineStyled>
          <CellHeadlineStyled>Bramki</CellHeadlineStyled>
        </RowStyled>
      </HeadlineStyled>
      <tbody>
        {table
          .sort((a, b) => a.lp - b.lp)
          .map((item) => (
            <RowStyled
              className={
                item.team === "MULTIBIURO-MADNESS-KK KWANT" ? "madness" : ""
              }
            >
              <CellContentStyled>{item.lp}.</CellContentStyled>
              <CellContentStyled>{item.team}</CellContentStyled>
              <CellContentStyled>{item.matches}</CellContentStyled>
              <CellContentStyled>{item.pts}</CellContentStyled>
              <CellContentStyled>{item.goals}</CellContentStyled>
            </RowStyled>
          ))}
      </tbody>
    </Table>
  </StyledWrapper>
);

export default TableTeam;
