import React from "react";
import Layout from "../components/Layout";
import { fetchQuery } from "../utils";
import Head from "next/head";

export async function getServerSideProps() {
  const news = await fetchQuery("items?_limit=6&_sort=id:DESC");
  const galleries = await fetchQuery("galleries?_limit=6&_sort=id:DESC");

  return {
    props: {
      news,
      galleries,
    },
  };
}

const Index = ({ news, galleries }) => (
  <>
    <Head>
      <title>Madness</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout news={news} galleries={galleries} />
  </>
);

export default Index;
