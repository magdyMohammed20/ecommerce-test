import React from "react";
import Slider, { Settings } from "react-slick";
import SliderItem from "./SliderItem";

const ContentSlider: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <SliderItem />
        </div>
        <div>
          <SliderItem />
        </div>
        <div>
          <SliderItem />
        </div>
      </Slider>
    </div>
  );
};

export default ContentSlider;
