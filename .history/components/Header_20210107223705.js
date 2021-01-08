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
  margin-top: 20px;
  color: white;
  text-align: center;
  font-size: 40px;
`;
const NameTitle = styled.h2`
  margin-left: 250px;
  text-align: center;
  color: gray;
  font-size: 32px;
  text-transform: uppercase;
  text-shadow: 3px 5px 7px #ce5937;
`;

const Header = () => (
  <StyledWrapper>
    <TitleStyled>Stowarzyszenie</TitleStyled>
    <NameTitle>Madness</NameTitle>
  </StyledWrapper>
);

export default Header;
