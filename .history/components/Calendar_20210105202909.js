import React from "react";
import styled from "styled-components";
import CardEvents from "./CardEvents";

const events = [
  {
    title: "Grudzień",
    day: "05",
    content: "Mistrzostwa Polski Górników i Przyjaciół",
  },
  {
    title: "Grudzień",
    day: "05",
    content: "Mistrzostwa Polski Górników i Przyjaciół",
  },
];

const StyledWrapper = styled.div`
  padding: 10px;

  background-color: #e6e6e6;
  width: 100vw;
  height: 540px;
  color: black;
  margin: 0;
`;

const StyledAside = styled.div`
  background-color: grey;
`;

const Calendar = ({ title, day, content }) => (
  <StyledWrapper>
    {events.map((event) => (
      <CardEvents titel={event.title} day={event.day} content={event.content} />
    ))}
  </StyledWrapper>
);

export default Calendar;
