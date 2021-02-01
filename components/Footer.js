import styled, { css, keyframes } from "styled-components";
import { Email } from "@styled-icons/entypo/Email";
import { Phone } from "@styled-icons/boxicons-regular/Phone";

const StyledWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100vw;
  height: auto;
  background-color: #222;

  @media (min-width: 320px) {
    margin-top: 110px;
    display: flex;
    flex-wrap: wrap;

    height: auto;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Mail = styled(Email)`
  width: 35px;
  height: 35px;
  padding: 4px;
  background-color: #a3d044;
  border-radius: 10px;
  color: black;
  margin-right: 20px;
  @media (min-width: 1024px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 1200px) {
    width: 35px;
    height: 35px;
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
  @media (min-width: 1024px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 1200px) {
    width: 35px;
    height: 35px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px 0 0 50px;
  &.secondary {
    @media (min-width: 1024px) {
      position: absolute;
      top: 59px;
      right: 25px;
    }
    @media (min-width: 1200px) {
      top: 69px;
    }
    @media (min-width: 1366px) {
      right: 85px;
    }
    @media (min-width: 1430px) {
      right: 120px;
    }
  }
  @media (min-width: 1024px) {
    margin-bottom: 25px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 35px;
  }
  /* 
    @media (max-width: 1200px) {
      margin-top: 75px;
    }

    @media (min-width: 320px) {
      margin-top: 720px;
      right: 50%;
    } */

  /* @media (min-width: 320px) {
    margin-bottom: 20px;
  } */
`;

const Title = styled.h2`
  font-size: 20px;
  color: white;
  text-transform: uppercase;
  font-weight: 500;

  @media (min-width: 320px) {
    font-size: 14px;
  }
  @media (min-width: 1200px) {
    font-size: 17px;
  }
`;

const NameTitle = styled.p`
  position: relative;
  color: #f7efe5;
  font-size: 16px;
  font-weight: 500;

  &.secondary {
    top: 8%;

    @media (min-width: 320px) {
      top: 3%;
    }
    @media (min-width: 1024px) {
      top: 8%;
    }
  }

  @media (max-width: 1024px) {
    font-size: 14px;
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
  width: 70%;

  &.secondary {
    top: 8%;

    @media (min-width: 320px) {
      top: 4%;
    }
    @media (min-width: 1024px) {
      top: 8%;
    }
  }

  @media (min-width: 320px) {
    width: 60%;
  }
  @media (min-width: 460px) {
    width: 40%;
  }
  @media (min-width: 768px) {
    width: 30%;
  }
  @media (min-width: 1024px) {
    width: 85%;
  }
`;

const Content = styled.div`
  position: relative;
  align-items: center;
  color: #f7efe5;
  &.secondary {
    top: 8%;

    @media (min-width: 320px) {
      top: 6%;
    }
    @media (min-width: 1024px) {
      top: 8%;
    }
  }
`;

const InnerContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
  @media (max-width: 800px) {
    font-size: 8px;
  }
  @media (min-width: 800px) {
    margin-bottom: 8px;
  }

  @media (min-width: 320px) {
    font-size: 12px;
  }
  @media (min-width: 1200px) {
    font-size: 14px;
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
      <NameTitle className="secondary">PLF - Adam Klimas</NameTitle>

      <BorderBottomWrapper className="secondary" />

      <Content className="secondary">
        <InnerContent>
          <Mail />
          <p>klimas@interia.pl</p>
        </InnerContent>
        <InnerContent>
          <MyPhone />
          <p>785-227-692</p>
        </InnerContent>
      </Content>
    </InnerWrapper>
    <InnerWrapper className="secondary">
      <NameTitle className="secondary">CHLF - Wojciech Chmielewski</NameTitle>

      <BorderBottomWrapper className="secondary" />

      <Content className="secondary">
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
  </StyledWrapper>
);

export default Footer;

// 1240px
