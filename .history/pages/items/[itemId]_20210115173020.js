import Link from "next/link";
import { baseUrl, fetchQuery } from "../../utils";
import styled from "styled-components";
import GlobalStyle from "../../theme/GlobalStyle";
import Navbar from "../../components/Navbar";

const StyledWrapper = styled.div`
  position: relative;
  top: 70px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 15px;
`;

const Button = styled.a`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 10px;
  margin-left: 50px;
  border-bottom: 2px solid #fd5825;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    background-color: #fd5825;
    color: white;
  }
`;

const ImageWrapper = styled.img`
  width: 500px;
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
      <StyledWrapper>
        <TitleWrapper>{item.title}</TitleWrapper>
        <InnerWrapper>
          <div>
            <p></p>
            <span>{item.created}</span>
          </div>

          <Link href="">
            <Button>powrót do listy</Button>
          </Link>
        </InnerWrapper>
        <ImageWrapper src={`${baseUrl}${item.url}`} alt={item.title} />

        <ContentWrapper>{item.content}</ContentWrapper>
      </StyledWrapper>
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
