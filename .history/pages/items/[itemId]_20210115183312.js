import Link from "next/link";
import { baseUrl, fetchQuery } from "../../utils";
import styled from "styled-components";
import GlobalStyle from "../../theme/GlobalStyle";
import Navbar from "../../components/Navbar";
import { Calendar } from "@styled-icons/boxicons-regular/Calendar";

const BackgroundWrapper = styled.div`
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1867&q=80");
    background-size: cover;

    width: 100%;
    height: 100vh;
    opacity: 0.1;
    z-index: -1;
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
`;

const CalendarIcon = styled(Calendar)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
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
  margin-left: 120px;
  padding: 3px;
  border-bottom: 2px solid #fd5825;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    background-color: #fd5825;
    color: white;
  }
`;

const ImageWrapper = styled.img`
  width: 550px;
  height: 500px;
  border: 1px solid black;
  margin-bottom: 30px;
`;
const TitleWrapper = styled.h1`
  font-weight: 600;
  font-size: 35px;
`;

const ContentWrapper = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 15px;
`;

export default function Item({ item }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <BackgroundWrapper>
        <StyledWrapper>
          <TitleWrapper>{item.title}</TitleWrapper>
          <InnerWrapper>
            <div>
              <CalendarIcon />
              <span>{item.created}</span>
            </div>
            <ContentButton>
              <Link href="/news">
                <Button>powrót do listy</Button>
              </Link>
            </ContentButton>
          </InnerWrapper>
          <ImageWrapper
            src="https://cdn.pixabay.com/photo/2019/08/05/08/54/football-4385515_1280.jpg"
            alt={item.title}
          />
          {/* <ImageWrapper src={`${baseUrl}${item.url}`} alt={item.title} /> */}

          <ContentWrapper>{item.content}</ContentWrapper>
        </StyledWrapper>
      </BackgroundWrapper>
    </>
  );
}

export async function getStaticProps({ params }) {
  const item = await fetchQuery("items", `${params.itemId}`);
  return {
    props: {
      item,
    },
  };
}

export async function getStaticPaths() {
  const items = await fetchQuery("items");
  const paths = items.map((item) => {
    return {
      params: { itemId: String(item.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
