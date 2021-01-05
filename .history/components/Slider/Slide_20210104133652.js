import React, { Component } from "react";

class Footer extends Component {
  render() {
    let settings = {
      draggable: false,
      slideToShow: 3,
      autoplay: false,
      dots: true,
      lazyLoad: "ondemand",
      arrows: true,
    };
    return (
      <ul>
        <Slider {...settings}>
          {dataslide.map((item, i) => {
            return (
              <li key={i}>
                // left side
                <div className="left">
                  <div className="item">{item.title}</div>
                </div>
                // right side
                <div className="right">
                  <div className="item">{item.title}</div>
                  <div className="item">{item.title}</div>
                </div>
              </li>
            );
          })}
        </Slider>
      </ul>
    );
  }
}
