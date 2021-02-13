import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Table = styled.table`
  margin-left: 220px;
  margin-left: 220px;

  font-size: 22px;
  border-spacing: 50px;
  border-collapse: collapse;
`;

const HeadlineStyled = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
  font-size: 25px;
`;

const RowStyled = styled.tr`
  border-bottom: 1px solid rgba(34, 34, 34, 0.5);
  color: #0d142d;
  display: table-row;
  &.madness {
    background: linear-gradient(
      90deg,
      rgba(63, 175, 229, 1) 0%,
      rgba(34, 34, 34, 1) 49%,
      rgba(253, 88, 37, 1) 93%
    );
    color: white;
  }
`;

const CellHeadlineStyled = styled.th`
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  padding: 20px 10px 8px;
`;

const CellContentStyled = styled.td`
  padding: 20px 35px 8px;
  font-weight: 600;
`;

const Button = styled.a`
  position: absolute;
  color: #0d142d;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 25px;
  right: 440px;
  border-bottom: 2px solid #fd5825;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    background-color: #fd5825;
    color: white;
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
          .slice(0, 7)
          .map((item) => (
            <RowStyled
              className={
                item.team === "MULTIBIURO-MADNESS-KK KWANT ŻORY"
                  ? "madness"
                  : ""
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
    <Button href="/zory/scheudle">Rozwiń Tabelę</Button>
  </StyledWrapper>
);

export default TableTeam;
