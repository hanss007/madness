import React from "react";
import styled from "styled-components";

// const StyledWrapper = styled.div`
//   width: 100%;
//   top: 30px;
// `;

// const Table = styled.table`
//   width: 100%;
//   margin-left: 250px;
//   border-spacing: 50px;
//   border-collapse: collapse;
// `;

// const RowStyled = styled.tr`
//   border-bottom: 1px solid rgba(34, 34, 34, 0.5);
//   color: #0d142d;
//   display: table-row;
//   &.madness {
//     background: linear-gradient(
//       90deg,
//       rgba(13, 20, 44, 1) 30%,
//       rgba(239, 39, 61, 1) 99%
//     );

//     color: white;
//   }
// `;

// const CellContentStyled = styled.td`
//   padding: 2px;
//   font-weight: 600;
//   font-size: 16px;
// `;

//

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

const CardRound = ({ date, time, team1, team2, result1, result2 }) => (
  <StyledWrapper>
    <Table>
      <HeadlineStyled>
        <RowStyled>
          <CellHeadlineStyled>date</CellHeadlineStyled>
          <CellHeadlineStyled>time</CellHeadlineStyled>
          <CellHeadlineStyled>druzyna 1</CellHeadlineStyled>
          <CellHeadlineStyled>wynik 1</CellHeadlineStyled>
          <CellHeadlineStyled>span</CellHeadlineStyled>
          <CellHeadlineStyled>wynik 2</CellHeadlineStyled>
          <CellHeadlineStyled>druzyna 2</CellHeadlineStyled>
        </RowStyled>
      </HeadlineStyled>
      <tbody>
        <RowStyled>
          <CellContentStyled>{date}</CellContentStyled>
          <CellContentStyled>{time}</CellContentStyled>
          <CellContentStyled>{team1}</CellContentStyled>
          <CellContentStyled>{result1}</CellContentStyled>
          <CellContentStyled>:</CellContentStyled>
          <CellContentStyled>{result2}</CellContentStyled>
          <CellContentStyled>{team2}</CellContentStyled>
        </RowStyled>
      </tbody>
    </Table>
  </StyledWrapper>
);

export default CardRound;

//   <Table>
//   <tbody>
//     <RowStyled>
//       <CellContentStyled>{date}</CellContentStyled>
//       <CellContentStyled>{time}</CellContentStyled>
//       <CellContentStyled>{team1}</CellContentStyled>
//       <CellContentStyled>{result1}</CellContentStyled>
//       <CellContentStyled>:</CellContentStyled>
//       <CellContentStyled>{result2}</CellContentStyled>
//       <CellContentStyled>{team2}</CellContentStyled>
//     </RowStyled>
//   </tbody>
// </Table>
