import React from "react";
import styled, { css } from "styled-components";
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
    rgba(63, 175, 229, 0.7) 0%,
    rgba(34, 34, 34, 0.8) 49%,
    rgba(253, 88, 37, 0.9) 93%
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

function NavbarTeam({ name }) {
  const router = useRouter();
  return (
    <StyledWrapperTeam>
      <StyledUlTeam>
        <StyledLi>
          <StyledA
            className={router.pathname === "/zory/[index]" ? "active" : ""}
            href="/zory/index"
          >
            Home {name}
          </StyledA>
        </StyledLi>
        <BorderRightWrapper />
        <StyledLi>
          <StyledA
            className={
              router.pathname === "/zory/secondMenu/[newsZory]" ? "active" : ""
            }
            href="/zory/secondMenu/newsZory"
          >
            Atkualności
          </StyledA>
        </StyledLi>
        <BorderRightWrapper />
        <StyledLi>
          <StyledA
            className={router.pathname === "/zory/[players]" ? "active" : ""}
            href="/zory/players"
          >
            Kadra
          </StyledA>
        </StyledLi>
        <BorderRightWrapper />
        <StyledLi>
          <StyledA
            className={router.pathname === "/zory/[scheudle]" ? "active" : ""}
            href="/zory/scheudle"
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
