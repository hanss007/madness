import React, { Component } from "react";
import Slider from "react-slick";
import styled, { css } from "styled-components";
import Card from "./Card";
import News from "./News";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Arrow } from "@styled-icons/boxicons-regular/LeftArrow";

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
  background-color: black;

  &:hover {
    background-color: black;
  }
`;
const SamplePrevArrow = styled(Zap)`
  background-color: black;

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
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </StyledWrapper>
    );
  }
}
