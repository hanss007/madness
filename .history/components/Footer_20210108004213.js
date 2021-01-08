import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 300px;
  background-color: #7f7f7f;
  color: black;
  margin: 0;
`;

const Footer = () => (
  <StyledWrapper>
    <div>
      <h6>Prezes Stowarzyszenia Madness</h6>
      <p>Wojciech Chmielewski</p>
      <p>Kontakt : 667-334-677 email: chmielu@gmail.com</p>
    </div>
  </StyledWrapper>
);

export default Footer;
