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
  display: block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const DropDownTeam = styled.div`
  margin-left: 10px;
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
const SubTeam = styled(StyledA)`
  display: none;
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

const BurgerMenu = () => (
  <Menu>
    <StyledUl>
      <StyledLi>
        <StyledA href="/">Home</StyledA>
      </StyledLi>

      <StyledLi>
        <StyledA href="/news">Aktualności</StyledA>
      </StyledLi>

      <DropDownLi>
        <StyledA>Madness</StyledA>

        <DropDownContent>
          <SubA href="/">Turnieje</SubA>
          <DropDownTeam>
            <SubA className="team">Żory</SubA>
            <DropDownContentTeam>
              <SubTeam href="/zory/index">Home Żory</SubTeam>
              <SubTeam href="/zory/news/newsZory">Aktualności</SubTeam>
              <SubTeam href="/zory/players/playersZory">Kadra</SubTeam>
              <SubTeam href="/zory/games/gamesZory">Rozgrywki</SubTeam>
            </DropDownContentTeam>
          </DropDownTeam>
          <DropDownTeam>
            <SubA className="team">PLF</SubA>
            <DropDownContentTeam>
              <SubTeam href="/plf/index">Home PLF</SubTeam>
              <SubTeam href="/plf/index">Aktualności</SubTeam>
              <SubTeam href="/plf/index">Kadra</SubTeam>
              <SubTeam href="/plf/index">Rozgrywki</SubTeam>
            </DropDownContentTeam>
          </DropDownTeam>
          <DropDownTeam>
            <SubA className="team">CHLF</SubA>
            <DropDownContentTeam>
              <SubTeam href="/chlf/index">Home CHLF</SubTeam>
              <SubTeam href="/chlf/news/newsChlf">Aktualności</SubTeam>
              <SubTeam href="/chlf/players/playersChlf">Kadra</SubTeam>
              <SubTeam href="/chlf/games/gamesChlf">Rozgrywki</SubTeam>
            </DropDownContentTeam>
          </DropDownTeam>
        </DropDownContent>
      </DropDownLi>

      <StyledLi>
        <StyledA href="/results">Wyniki</StyledA>
      </StyledLi>

      <StyledLi>
        <StyledA href="/galleries">Galeria</StyledA>
      </StyledLi>
    </StyledUl>
  </Menu>
);

export default BurgerMenu;
