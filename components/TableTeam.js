import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  top: 30px;
`;

const Table = styled.table`
  width: 795px;
  height: 380px;
  margin-left: 250px;
  border-spacing: 50px;
  border-collapse: collapse;
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
  font-size: 18px;
`;

const CellContentStyled = styled.td`
  padding: 20px 35px 8px;
  font-weight: 600;
  font-size: 16px;
`;

function TableTeam({ table }) {
  const activButton = 7;
  return (
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
}
export default TableTeam;
