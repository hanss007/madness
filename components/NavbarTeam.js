import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const StyledWrapperTeam = styled.div`
  position: absolute;
  height: 40px;
  width: 100%;
  top: 7.5%;

  font-size: 16px;
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    rgba(13, 20, 44, 0.9) 34%,
    rgba(239, 39, 61, 0.9) 99%
  );

  display: block;
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
  margin-top: 5px;
`;

const BorderRightWrapper = styled.div`
  border-right: 1px solid white;
  height: 20px;
  margin-right: 5px;
  margin-top: 8px;
`;

const StyledA = styled.a`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  color: white;
  cursor: pointer;
  &.active {
    background-color: rgba(63, 175, 229, 0.7);
    padding: 2px;
    border-radius: 3px;
  }
`;

const StyledUlTeam = styled(StyledUl)`
  margin-top: -4px;
  margin-right: 140px;
`;

function NavbarTeam({ name, link }) {
  const router = useRouter();
  return (
    <StyledWrapperTeam>
      <StyledUlTeam>
        <StyledLi>
          <Link href="/zory/index">
            <StyledA
              className={router.pathname === "/zory/[index]" ? "active" : ""}
            >
              Home {name}
            </StyledA>
          </Link>
        </StyledLi>
        <BorderRightWrapper />
        <StyledLi>
          <Link href="/zory/news/newsZory">
            <StyledA
              className={
                router.pathname === "/zory/news/[newsZory]" ? "active" : ""
              }
            >
              Atkualności
            </StyledA>
          </Link>
        </StyledLi>
        <BorderRightWrapper />
        <StyledLi>
          <Link href="/zory/players/playersZory">
            <StyledA
              className={
                router.pathname === "/zory/players/[playersZory]"
                  ? "active"
                  : ""
              }
            >
              Kadra
            </StyledA>
          </Link>
        </StyledLi>
        <BorderRightWrapper />
        <StyledLi>
          <StyledA
            className={
              router.pathname === "/zory/games/[gamesZory]" ? "active" : ""
            }
            href="/zory/games/gamesZory"
          >
            Rozgrywki
          </StyledA>
        </StyledLi>
        <BorderRightWrapper />
      </StyledUlTeam>
    </StyledWrapperTeam>
  );
}

export default NavbarTeam;
