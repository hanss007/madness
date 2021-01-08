import styled from "styled-components";
import { Email } from "@styled-icons/entypo/Email";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  width: 100vw;
  height: 350px;
  background-color: #252525;
  color: black;
  margin: 0;
`;

const Mail = styled(Email)`
  width: 30px;
  height: 30px;
  padding: 2px;
  background-color: #a3d044;
  border-radius: 20px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Title = styled.h2`
  color: white;
  text-transform: uppercase;
`;

const NameTitle = styled.p`
  color: #7f7f7f;
  font-size: 18px;
  font-weight: 500;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = () => (
  <StyledWrapper>
    <InnerWrapper>
      <Title>Prezes Stowarzyszenia Madness</Title>
      <NameTitle>Wojciech Chmielewski</NameTitle>
      <Content>
        <div>
          <Mail />
        </div>
      </Content>
    </InnerWrapper>
    <div></div>
    <div></div>
  </StyledWrapper>
);

export default Footer;
