import Link from "next/link";
import { baseUrl, fetchQuery } from "../../utils";
import styled from "styled-components";
import GlobalStyle from "../../theme/GlobalStyle";
import Navbar from "../../components/Navbar";
import ResultCard from "../../components/ResultCard";
import Table from "../../components/Table";

const StyledWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 70%;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    top: 30%;
    width: 80%;
  }
`;

const Title = styled.h1`
  background-color: #fd5825;
  width: 100%;
  color: white;
  text-align: center;
  margin: 50px 0 30px;
`;

const TableWrapper = styled.div`
  background-color: rgba(141, 141, 141);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  width: 100%;
  height: 50px;
  color: white;
  margin-top: 10px;
`;

export default function ItemResults({ item }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />

      <StyledWrapper>
        {item["Group"].map((item) => (
          <>
            <Title>{item.title}</Title>
            {item["resultteam"].map((item) => (
              <ResultCard key={item.id} item={item} />
            ))}
            <TableWrapper>
              <h2>Drużyna</h2>
              <h2>Pkt</h2>
              <h2>Bramki</h2>
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

export async function getServerSideProps({ query, params }) {
  console.log("query", query, params);
  const item = await fetchQuery(`results/${params.resultId}`);
  return {
    props: {
      item,
    },
  };
}
