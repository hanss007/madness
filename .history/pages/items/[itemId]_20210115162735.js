import Link from "next/link";
import { baseUrl, fetchQuery } from "../../utils";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Item({ item }) {
  return (
    <StyledWrapper>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eligendi
        impedit sit, eum harum ducimus nam possimus saepe cumque quae? Obcaecati
        magnam perferendis in praesentium enim? Hic ex quae ullam.
      </h1>
      <img src={`${baseUrl}${item.cover.url}`} alt="" />
      <h3>{item.title}</h3>
    </StyledWrapper>
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
