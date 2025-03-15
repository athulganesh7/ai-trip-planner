import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

import img from './utilities/img.jpg'
import img1 from './utilities/img1.jpg'
import img2 from './utilities/img2.jpg'
import img3 from './utilities/img3.jpg'
import img4 from './utilities/img4.jpg'
import img5 from './utilities/img5.jpg'

const images = [
  img, img1 ,img2 ,img3 , img4, img5
];


function Corousel() {
  return (
    <div className='mt-10 p-10'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="w-[1200px] h-auto"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default Corousel