import Layout from "../components/Layout";
import { fetchQuery } from "../utils";
import Head from "next/head";

export async function getServerSideProps() {
  const news = await fetchQuery("items?_limit=6&_sort=id:DESC");
  console.log("news on server", news);

  return {
    props: {
      news,
    },
  };
}

const Index = ({ news }) => (
  <>
    <Head>
      <title>Madness</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout news={news} />
  </>
);

export default Index;
