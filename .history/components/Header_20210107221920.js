import Image from "next/image";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 600px;
  background-image: url("https://i.pinimg.com/564x/43/40/17/434017fff6d27921ac9a7dd3e5cafbfd.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-color: #e6e6e6;
  color: black;
  margin: 0;
`;

const Header = () => <StyledWrapper></StyledWrapper>;

export default Header;
