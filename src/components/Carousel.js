import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import viji from '../assests/viji3.jpg'
import shaji from '../assests/shaji2.jpg'
import subi from '../assests/subi.jpg'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,  // Show 3 images at a time
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1, // Show 1 image at a time on smaller screens
        },
      },
    ],
  };

  const slides = [
    {
      imageUrl: `${viji}`,
      title: 'Slide 1',
      content: 'Sruthi & Vijin',
    },
    {
      imageUrl: `${shaji}`,
      title: 'Slide 2',
      content: 'Revathi & shaji',
    },
    {
      imageUrl: `${subi}`,
      title: 'Slide 2',
      content: 'Sajina & Subeesh',
    },
    

    // Add more slides as needed
  ];

  return (
    <div className="mx-auto max-w-screen-lg mt-8">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative custom-slide ">
            <img
              src={slide.imageUrl}
              alt={`Slide ${index + 1}`}
              className="w-full h-96 object-cover rounded-2xl  "
            />
            <div className="absolute bottom-0 left-0 text-center text-white p-4 w-full title rounded-b-lg  ">
              {/* <h1 className="text-2xl font-semibold">{slide.title}</h1> */}
              <p className="text-sm md:text-base lg:text-lg " style={{ textShadow: '0 3px 9px rgba(0, 0, 0, 5)' }}>{slide.content}</p>
            </div>
          </div>

        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
