import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { DownArrow } from "@styled-icons/boxicons-solid/DownArrow";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #222;
  height: 75px;
  font-size: 1rem;
  text-transform: uppercase;
`;
const InnerWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 60px;
`;

const StyledList = styled.li`
  margin-right: 10px;
  padding-right: 15px;
  border-right: 1px solid white;
  list-style: none;
  text-decoration: none;
  &:last-child {
    border-right: none;
  }
`;

const LinkStyled = styled.a`
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  color: white;
  cursor: pointer;
  &.active {
    background-color: #fd5825;
    padding: 2px;
    border-radius: 3px;
  }
`;

const Arrow = styled(DownArrow)`
  width: 10px;
  height: 10px;
  color: white;
  margin: 0 0 0 5px;
  padding: 0 0 1px 0;
`;

const Navbar = () => {
  const router = useRouter();
  return (
    <StyledWrapper>
      <InnerWrapper>
        <StyledList>
          <Link href="/">
            <StyledList className={router.pathname === "/news" ? "active" : ""}>
              Home
            </LinkStyled>
          </Link>
        </StyledList>
        <StyledList>
          <StyledList className={router.pathname === "/news" ? "active" : ""}>
            <LinkStyled href="/news">Aktualności</LinkStyled>
          </LinkStyled>
        </StyledList>
        <StyledList>
          <Link href="/sponsors">
            <LinkStyled activeclass="active">Madness</LinkStyled>
          </Link>
          <Arrow />
        </StyledList>

        <StyledList>
          <Link href="/calendar">
            <LinkStyled>Terminarz</LinkStyled>
          </Link>
        </StyledList>
        <StyledList>
          <Link href="/results">
            <LinkStyled>Wyniki</LinkStyled>
          </Link>
        </StyledList>
        <StyledList>
          <Link href="/galery">
            <LinkStyled>Galeria</LinkStyled>
          </Link>
        </StyledList>
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default Navbar;
