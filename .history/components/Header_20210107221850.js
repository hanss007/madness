import Image from "next/image";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 600px;
  background-image: url("https://i.pinimg.com/564x/e2/90/5e/e2905e4d6a7d8655d1311db49ae383f7.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-color: #e6e6e6;
  color: black;
  margin: 0;
`;

const Header = () => <StyledWrapper></StyledWrapper>;

export default Header;
