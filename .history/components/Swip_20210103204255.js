import React, { Component } from "react";
import Slider from "@bit/akiran.react-slick.slider";
import styled from "styled-components";

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
// .slick-next:before, .slick-prev:before {
//     color: #000;
// }
// `

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <StyledWrapper>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <InnerWrapper>1</InnerWrapper>
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
