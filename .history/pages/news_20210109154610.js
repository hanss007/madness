import Navbar from "../components/Navbar";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const News = () => (
  <>
    <Navbar />
    <StyledWrapper>
      <img
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
