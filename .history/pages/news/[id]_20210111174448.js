import { useRouter } from "next/router";

import styled from "styled-components";

const news = [
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

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailsTemplate = ({ title, imageNews, content }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <StyledWrapper>
      <h1>{title}</h1>
      <img src={imageNews} alt="" />
      <p>{content}</p>
    </StyledWrapper>
  );
};

export default DetailsTemplate;
