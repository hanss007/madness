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
  grid-template-columns: 2fr 0.5fr 0.2fr 0.5fr 2fr;
  width: 100%;
`;

const NameTeam = styled.h2`
  margin: 0 20px;
  font-size: 20px;
`;

const Score = styled.h3`
  font-size: 22px;
  margin: 0 8px;
`;

const Colon = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const BorderBottomWrapper = styled.div`
  border-bottom: 2px solid #222;
  opacity: 0.4;

  padding: 2px;
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
