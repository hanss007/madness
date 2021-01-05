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

const SampleNextArrow = styled.p`
  &::before {
    border-radius: 50px;
    background-color: #000;
  }
`;
const SamplePrevArrow = styled.p`
  &::before {
    border-radius: 50px;
    background-color: #000;
  }
`;

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <StyledWrapper>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <InnerWrapper>1</InnerWrapper>
          </div>
        </Slider>
      </StyledWrapper>
    );
  }
}
