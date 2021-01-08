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
  width: 35px;
  height: 35px;
  padding: 4px;
  background-color: #a3d044;
  border-radius: 10px;
  color: black;
  margin-right: 5px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  align-items: center;
  color: #7f7f7f;
`;

const InnerContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Footer = () => (
  <StyledWrapper>
    <InnerWrapper>
      <Title>Prezes Stowarzyszenia Madness</Title>
      <NameTitle>Wojciech Chmielewski</NameTitle>
      <Content>
        <InnerContent>
          <Mail />
          <p>gitness69@interia.pl</p>
        </InnerContent>
      </Content>
    </InnerWrapper>
    <div></div>
    <div></div>
  </StyledWrapper>
);

export default Footer;
