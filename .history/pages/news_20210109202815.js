import Navbar from "../components/Navbar";
import Card from "../components/News/Card";
import { news } from "../data/dataNews";
import GlobalStyle from "../theme/GlobalStyle";

const News = () => (
  <>
    <GlobalStyle />
    <Navbar style={{ position: fixed }} />
    <h1>AKTUALNOŚCI</h1>
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
