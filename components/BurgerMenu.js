import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;

  align-items: center;
  padding: 0px;
  margin-right: 60px;
  margin-top: 20px;
  color: white;
  font-weight: bold;
`;

const StyledLi = styled.li`
  height: 100%;
  padding: 10px;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  min-width: 160px;
  margin-left: 90px;
  margin-top: -35px;
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
  font-size: 18px;
  color: white;
  cursor: pointer;
`;

const SubA = styled(StyledA)`
  text-decoration: none;
  display: block;
  text-align: left;
  background-color: rgba(50, 51, 50, 0.98);
  border: 1px solid #222;
  padding: 8px;
  margin-left: 5px;
  width: 150px;
`;

class BurgerMenu extends Component {
  handleClick = (action) => {
    if (!action) return;

    if (this.props.onClick) this.props.onClick(action);
  };
  render = () => {
    return (
      // Pass on our props
      <Menu>
        <StyledUl>
          <StyledLi>
            <StyledA href="/" onClick={() => this.handleClick("")}>
              Home
            </StyledA>
          </StyledLi>

          <StyledLi>
            <StyledA href="/news" onClick={() => this.handleClick()}>
              Aktualności
            </StyledA>
          </StyledLi>

          <DropDownLi>
            <StyledA onClick={() => this.handleClick("Madness")}>
              Madness
            </StyledA>

            <DropDownContent>
              {" "}
              <SubA href="/" onClick={() => this.handleClick()}>
                Turnieje
              </SubA>
              <SubA href="/zory/index" onClick={() => this.handleClick()}>
                Żory
              </SubA>
              <SubA href="/plf/index" onClick={() => this.handleClick()}>
                PLF
              </SubA>
              <SubA href="/chlf/index" onClick={() => this.handleClick()}>
                CHFL
              </SubA>
            </DropDownContent>
          </DropDownLi>

          <StyledLi>
            <StyledA href="/results" onClick={() => this.handleClick()}>
              Wyniki
            </StyledA>
          </StyledLi>

          <StyledLi>
            <StyledA href="/gallery" onClick={() => this.handleClick("News")}>
              Galeria
            </StyledA>
          </StyledLi>
        </StyledUl>
      </Menu>
    );
  };
}

export default BurgerMenu;
