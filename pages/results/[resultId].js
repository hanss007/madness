import Link from "next/link";
import { baseUrl, fetchQuery } from "../../utils";
import styled from "styled-components";
import GlobalStyle from "../../theme/GlobalStyle";
import Navbar from "../../components/Navbar";

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
    opacity: 0.2;
    z-index: -1;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  width: 70%;
  top: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;
`;

const Title = styled.th`
  position: absolute;
  background-color: #fd5825;
  color: white;
  width: 80%;
  font-size: 30px;
  text-align: center;
  top: -40px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.25fr 0.25fr 1fr;
  grid-gap: 50px;
  margin-bottom: 30px;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ItemResults({ item }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <BackgroundWrapper>
        <StyledWrapper>
          <InnerWrapper>
            <Title>{item["Group"].map((item) => item.title)}</Title>
            <ContentWrapper>
              <ResultWrapper>
                {item["Group"].map((item) =>
                  item["resultteam"].map((item) => <h2>{item.team1}</h2>)
                )}
              </ResultWrapper>

              <ResultWrapper>
                {item["Group"].map((item) =>
                  item["resultteam"].map((item) => <h2>{item.score1}</h2>)
                )}
              </ResultWrapper>

              <ResultWrapper>
                {item["Group"].map((item) =>
                  item["resultteam"].map((item) => <h2>{item.score2}</h2>)
                )}
              </ResultWrapper>
              <ResultWrapper>
                {item["Group"].map((item) =>
                  item["resultteam"].map((item) => <h2>{item.team2}</h2>)
                )}
              </ResultWrapper>
            </ContentWrapper>
          </InnerWrapper>
        </StyledWrapper>
      </BackgroundWrapper>
    </>
  );
}

export async function getServerSideProps({ query, params }) {
  console.log("query", query, params);
  const item = await fetchQuery(`results/${params.resultId}`);
  return {
    props: {
      item,
    },
  };
}

// </td>
//               <td>
//                 {item["Group"].map((item) =>
//                   item["resultteam"].map((item) => (
//                     <h2>{`${item.score1} : `}</h2>
//                   ))
//                 )}
//               </td>
//               <td>
//                 {item["Group"].map((item) =>
//                   item["resultteam"].map((item) => <h2>{item.score2}</h2>)
//                 )}
//               </td>
//               <td>
//                 {" "}
//                 {item["Group"].map((item) =>
//                   item["resultteam"].map((item) => <h2>{item.team1}</h2>)
//                 )}
//               </td>
//             </tr> */}
