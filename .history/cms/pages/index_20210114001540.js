const Home = ({ item_news }) => {
  console.log(item_news);

  return (
    <div>
      <h1>miejsce na newsy</h1>
    </div>
  );
};

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/news`);
  const data = await res.json();

  return {
    props: {
      news: data,
    },
  };
}

export default Home;
