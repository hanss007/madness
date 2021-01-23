import Layout from "../components/Layout";
import { fetchQuery } from "../utils";

export async function getServerSideProps() {
  const news = await fetchQuery("items");
  console.log("news on server", news);
  return {
    props: {
      news,
    },
  };
}

const Index = ({ news }) => <Layout news={news} />;

export default Index;
