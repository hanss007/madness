import styled from "styled-components";
import { baseUrl, fetchQuery } from "../../utils";
import GlobalStyle from "../../theme/GlobalStyle";
import Navbar from "../../components/Navbar";
import BurgerMenu from "../../components/BurgerMenu";
import ResultCard from "../../components/ResultCard";
import Table from "../../components/Table";
import Head from "next/head";

const StyledWrapper = styled.div`
  width: 70%;
  margin-top: 25%;
  margin-left: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 320px) {
    margin: 21% auto;

    width: 90%;
  }
  @media (min-width: 640px) {
    top: 70%;
  }
  @media (min-width: 800px) {
    width: 70%;
    margin: 10% auto;
  }
`;

const Title = styled.h1`
  background-color: #ef273d;
  width: 100%;
  color: white;
  text-align: center;
  margin: 50px 0 30px;
  @media (min-width: 320px) {
    font-size: 22px;
  }
  @media (min-width: 640px) {
    font-size: 28px;
  }
  @media (min-width: 1024px) {
    font-size: 30px;
  }
`;

const TableWrapper = styled.div`
  background-color: rgba(141, 141, 141);
  display: grid;
  grid-template-columns: 1.3fr 0.4fr 0.7fr;
  justify-items: center;
  width: 100%;
  height: 50px;
  color: white;
  margin-top: 10px;
  @media (min-width: 320px) {
    height: 40px;
    font-size: 10px;
    margin-top: 5px;
  }
  @media (min-width: 640px) {
    font-size: 12px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
    height: 50px;
    grid-template-columns: 1.4fr 0.6fr 0.7fr;
  }
  &.final {
    display: none;
  }
`;

const TitleTable = styled.h2`
  &.finalTable {
    display: none;
  }
`;

export default function ItemResults({ item }) {
  return (
    <>
      <Head>
        <title>Madness</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <Navbar />
      <BurgerMenu />
      <StyledWrapper>
        {item["Group"].map((item) => (
          <>
            <Title>{item.title}</Title>
            {item["resultteam"].map((item) => (
              <ResultCard key={item.id} item={item} />
            ))}
            <TableWrapper className={item["table"].length === 0 ? "final" : ""}>
              <TitleTable>Drużyna</TitleTable>
              <TitleTable>Pkt</TitleTable>
              <TitleTable>Bramki</TitleTable>
            </TableWrapper>

            {item["table"].map((item) => (
              <Table key={item.id} item={item} />
            ))}
          </>
        ))}
      </StyledWrapper>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const item = await fetchQuery("results", `${params.resultId}`);
  return {
    props: {
      item,
    },
  };
}

// export async function getServerSideProps({ query, params }) {
//   console.log("query", query, params);
//   const item = await fetchQuery(`results/${params.resultId}`);
//   return {
//     props: {
//       item,
//     },
//   };
// }

// export default function ItemResults({ item }) {
//   return (
//     <>
//       <GlobalStyle />
//       <Navbar />
//       <BurgerMenu />
//       <StyledWrapper>
//         {item["Group"].map((item) => (
//           <>
//             <Title>{item.title}</Title>
//             {item["resultteam"].map((item) => (
//               <ResultCard key={item.id} item={item} />
//             ))}
//             <TableWrapper>
//               <h2>Drużyna</h2>
//               <h2>Pkt</h2>
//               <h2>Bramki</h2>
//             </TableWrapper>

//             {item["table"].map((item) => (
//               <Table key={item.id} item={item} />
//             ))}
//           </>
//         ))}
//       </StyledWrapper>
//     </>
//   );
// }

// export async function getServerSideProps({ query, params }) {
//   console.log("query", query, params);
//   const item = await fetchQuery(`results/${params.resultId}`);
//   return {
//     props: {
//       item,
//     },
//   };
// }
