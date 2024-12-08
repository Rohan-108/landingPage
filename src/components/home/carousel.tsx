import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./styles.css";
const data = [
  {
    id: 1,
    Image: "/1.png",
  },
  {
    id: 2,
    Image: "/2.png",
  },
  {
    id: 3,
    Image: "/3.png",
  },
  {
    id: 4,
    Image: "/4.png",
  },
  {
    id: 5,
    Image: "/5.png",
  },
  {
    id: 6,
    Image: "/6.png",
  },
  {
    id: 7,
    Image: "/7.png",
  },
];
const Carousel: React.FC = () => {
  return (
    <Swiper
      modules={[EffectCoverflow, Autoplay]}
      grabCursor={true}
      slidesPerView={1}
      initialSlide={Math.floor(data.length / 2)}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      centeredSlides={true}
      effect="coverflow"
      coverflowEffect={{
        slideShadows: false,
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 2.5,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <img
            src={item.Image}
            alt="app-image"
            className=" block object-contain w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
