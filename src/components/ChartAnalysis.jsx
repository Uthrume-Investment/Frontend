import React from 'react'
import Slider from "react-slick";
import {Line} from "react-chartjs-2"

export default function ChartAnalysis() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true
        
      };
    
      const data = {
        labels: ['January','February','March','April','May','June','July'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };
  return (
  <Slider {...settings}>
    <div>
        Chart 1
    </div>
    <div>
        chart 2
    </div>
    <div>
        chart 3
    </div>
  </Slider>
  )
}
