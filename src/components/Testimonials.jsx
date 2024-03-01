import React from 'react'
import Slider from "react-slick"
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"

export default function Testimonials() {
    
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
          <button className="slick-arrow slick-prev" onClick={onClick}>
            <FiChevronLeft />
          </button>
        );
    };
      
    var settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        PrevArrow: <PrevArrow />
        
      };
  return (
    <div className='p-5'>
        <h2 className='my-3 text-3xl text-blue-400'>Testimonials</h2>
        <Slider {...settings} className='flex flex-wrap justify-center'>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-4">
            <div class="bg-white rounded-lg custom__shadow">
            <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="Testimonial 1" class="w-full h-48 object-cover rounded-t-lg" />
            <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">Rachael Kamara</h3>
                <p class="text-gray-700">"Ever since I started investing with Uthrume, I am now a proud owner of 3 houses."</p>
            </div>
            </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-4">
            <div class="bg-white rounded-lg custom__shadow">
            <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="Testimonial 1" class="w-full h-48 object-cover rounded-t-lg" />
            <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">Simeon Michael</h3>
                <p class="text-gray-700">"Uthrume has changed my perception about investing; Now I only need to stress about finding the money as they are doing the investment for me with ease."</p>
            </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-4">
            <div class="bg-white rounded-lg custom__shadow">
            <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="Testimonial 1" class="w-full h-48 object-cover rounded-t-lg" />
            <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">John Doe</h3>
                <p class="text-gray-700">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet posuere felis, sit amet varius quam."</p>
            </div>
            </div>
        </div>

        </Slider>
    </div>
  )
}
