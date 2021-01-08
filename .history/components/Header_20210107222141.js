import Image from "next/image";
import styled from "styled-components";
import top from "../images/top.jpg";

const StyledWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 600px;
  background-image: url("top");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-color: #e6e6e6;
  color: black;
  margin: 0;
`;

const Header = () => <StyledWrapper></StyledWrapper>;

export default Header;
