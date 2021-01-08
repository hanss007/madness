import styled, { css } from "styled-components";
import { Email } from "@styled-icons/entypo/Email";
import { Phone } from "@styled-icons/boxicons-regular/Phone";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100vw;
  height: 350px;
  background-color: #222;
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
  margin: 10px 0 0 50px;
  &.secondary {
    margin-top: 80px;
  }
`;

const Title = styled.h2`
  color: white;
  text-transform: uppercase;
  font-weight: 500;
`;

const NameTitle = styled.p`
  color: #f7efe5;
  font-size: 18px;
  font-weight: 500;
`;

const BorderBottomWrapper = styled.div`
  border-bottom: 1px solid rgba(247, 239, 229, 031);
  margin-bottom: 20px;
  width: 55%;
`;

const Content = styled.div`
  align-items: center;
  color: #f7efe5;
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
    <InnerWrapper>
      <Title>Madness Żory</Title>
      <NameTitle>Seweryn Chachura</NameTitle>
      <BorderBottomWrapper />
      <Content>
        <InnerContent>
          <Mail />
          <p>seweryn993@gmail.com</p>
        </InnerContent>
        <InnerContent>
          <MyPhone />
          <p>505-453-543</p>
        </InnerContent>
      </Content>
    </InnerWrapper>
    <InnerWrapper>
      <Title>Madness Chocianów</Title>
      <NameTitle>2 lig Futsalu - Michał Jakiś</NameTitle>

      <BorderBottomWrapper />

      <Content>
        <InnerContent>
          <Mail />
          <p>maile2353@gmail.com</p>
        </InnerContent>
        <InnerContent>
          <MyPhone />
          <p>564-764-343</p>
        </InnerContent>
      </Content>
    </InnerWrapper>
    <InnerWrapper className="secondary">
      <NameTitle>CHLF - Adam Bączek</NameTitle>

      <BorderBottomWrapper className="secondary" />

      <Content>
        <InnerContent>
          <Mail />
          <p>maile2353@gmail.com</p>
        </InnerContent>
        <InnerContent>
          <MyPhone />
          <p>564-764-343</p>
        </InnerContent>
      </Content>
    </InnerWrapper>
  </StyledWrapper>
);

export default Footer;
