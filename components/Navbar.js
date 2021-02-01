import React, { Component } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

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

const SubA = styled(StyledA)`
  text-decoration: none;
  display: block;
  text-align: left;
  background-color: #222;
  padding: 10px;
`;

const LogoWrapper = styled.img`
  position: absolute;

  top: 2px;
  left: 25px;
  width: 80px;
  height: 65px;

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

class Navbar extends Component {
  handleClick = (action) => {
    if (!action) return;

    if (this.props.onClick) this.props.onClick(action);
  };

  render = () => {
    return (
      <StyledWrapper>
        <LogoWrapper src="/images/logo.png" />

        <StyledUl>
          <StyledLi>
            <StyledA href="/" onClick={() => this.handleClick("")}>
              Home
            </StyledA>
          </StyledLi>
          <BorderRightWrapper />
          <StyledLi>
            <StyledA href="/news" onClick={() => this.handleClick()}>
              Aktualności
            </StyledA>
          </StyledLi>
          <BorderRightWrapper />
          <DropDownLi>
            <StyledA onClick={() => this.handleClick("Madness")}>
              Madness
            </StyledA>

            <DropDownContent>
              {" "}
              <SubA href="/" onClick={() => this.handleClick("Link1")}>
                Turnieje
              </SubA>
              <SubA
                href="/zory/index"
                onClick={() => this.handleClick("Link2")}
              >
                Żory
              </SubA>
              <SubA href="/plf/index" onClick={() => this.handleClick("Link3")}>
                PLF
              </SubA>
              <SubA
                href="/chlf/index"
                onClick={() => this.handleClick("Link4")}
              >
                CHFL
              </SubA>
            </DropDownContent>
          </DropDownLi>
          <BorderRightWrapper />
          <StyledLi>
            <StyledA href="/results" onClick={() => this.handleClick("News")}>
              Wyniki
            </StyledA>
          </StyledLi>
          <BorderRightWrapper />
          <StyledLi>
            <StyledA href="/gallery" onClick={() => this.handleClick("News")}>
              Galeria
            </StyledA>
          </StyledLi>
        </StyledUl>
      </StyledWrapper>
    );
  };
}

export default Navbar;

// jak użyć useRouter() zeby nadać w classie activeColor
