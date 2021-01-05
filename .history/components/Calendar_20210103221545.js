import styled from "styled-components";
import { ArrowLeftSquareFill } from "@styled-icons/bootstrap/ArrowLeftSquareFill";

const StyledWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #e6e6e6;
  width: 100vw;
  height: 540px;
  color: black;
  margin: 0;
`;

const CalendarHeader = styled.div`
  width: 60%;
  height: 60px;
  margin: 0 auto;
  background-color: red;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const NameHeader = styled.h1`
  margin: 0 auto;
  color: white;
  font-size: 35px;
`;

const CalendarItems = styled.div`
  width: 60%;
  height: 80%;
  background-color: #f0f0f0;
  margin: 0 auto;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Arrow = styled(ArrowLeftSquareFill)`
  font-size: 20px;
`;

const Calendar = () => (
  <StyledWrapper>
    <CalendarHeader>
      <NameHeader>Grudzień</NameHeader>
    </CalendarHeader>
    <CalendarItems>
      <ul>
        <li>
          <div>07</div>
          <div>Turniej Mistrzostw Polski</div>
          <Arrow />
        </li>
      </ul>
    </CalendarItems>
  </StyledWrapper>
);

export default Calendar;
