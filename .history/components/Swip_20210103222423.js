import React, { Component } from "react";
import Slider from "react-slick";
import styled, { css } from "styled-components";
import Card from "./Card";
import News from "./News";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledWrapper = styled.div`
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 400px;
`;
const InnerWrapper = styled.h3`
  background: #5f9ea0;
  color: #fff;
  font-size: 36px;
  line-height: 100px;
  margin: 10px;
  padding: 2%;
  position: relative;
  text-align: center;
`;

const SampleNextArrow = styled.div`
  display: block;
  background-color: black;

  &:hover {
    background-color: black;
  }
`;
const SamplePrevArrow = styled.div`
  display: block;
  background-color: white;

  &:hover {
    background-color: black;
  }
`;

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <StyledWrapper>
        <Slider {...settings}>
          <Card></Card>
          <Card></Card>
        </Slider>
      </StyledWrapper>
    );
  }
}
