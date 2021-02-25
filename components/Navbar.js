import React from "react";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  background-color: #222;
  height: 75px;
  font-size: 16px;
  text-transform: uppercase;
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 800px) {
    height: 65px;
    display: flex;
    justify-content: flex-end;
  }
  @media (min-width: 1024px) {
    height: 75px;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  align-items: center;
  padding: 0px;
  margin-right: 60px;

  color: white;
  font-weight: bold;
`;

const StyledLi = styled.li`
  height: 100%;
  padding: 10px;
`;
const BorderRightWrapper = styled.div`
  border-right: 1px solid white;
  height: 20px;
  margin-right: 5px;
  @media (min-width: 800px) {
    margin-top: 10px;
    height: 15px;
  }
  @media (min-width: 1024px) {
    margin-top: 0px;
    height: 20px;
  }
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  min-width: 160px;
  margin-left: -8px;
  margin-top: 10px;
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const StyledA = styled.a`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  color: white;
  cursor: pointer;
  &.active {
    background-color: #fd5825;
    padding: 2px;
    border-radius: 3px;
  }

  @media (min-width: 800px) {
    font-size: 10px;
  }
  @media (min-width: 1024px) {
    font-size: 12px;
  }
`;
const StyledTeam = styled.div`
  background-color: #222;

  cursor: pointer;

  @media (min-width: 800px) {
    font-size: 10px;
  }
  @media (min-width: 1024px) {
    font-size: 12px;
  }
`;

const SubA = styled(StyledA)`
  text-decoration: none;
  display: block;
  text-align: left;
  background-color: #222;
  padding: 10px;
`;

const StyledLogoLink = styled(StyledA)`
  position: absolute;

  top: 2px;
  left: 25px;
  width: 80px;
  height: 65px;
  background-image: url("/images/logo.png");
  background-size: cover;

  @media (min-width: 800px) {
    top: 8px;
    width: 65px;
    height: 50px;
  }

  @media (min-width: 1024px) {
    top: 10px;
    width: 70px;
    height: 55px;
  }
  @media (min-width: 1024px) {
    top: 5px;
    width: 80px;
    height: 65px;
  }
`;

const StyledUlTeam = styled(StyledUl)`
  margin-top: -4px;
`;

function Navbar() {
  const router = useRouter();

  return (
    <>
      <StyledWrapper>
        <StyledLogoLink href="/" />

        <StyledUl>
          <StyledLi>
            <StyledA
              className={router.pathname === "/" ? "active" : ""}
              href="/"
            >
              Home
            </StyledA>
          </StyledLi>
          <BorderRightWrapper />
          <StyledLi>
            <StyledA
              className={router.pathname === "/news" ? "active" : ""}
              href="/news"
            >
              Aktualności
            </StyledA>
          </StyledLi>
          <BorderRightWrapper />
          <DropDownLi>
            <StyledA>Madness</StyledA>

            <DropDownContent>
              {" "}
              <SubA
                className={router.pathname === "/" ? "active" : ""}
                href="/"
              >
                Turnieje
              </SubA>
              <SubA
                className={router.pathname === "/zory/[index]" ? "active" : ""}
                href="/zory/index"
              >
                ŻORY
              </SubA>
              <SubA
                className={router.pathname === "/plf/[index]" ? "active" : ""}
                href="/plf/index"
              >
                PLF
              </SubA>
              <SubA
                className={router.pathname === "/chlf/[index]" ? "active" : ""}
                href="/chlf/index"
              >
                CHFL
              </SubA>
            </DropDownContent>
          </DropDownLi>
          <BorderRightWrapper />
          <StyledLi>
            <StyledA
              className={router.pathname === "/results" ? "active" : ""}
              href="/results"
            >
              Wyniki
            </StyledA>
          </StyledLi>
          <BorderRightWrapper />
          <StyledLi>
            <StyledA
              className={router.pathname === "/gallery" ? "active" : ""}
              href="/gallery"
            >
              Galeria
            </StyledA>
          </StyledLi>
        </StyledUl>
      </StyledWrapper>
    </>
  );
}

export default Navbar;
