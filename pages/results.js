import styled from "styled-components";
import Navbar from "../components/Navbar";
import GlobalStyle from "../theme/GlobalStyle";
import BurgerMenu from "../components/BurgerMenu";
import Link from "next/link";
import { fetchQuery, baseUrl } from "../utils";

const Backgound = styled.div`
  position: relative;
  height: 100%;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1867&q=80");
    background-size: cover;

    width: 100%;
    height: 100%;
    opacity: 0.3;
    z-index: -1;
  }
  @media (min-width: 320px) {
    height: 100vh;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  background-color: #fd5825;
  padding: 10px;
  color: white;
  border-radius: 5px;
  margin-top: 60px;

  @media (min-width: 320px) {
    font-size: 12px;
  }
  @media (min-width: 460px) {
    font-size: 14px;
  }
  @media (min-width: 640px) {
    font-size: 16px;
  }
  @media (min-width: 800px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
  }
  @media (min-width: 1200px) {
    font-size: 28px;
  }
  @media (min-width: 1366px) {
    font-size: 32px;
  }
`;
const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 85px;
  margin-top: 40px;

  @media (min-width: 320px) {
    grid-column-gap: 10px;
  }
  @media (min-width: 460px) {
    grid-column-gap: 15px;
  }
  @media (min-width: 640px) {
    grid-column-gap: 20px;
  }
  @media (min-width: 800px) {
    grid-column-gap: 28px;
  }
  @media (min-width: 1024px) {
    grid-column-gap: 30px;
  }
  @media (min-width: 1200px) {
    grid-column-gap: 35px;
  }
  @media (min-width: 1366px) {
    grid-column-gap: 40px;
  }
`;
const ImageWrapper = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 30px;
  margin-bottom: 70px;
  cursor: pointer;
  @media (min-width: 320px) {
    width: 85px;
    height: 85px;
    margin-right: 5px;
  }
  @media (min-width: 460px) {
    width: 130px;
    height: 130px;
    margin-right: 5px;
  }
  @media (min-width: 640px) {
    width: 180px;
    height: 180px;
    margin-right: 5px;
  }
  @media (min-width: 800px) {
    width: 210px;
    height: 210px;
    margin-right: 5px;
  }
  @media (min-width: 1024px) {
    width: 300px;
    height: 300px;
    margin-right: 5px;
  }
  @media (min-width: 1200px) {
    width: 330px;
    height: 330px;
    margin-right: 5px;
  }
  @media (min-width: 1366px) {
    width: 380px;
    height: 380px;
    margin-right: 5px;
  }
`;

export default function Results({ results }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <BurgerMenu />
      <Backgound>
        <StyledWrapper>
          <Title>Wyniki Turniejów Stowarzyszenia Madness</Title>
          <InnerWrapper>
            {results.map((item) => (
              <Link href={`/results/${item.id}`}>
                <ImageWrapper src={item.image.url} alt="" />
              </Link>
            ))}
          </InnerWrapper>
        </StyledWrapper>
      </Backgound>
    </>
  );
}

export async function getServerSideProps() {
  const results = await fetchQuery("results");

  return {
    props: {
      results,
    },
  };
}

// export default function Results({ results }) {
//   return (
//     <>
//       <GlobalStyle />
//       <Navbar />
//       <StyledWrapper>
//         <Title>Wyniki Turniejów Stowarzyszenia Madness</Title>
//         <InnerWrapper>
//           {results.map((item) => (
//             <Link href={`/results/${item.id}`}>
//               <ImageWrapper src={`${baseUrl}${item.image.url}`} alt="" />
//             </Link>
//           ))}
//         </InnerWrapper>
//       </StyledWrapper>
//     </>
//   );
// }

// export async function getServerSideProps() {
//   const results = await fetchQuery("results");

//   return {
//     props: {
//       results,
//     },
//   };
// }
