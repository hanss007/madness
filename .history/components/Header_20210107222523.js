import Image from "next/image";
import styled from "styled-components";

const StyledWrapper = styled.div`
  /* position: relative; */
  width: 100vw;
  height: 600px;
  background-image: url("https://images.unsplash.com/photo-1510051640316-cee39563ddab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-color: #e6e6e6;
  color: black;
  margin: 0;
`;

const Header = () => <StyledWrapper></StyledWrapper>;

export default Header;
