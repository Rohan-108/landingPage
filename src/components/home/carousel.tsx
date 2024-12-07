import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./styles.css";
const data = [
  {
    id: 1,
    Image:
      "https://firebasestorage.googleapis.com/v0/b/getplaywise.appspot.com/o/image%20edited%2FWhatsApp%20Image%202023-05-21%20at%206.39.26%20PM%20(1).jpeg?alt=media&token=c4ffedd2-d463-4c6c-bd2b-93199a66aebe",
  },
  {
    id: 2,
    Image:
      "https://firebasestorage.googleapis.com/v0/b/getplaywise.appspot.com/o/image%20edited%2FWhatsApp%20Image%202023-05-21%20at%206.39.25%20PM%20(1).jpeg?alt=media&token=89fa8ad4-6f92-4022-8801-79186e565a44",
  },
  {
    id: 3,
    Image:
      "https://firebasestorage.googleapis.com/v0/b/getplaywise.appspot.com/o/image%20edited%2FWhatsApp%20Image%202023-05-21%20at%206.39.25%20PM%20(2).jpeg?alt=media&token=b03cf97f-c982-4d42-ade2-fdddfcbb23c9",
  },
  {
    id: 4,
    Image:
      "https://firebasestorage.googleapis.com/v0/b/getplaywise.appspot.com/o/image%20edited%2FWhatsApp%20Image%202023-05-21%20at%206.39.25%20PM.jpeg?alt=media&token=ca67f3dd-8e8b-4f81-a9c6-629d863ecb1f",
  },
  {
    id: 5,
    Image:
      "https://firebasestorage.googleapis.com/v0/b/getplaywise.appspot.com/o/image%20edited%2FWhatsApp%20Image%202023-05-21%20at%206.39.24%20PM%20(1).jpeg?alt=media&token=bf2328ac-1af4-40d3-92d8-414d2e886a88",
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
            className=" block object-cover w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
