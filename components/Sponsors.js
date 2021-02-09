import styled from "styled-components";

const ImageWrapper = styled.img`
  margin-left: 10px;
  padding: 5px;
  width: 200px;
  @media (max-width: 1200px) {
    width: 150px;
  }
  @media (max-width: 800px) {
    width: 110px;
  }
  @media (min-width: 460px) {
    width: 70px;
  }
  @media (min-width: 460px) {
    width: 120px;
  }
  @media (min-width: 768px) {
    width: 140px;
  }
  @media (min-width: 1200px) {
    width: 160px;
  }
`;

const Sponosrs = (logo) => <ImageWrapper />;

export default Sponosrs;
