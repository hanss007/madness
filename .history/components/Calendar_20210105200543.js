import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: #e6e6e6;
  width: 100vw;
  height: 540px;
  color: black;
  margin: 0;
`;

const StyledCalender = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CalendarHeader = styled.div`
  width: 70%;
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

const StyledAside = styled.div`
  background-color: grey;
`;

const Calendar = () => (
  <StyledWrapper>
    <StyledCalender>
      <CalendarHeader>
        <NameHeader>Grudzień</NameHeader>
      </CalendarHeader>
      <CalendarItems>
        <ul>
          <li>
            <div>07</div>
            <div>Turniej Mistrzostw Polski</div>
          </li>
        </ul>
      </CalendarItems>
    </StyledCalender>
    <StyledAside />
  </StyledWrapper>
);

export default Calendar;
