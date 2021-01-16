import DeatailsTemplate from "../templates/DetailsTemplate";
import GlobalStyle from "../theme/GlobalStyle";
import Navbar from "../components/Navbar";
import { news } from "../data/dataNews";

const DetailsPage = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <div>
      {news.map((item) => (
        <DeatailsTemplate
          id={item.id}
          title={item.title}
          imageNews={item.imageNews}
          content={item.content}
        />
      ))}
    </div>
  </>
);

export default DetailsPage;
