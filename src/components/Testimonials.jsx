import React from 'react'
import Slider from "react-slick"

export default function Testimonials() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true
        
      };
  return (
    <Slider {...settings}>
        <div>
            Testimonial 1
        </div>
        <div>
            Testimonial 2
        </div>
        <div>
            Testimonial 3
        </div>
    </Slider>
  )
}
