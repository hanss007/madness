import styled, { css, keyframes } from "styled-components";
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
  @media (max-width: 1024px) {
    width: 30px;
    height: 30px;
  }
`;
const MyPhone = styled(Phone)`
  width: 35px;
  height: 35px;
  padding: 4px;
  background-color: #a3d044;
  border-radius: 10px;
  color: black;
  margin-right: 20px;
  @media (max-width: 1024px) {
    width: 30px;
    height: 30px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px 0 0 50px;

  &.secondary {
    margin-top: 70px;
    @media (max-width: 1200px) {
      margin-top: 60px;
    }
  }
`;

const Title = styled.h2`
  font-size: 20px;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  @media (max-width: 1200px) {
    font-size: 17px;
  }
`;

const NameTitle = styled.p`
  position: relative;
  color: #f7efe5;
  font-size: 18px;
  font-weight: 500;

  &.secondary {
    top: 8%;
    @media (max-width: 1240px) {
      top: 5%;
    }
    @media (max-width: 1024px) {
      top: 12%;
    }
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    margin-top: 30px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

const BorderBottomWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid rgba(247, 239, 229, 0.6);
  margin-bottom: 20px;
  width: 55%;
  &.secondary {
    top: 8%;
    @media (max-width: 1200px) {
      top: 5%;
    }
    @media (max-width: 1024px) {
      top: 12%;
    }
  }
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

const Content = styled.div`
  position: relative;
  align-items: center;
  color: #f7efe5;
  &.secondary {
    top: 8%;
    @media (max-width: 1024px) {
      top: 10%;
    }
  }
`;

const InnerContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 1024px) {
    font-size: 12px;
  }
  @media (max-width: 800px) {
    font-size: 8px;
  }
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
          <p>508-244-715</p>
        </InnerContent>
      </Content>
    </InnerWrapper>
    <InnerWrapper>
      <Title>Madness Żory</Title>
      <NameTitle className="secondary">Seweryn Chachura</NameTitle>
      <BorderBottomWrapper className="secondary" />
      <Content className="secondary">
        <InnerContent>
          <Mail />
          <p>seweryn17@02.pl</p>
        </InnerContent>
        <InnerContent>
          <MyPhone />
          <p>784-478-999</p>
        </InnerContent>
      </Content>
    </InnerWrapper>
    <InnerWrapper>
      <Title>Madness Chocianów</Title>
      <NameTitle className="secondary">PLF - Michał Jakiś</NameTitle>

      <BorderBottomWrapper className="secondary" />

      <Content className="secondary">
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
      <NameTitle className="secondary">CHLF - Adam Bączek</NameTitle>

      <BorderBottomWrapper className="secondary" />

      <Content className="secondary">
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

// 1240px
