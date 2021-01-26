import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { DownArrow } from "@styled-icons/boxicons-solid/DownArrow";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #222;
  height: 75px;
  font-size: 16px;
  text-transform: uppercase;
`;
const InnerWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 60px;

  &.madness {
    position: absolute;
    top: 42px;
    right: 240px;
    margin-right: 0;
    padding: 0;
    width: 120px;
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #222;
    overflow: hidden;
    z-index: 999;
    opacity: 0;
  }
  &:hover {
    opacity: 1;
  }
`;

const StyledList = styled.li`
  margin-right: 10px;
  padding-right: 15px;
  margin-bottom: 5px;
  list-style: none;
  text-decoration: none;
  &.madness {
    list-style: none;
  }
  @media (max-width: 800px) {
    padding-right: 10px;
    margin-right: 5px;
  }
`;

const BorderRightWrapper = styled.div`
  border-right: 1px solid white;
  height: 20px;
  margin-right: 15px;
`;

const BorderBottomWrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  width: 100px;
  margin-right: 10px;
  margin-bottom: 5px;
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
  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

const Arrow = styled(DownArrow)`
  width: 10px;
  height: 10px;
  color: white;
  margin: 0 0 0 5px;
  padding: 0 0 1px 0;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 2px;
  left: 25px;
  width: 80px;
  height: 65px;
  background-image: url("images/logo.png");
  background-size: cover;
  @media (max-width: 800px) {
    top: 8px;
    width: 70px;
    height: 55px;
  }
`;

const Navbar = ({ menu }) => {
  const router = useRouter();

  return (
    <StyledWrapper>
      <LogoWrapper />
      <InnerWrapper>
        <StyledList>
          <LinkStyled
            href="/"
            className={router.pathname == "/" ? "active" : ""}
          >
            Home
          </LinkStyled>
        </StyledList>
        <BorderRightWrapper />
        <StyledList>
          <LinkStyled
            href="/news"
            className={router.pathname == "/news" ? "active" : ""}
          >
            Aktualności
          </LinkStyled>
        </StyledList>
        <BorderRightWrapper />
        <StyledList>
          <LinkStyled
            href="/madness"
            className={router.pathname == "/madness" ? "active" : ""}
          >
            Madness
          </LinkStyled>

          <Arrow />

          <InnerWrapper className="madness">
            <StyledList className="madness">
              <LinkStyled
                href="/"
                className={router.pathname == "/" ? "active" : ""}
              >
                Turnieje
              </LinkStyled>
            </StyledList>
            <BorderBottomWrapper />
            <StyledList className="madness">
              <LinkStyled
                href="/zory/index"
                className={router.pathname === "/zory/[index]" ? "active" : ""}
              >
                Żory
              </LinkStyled>
            </StyledList>
            <BorderBottomWrapper />
            <StyledList className="madness">
              <LinkStyled
                href="/plf/index"
                className={router.pathname == "/plf/[index]" ? "active" : ""}
              >
                PLF
              </LinkStyled>
            </StyledList>
            <BorderBottomWrapper />
            <StyledList className="madness">
              <LinkStyled
                href="/chlf/index"
                className={router.pathname == "/chlf/[index]" ? "active" : ""}
              >
                CHLF
              </LinkStyled>
            </StyledList>
          </InnerWrapper>
        </StyledList>
        <BorderRightWrapper />
        <StyledList>
          <LinkStyled
            href="/results"
            className={router.pathname == "/results" ? "active" : ""}
          >
            Wyniki
          </LinkStyled>
        </StyledList>
        <BorderRightWrapper />
        <StyledList>
          <LinkStyled
            href="/gallery"
            className={router.pathname == "/gallery" ? "active" : ""}
          >
            Galeria
          </LinkStyled>
        </StyledList>
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default Navbar;
