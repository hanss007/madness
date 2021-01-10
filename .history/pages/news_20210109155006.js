import Navbar from "../components/Navbar";
import styled from "styled-components";

const StyledWrapper = styled.div`
  top: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ImageWrapper = styled.img`
  width: 200px;
  height: 140px;
`;

const News = () => (
  <>
    <Navbar />
    <StyledWrapper>
      <ImageWrapper
        src="https://www.bytom.pl/zdjecie/3,p1bivktnhd1pdq747a0lr0r18kc6.jpg"
        alt=""
      />
      <div>
        <div>
          <p>Turnieje / 09.12.2020</p>
        </div>
        <h3>Mistrzostwa Ratowników Górniczych</h3>
        <button>wiecej</button>
      </div>
    </StyledWrapper>
  </>
);

export default News;
