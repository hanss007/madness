import Link from "next/link";
import { baseUrl, fetchQuery } from "../../utils";
import styled from "styled-components";
import GlobalStyle from "../../theme/GlobalStyle";
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
`;

export default function Item({ item }) {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <h1>{item.content}</h1>
        <img src={`${baseUrl}${item.url}`} alt="" />
        <h3>{item.title}</h3>
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
