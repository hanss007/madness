import Image from "next/image";
import styled from "styled-components";
import CardGallery from "./CardGallery";

const images = [
  {
    id: 1,
    ImageUrl: "/images/stadion.jpg",
  },
  {
    id: 2,
    ImageUrl:
      "https://cdn.pixabay.com/photo/2017/12/07/18/25/tolgay-arslan-3004304_1280.jpg",
  },
  {
    id: 3,
    ImageUrl:
      "https://cdn.pixabay.com/photo/2017/09/03/09/48/brazil-2709731_1280.jpg",
  },
  {
    id: 1,
    ImageUrl:
      "https://cdn.pixabay.com/photo/2019/08/05/08/54/football-4385515_1280.jpg",
  },
  {
    id: 2,
    ImageUrl:
      "https://cdn.pixabay.com/photo/2017/12/07/18/25/tolgay-arslan-3004304_1280.jpg",
  },
  {
    id: 3,
    ImageUrl:
      "https://cdn.pixabay.com/photo/2017/09/03/09/48/brazil-2709731_1280.jpg",
  },
];

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
`;

const Title = styled.h2`
  text-align: center;
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 1024px) {
    display: block;
    margin-top: 70px;
  }
`;

const Gallery = () => (
  <>
    <Title>Galeria w Budowie dostępna wkrótce !!</Title>
    <Container>
      <StyledWrapper>
        {images.map((item) => (
          <CardGallery ImageUrl={item.ImageUrl} />
        ))}
      </StyledWrapper>
    </Container>
  </>
);

export default Gallery;
