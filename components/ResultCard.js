import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 8px;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 0.5fr 0.2fr 0.2fr 2fr;
  width: 100%;
`;

const NameTeam = styled.h2`
  margin: 0 auto;
  font-size: 20px;
  @media (min-width: 320px) {
    font-size: 10px;
    width: 50px;
  }
  @media (min-width: 640px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
    width: 250px;
  }
`;

const Score = styled.h3`
  font-size: 22px;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 320px) {
    font-size: 14px;
    width: 10px;
    line-height: 35px;
  }
  @media (min-width: 640px) {
    font-size: 18px;
    line-height: 50px;
  }
  @media (min-width: 1024px) {
    font-size: 22px;
    line-height: 30px;
  }
`;

const Colon = styled.span`
  font-size: 20px;
  font-weight: 600;
  @media (min-width: 320px) {
    font-size: 10px;
    width: 5px;
    line-height: 35px;
  }
  @media (min-width: 640px) {
    font-size: 18px;
    line-height: 50px;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const BorderBottomWrapper = styled.div`
  border-bottom: 2px solid #222;
  opacity: 0.4;

  padding: 2px;
  @media (min-width: 320px) {
    width: 100%;
  }
`;

const ResultCard = ({ item }) => (
  <StyledWrapper>
    <InnerWrapper>
      <NameTeam>{item.team1}</NameTeam>
      <Score>{item.score1}</Score>
      <Colon>:</Colon>
      <Score>{item.score2}</Score>
      <NameTeam>{item.team2}</NameTeam>
    </InnerWrapper>
    <BorderBottomWrapper />
  </StyledWrapper>
);

export default ResultCard;
