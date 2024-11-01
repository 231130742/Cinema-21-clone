import React from 'react';
import Slick from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slider({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <Slick {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt={slide.title} />
        </div>
      ))}
    </Slick>
  );
}

export default Slider;