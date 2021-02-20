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
  margin-top: -25px;
  z-index: 1;
`;
const DropDownContentTeam = styled.div`
  display: none;
  min-width: 160px;
  margin-top: 5px;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const DropDownLiTeam = styled(StyledLi)`
  display: block;
  &:hover ${DropDownContentTeam} {
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
  border-bottom: 1px solid #222;
  margin-left: 15px;
  padding: 2px;
  width: 100px;
  &.team {
    margin-left: 5px;
  }
`;
const SubTeam = styled(StyledA)`
  text-decoration: none;
  display: block;
  text-align: left;
  background-color: rgba(50, 51, 50, 0.98);
  font-size: 16px;
  padding: 8px;
  border: 1px solid #222;
  margin-left: 5px;
  width: 150px;
  background: linear-gradient(
    90deg,
    rgba(13, 20, 44, 1) 30%,
    rgba(239, 39, 61, 1) 99%
  );
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
              <DropDownLiTeam>
                <SubA className="team" onClick={() => this.handleClick("Żory")}>
                  Żory
                </SubA>
                <DropDownContentTeam>
                  <SubTeam
                    href="/zory/index"
                    onClick={() => this.handleClick()}
                  >
                    Home Żory
                  </SubTeam>
                  <SubTeam
                    href="/zory/news/newsZory"
                    onClick={() => this.handleClick()}
                  >
                    Aktualności
                  </SubTeam>
                  <SubTeam
                    href="/zory/players/playersZory"
                    onClick={() => this.handleClick()}
                  >
                    Kadra
                  </SubTeam>
                  <SubTeam
                    href="/zory/games/gamesZory"
                    onClick={() => this.handleClick()}
                  >
                    Rozgrywki
                  </SubTeam>
                </DropDownContentTeam>
              </DropDownLiTeam>
              <DropDownLiTeam>
                <SubA className="team" onClick={() => this.handleClick("PLF")}>
                  PLF
                </SubA>
                <DropDownContentTeam>
                  <SubTeam href="/plf/index" onClick={() => this.handleClick()}>
                    Home PLF
                  </SubTeam>
                  <SubTeam href="/plf/index" onClick={() => this.handleClick()}>
                    Aktualności
                  </SubTeam>
                  <SubTeam href="/plf/index" onClick={() => this.handleClick()}>
                    Kadra
                  </SubTeam>
                  <SubTeam href="/plf/index" onClick={() => this.handleClick()}>
                    Rozgrywki
                  </SubTeam>
                </DropDownContentTeam>
              </DropDownLiTeam>
              <DropDownLiTeam>
                <SubA className="team" onClick={() => this.handleClick("CHLF")}>
                  CHLF
                </SubA>
                <DropDownContentTeam>
                  <SubTeam
                    href="/chlf/index"
                    onClick={() => this.handleClick()}
                  >
                    Home Żory
                  </SubTeam>
                  <SubTeam href="#" onClick={() => this.handleClick()}>
                    Aktualności
                  </SubTeam>
                  <SubTeam href="#" onClick={() => this.handleClick()}>
                    Kadra
                  </SubTeam>
                  <SubTeam href="#" onClick={() => this.handleClick()}>
                    Rozgrywki
                  </SubTeam>
                </DropDownContentTeam>
              </DropDownLiTeam>
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
