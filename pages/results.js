import styled from "styled-components";
import Navbar from "../components/Navbar";
import GlobalStyle from "../theme/GlobalStyle";

import Link from "next/link";
import { fetchQuery, baseUrl } from "../utils";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    height: 110vh;
    opacity: 0.3;
    z-index: -1;
  }
`;
const Title = styled.h1`
  background-color: #fd5825;
  padding: 10px;
  color: white;
  border-radius: 5px;
  margin-top: 60px;
`;
const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 85px;
  margin-top: 40px;
`;
const ImageWrapper = styled.img`
  width: 400px;
  height: 350px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 30px;
  margin-bottom: 70px;
`;

export default function Results({ results }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <StyledWrapper>
        <Title>Wyniki Turniejów Stowarzyszenia Madness</Title>
        <InnerWrapper>
          {results.map((item) => (
            <Link href={`/results/${item.id}`}>
              <ImageWrapper src={`${baseUrl}${item.image.url}`} alt="" />
            </Link>
          ))}
        </InnerWrapper>
      </StyledWrapper>
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
