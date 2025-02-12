import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";
import { SliderContainer, CustomPrevButton, CustomNextButton } from "./styles";
import img1 from "../../assets/banner 1.png";
import img2 from "../../assets/banner 2.png";
import arrowL from "../../assets/Vector Arrow Left.svg";
import arrowR from "../../assets/Vector Arrow Right.svg";

import "swiper/css";
import "swiper/css/navigation";

export const Slider = () => {
  const swiperRef = useRef(null);

  return (
    <SliderContainer>
      <CustomPrevButton onClick={() => swiperRef.current?.slidePrev()}>
        <img src={arrowL} alt="" />
      </CustomPrevButton>

      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <img src={img1} alt="Banner 1" style={{ width: "100%", borderRadius: "8px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Banner 2" style={{ width: "100%", borderRadius: "8px" }} />
        </SwiperSlide>
      </Swiper>

      <CustomNextButton onClick={() => swiperRef.current?.slideNext()}>
        <img src={arrowR} alt="" />
      </CustomNextButton>
    </SliderContainer>
  );
};
