import Navbar from "../components/Navbar";
import Card from "../components/News/Card";
import { news } from "../data/dataNews";

const News = () => (
  <>
    <Navbar />
    <h1>Aktualnośći</h1>
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
