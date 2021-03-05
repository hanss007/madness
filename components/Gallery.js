import Image from "next/image";
import styled from "styled-components";
import CardGallery from "./CardGallery";
import { fetchQuery } from "../utils";

const StyledWrapper = styled.div`
  height: 700px;
  margin-top: 20px;
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 45px;
  }
  @media (min-width: 1200px) {
    grid-column-gap: 95px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30%;
`;

const Title = styled.h2`
  text-align: center;
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 1024px) {
    display: block;
    margin-top: 90px;
  }
`;

export default function Gallery({ galleries }) {
  console.log(galleries);
  return (
    <>
      {/* <Title>Galeria w Budowie dostępna wkrótce !!</Title> */}
      <Container>
        <StyledWrapper>
          {galleries.map((item) => (
            <CardGallery
              item={item["cover"]}
              title={item.title}
              url={"cover"}
            />
          ))}
        </StyledWrapper>
      </Container>
    </>
  );
}

// export async function getServerSideProps() {
//   const galleries = await fetchQuery("galleries");

//   return {
//     props: {
//       galleries,
//     },
//   };
// }
