import Image from "next/image";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 600px;
  /* background-image: url("https://images.unsplash.com/photo-1599204606395-ede983387d21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"); */
  background-image: url("https://images.unsplash.com/photo-1540753003857-32db1552eead?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2690&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-color: #e6e6e6;
  color: black;
  margin: 0;
`;

const TitleStyled = styled.h1`
  color: white;
  z-index: 999;
`;

const Header = () => (
  <StyledWrapper>
    <h1>Stowarzyszenie</h1>
    <h2>Madness</h2>
  </StyledWrapper>
);

export default Header;
