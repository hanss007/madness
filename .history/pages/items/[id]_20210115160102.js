import React from "react";
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
      <h3>{item.title}</h3>
    </StyledWrapper>
  );
}

export async function getStaticProps({ params }) {
  const movie = await fetchQuery("movies", `${params.movieId}`);
  return {
    props: {
      movie,
    },
  };
}

export async function getStaticPaths() {
  const movies = await fetchQuery("movies");
  const paths = movies.map((movie) => {
    return {
      params: { movieId: String(movie.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
