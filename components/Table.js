import React from "react";
import styled from "styled-components";

// const StyledWrapper = styled.div`
//   padding: 8px;

//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const InnerWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 0.8fr 0.3fr 0.1fr 0.1fr;
//   width: 100%;
// `;

// const NameTeam = styled.h2`
//   font-size: 20px;
//   @media (min-width: 320px) {
//     font-size: 10px;
//     line-height: 30px;
//   }
//   @media (min-width: 640px) {
//     font-size: 14px;
//   }
//   @media (min-width: 1024px) {
//     font-size: 20px;
//   }
// `;

// const Colon = styled.span`
//   font-size: 20px;
//   font-weight: 600;
//   @media (min-width: 320px) {
//     font-size: 10px;
//     width: 5px;
//     line-height: 45px;
//   }
//   @media (min-width: 640px) {
//     font-size: 18px;
//     line-height: 50px;
//   }
//   @media (min-width: 1024px) {
//     font-size: 20px;
//     line-height: 60px;
//   }
// `;

// const BorderBottomWrapper = styled.div`
//   border-bottom: 2px solid #222;
//   opacity: 0.4;
//   width: 90%;
//   padding: 2px;
//   margin-left: -75px;
//   @media (min-width: 320px) {
//     margin-left: 10px;
//     width: 100%;
//   }
//   @media (min-width: 640px) {
//     margin-left: -5px;
//   }
// `;

// const Table = ({ item }) => (
//   <StyledWrapper>
//     <InnerWrapper>
//       <NameTeam>{item.name}</NameTeam>
//       <NameTeam>{item.pkt}</NameTeam>
//       <NameTeam>{item.goalsscored}</NameTeam>

//       <NameTeam>{item.goalslost}</NameTeam>
//     </InnerWrapper>
//     <BorderBottomWrapper />
//   </StyledWrapper>
// );

// export default Table;

const StyledWrapper = styled.div`
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

const Table = ({ item }) => (
  <StyledWrapper>
    <Table>
      <HeadlineStyled>
        <RowStyled>
          <CellHeadlineStyled>LP.</CellHeadlineStyled>
          <CellHeadlineStyled>Drużyna</CellHeadlineStyled>
          <CellHeadlineStyled>PTS</CellHeadlineStyled>
          <CellHeadlineStyled>Bramki</CellHeadlineStyled>
        </RowStyled>
      </HeadlineStyled>
      <tbody>
        <RowStyled>
          <CellContentStyled>{item.lp}.</CellContentStyled>
          <CellContentStyled>{item.name}</CellContentStyled>
          <CellContentStyled>{item.pkt}</CellContentStyled>
          <CellContentStyled>{item.goalsscored}</CellContentStyled>
          <CellContentStyled>{item.goalslost}</CellContentStyled>
        </RowStyled>
      </tbody>
    </Table>
  </StyledWrapper>
);

export default Table;
