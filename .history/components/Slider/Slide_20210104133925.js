import React, { Component } from "react";

const sliders = [
  {
    title: "Mistrzostwa Polski Górników i Przyjaciół",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    imageNews:
      "https://cdn.pixabay.com/photo/2016/12/25/15/40/ball-1930189_1280.jpg",
    created: "1 day",
  },
  {
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    imageNews:
      "https://cdn.pixabay.com/photo/2016/11/29/02/05/audience-1866738_1280.jpg",
    created: "3 day",
  },
  {
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    imageNews:
      "https://cdn.pixabay.com/photo/2020/01/12/14/02/indoor-soccer-4760027_1280.jpg",
    created: "5 day",
  },
];

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
          {sliders.map((item, i) => {
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
