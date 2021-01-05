import React, { Component } from "react";
import Slider from "react-slick";
import styled, { css } from "styled-components";
import Card from "./Card";
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
&:before {
  color: #000;
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <StyledWrapper>
        <Slider {...settings}>
          <div>
            <InnerWrapper>1</InnerWrapper>
          </div>
          <div>
            <InnerWrapper>2</InnerWrapper>
          </div>
          <div>
            <InnerWrapper>3</InnerWrapper>
          </div>
          <div>
            <InnerWrapper>4</InnerWrapper>
          </div>
          <div>
            <InnerWrapper>5</InnerWrapper>
          </div>
          <div>
            <InnerWrapper>6</InnerWrapper>
          </div>
          <div>
            <InnerWrapper>7</InnerWrapper>
          </div>
          <div>
            <InnerWrapper>8</InnerWrapper>
          </div>
          <div>
            <InnerWrapper>9</InnerWrapper>
          </div>
        </Slider>
      </StyledWrapper>
    );
  }
}
