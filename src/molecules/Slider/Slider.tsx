import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { Recipe } from "../../utils/types/types";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./slider.css";

interface ISliderProps {
  data: Recipe[];
}

const Slider = ({ data }: ISliderProps) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      initialSlide={1}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      breakpoints={{
        550: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
