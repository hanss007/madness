import Link from "next/link";
import { baseUrl, fetchQuery } from "../../utils";
import styled from "styled-components";
import GlobalStyle from "../../theme/GlobalStyle";
import Navbar from "../../components/Navbar";
import NavbarTeam from "../../components/NavbarTeam";
import BurgerMenu from "../../components/BurgerMenu";
import { Calendar } from "@styled-icons/boxicons-regular/Calendar";
import { linksZory } from "../../data/links";

const BackgroundWrapper = styled.div`
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    /* background-image: url("https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1867&q=80"); */
    background-size: cover;

    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: -1;
  }
  @media (min-width: 320px) {
    height: 120vh;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  width: 70%;
  top: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 15px;
  @media (min-width: 320px) {
    font-size: 10px;
  }
  @media (min-width: 800px) {
    font-size: 12px;
  }
  @media (min-width: 1200px) {
    font-size: 15px;
  }
`;

const CalendarIcon = styled(Calendar)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  @media (min-width: 320px) {
    width: 20px;
    height: 20px;
  }
  @media (min-width: 800px) {
    width: 25px;
    height: 25px;
  }
  @media (min-width: 1200px) {
    width: 30px;
    height: 30px;
  }
`;

const ContentButton = styled.div`
  display: fex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2px;
`;

const Button = styled.a`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  margin-left: 300px;
  padding: 3px;
  border-bottom: 2px solid #fd5825;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    background-color: #fd5825;
    color: white;
  }
  @media (min-width: 320px) {
    font-size: 9px;
    margin-left: 50px;
  }
  @media (min-width: 460px) {
    font-size: 10px;
  }
  @media (min-width: 640px) {
    font-size: 12px;
  }
`;

const ImageWrapper = styled.img`
  width: 650px;
  height: 500px;
  border: 1px solid black;
  margin-bottom: 30px;
  @media (min-width: 320px) {
    width: 250px;
    height: 220px;
  }
  @media (min-width: 460px) {
    width: 300px;
    height: 250px;
  }
  @media (min-width: 640px) {
    width: 380px;
    height: 280px;
  }
  @media (min-width: 800px) {
    width: 480px;
    height: 350px;
  }
  @media (min-width: 1024px) {
    width: 540px;
    height: 420px;
  }
  @media (min-width: 1200px) {
    width: 600px;
    height: 450px;
  }
  @media (min-width: 1366px) {
    width: 650px;
    height: 500px;
  }
`;
const TitleWrapper = styled.h1`
  font-weight: 600;
  font-size: 35px;
  @media (min-width: 320px) {
    font-size: 15px;
  }
  @media (min-width: 460px) {
    font-size: 18px;
  }
  @media (min-width: 640px) {
    font-size: 22px;
  }
  @media (min-width: 800px) {
    font-size: 28px;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
  }
  @media (min-width: 1200px) {
    font-size: 35px;
  }
`;

const ContentWrapper = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 15px;
  @media (min-width: 320px) {
    width: 240px;
    font-size: 12px;
  }
  @media (min-width: 460px) {
    width: 280px;
    font-size: 14px;
  }
  @media (min-width: 640px) {
    width: 360px;
    font-size: 16px;
  }
  @media (min-width: 800px) {
    width: 460px;
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    width: 520px;
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    width: 580px;
  }
  @media (min-width: 1366px) {
    width: 630px;
  }
`;

export default function Item({ item }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <NavbarTeam links={linksZory} />
      <BurgerMenu />
      <BackgroundWrapper>
        <StyledWrapper>
          <TitleWrapper>{item.title}</TitleWrapper>
          <InnerWrapper>
            <div>
              <CalendarIcon />
              <span>{item.created}</span>
            </div>
            <ContentButton>
              <Link href="/zory/news/newsZory">
                <Button>powrót do listy</Button>
              </Link>
            </ContentButton>
          </InnerWrapper>
          <ImageWrapper src={item.image.url} alt={item.title} />
          <ContentWrapper>{item.content}</ContentWrapper>
        </StyledWrapper>
      </BackgroundWrapper>
    </>
  );
}

export async function getStaticProps({ params }) {
  console.log({ params });
  const item = await fetchQuery("zory-news", `${params.newsZoryId}`);
  return {
    props: {
      item,
    },
  };
}

export async function getStaticPaths() {
  const items = await fetchQuery("zory-news");
  const paths = items.map((item) => {
    console.log("item", item);
    return {
      params: { newsZoryId: String(item.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
