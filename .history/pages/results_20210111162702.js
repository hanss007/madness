import DeatailsTemplate from "../templates/DetailsTemplate";
import GlobalStyle from "../theme/GlobalStyle";
import Navbar from "../components/Navbar";

const item = [
  {
    title: "Mistrzostwa Polski Górników i Przyjaciół",
    excerpt:
      "W dniu 13.02.2021 Odybyły się kolejne Mistrzostwa Polski Górników i Przyjaciół w których udział wzieło… ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    imageNews:
      "https://cdn.pixabay.com/photo/2016/12/25/15/40/ball-1930189_1280.jpg",
    created: "1 day",
    data: "12.05.2020",
    type: "Turnieje",
  },
];

const DetailsPage = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <div>
      {item.map((item) => (
        <DeatailsTemplate
          title={item.title}
          imageNews={item.imageNews}
          content={item.content}
        />
      ))}
    </div>
  </>
);

export default DetailsPage'
