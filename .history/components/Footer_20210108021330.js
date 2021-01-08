import styled from "styled-components";
import { Email } from "@styled-icons/entypo/Email";
import { Phone } from "@styled-icons/boxicons-regular/Phone";

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
  margin-right: 20px;
`;
const MyPhone = styled(Phone)`
  width: 35px;
  height: 35px;
  padding: 4px;
  background-color: #a3d044;
  border-radius: 10px;
  color: black;
  margin-right: 20px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 50px;
`;

const Title = styled.h2`
  color: white;
  text-transform: uppercase;
`;

const NameTitle = styled.p`
  color: #7f7f7f;
  font-size: 18px;
  font-weight: 500;
  width: 55%;
`;

const BorderBottomWrapper = styled.div`
  border-bottom: 1px solid #7f7f7f;
  margin-bottom: 20px;
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
      <BorderBottomWrapper />
      <Content>
        <InnerContent>
          <Mail />
          <p>gitness69@interia.pl</p>
        </InnerContent>
        <InnerContent>
          <MyPhone />
          <p>607-606-405</p>
        </InnerContent>
      </Content>
    </InnerWrapper>
    <div></div>
    <div></div>
  </StyledWrapper>
);

export default Footer;
