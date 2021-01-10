import Navbar from "../components/Navbar";
import Card from "../components/News/Card";
import { news } from "../data/dataNews";

const News = () => (
  <>
    <Navbar />

    {news.map((item) => (
      <Card
        type={item.type}
        data={item.data}
        title={item.title}
        imageNews={item.imageNews}
      />
    ))}
  </>
);

export default News;
