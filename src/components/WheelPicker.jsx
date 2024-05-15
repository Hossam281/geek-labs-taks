import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow , Mousewheel } from 'swiper/modules';

const WheelPicker = ({ slides }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Swiper
          className="h-16"
          effect='coverflow'
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          direction="vertical"
          slidesPerView={2}
          spaceBetween={10}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          mousewheel={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[EffectCoverflow , Mousewheel]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className={`swiper-slide font-normal text-xs flex items-center justify-center rounded-md p-1 ${activeIndex === index ? 'bg-blue-500' : ''}`}>
              {slide}
            </SwiperSlide>
          ))}
        </Swiper>
      );
}

export default WheelPicker;
