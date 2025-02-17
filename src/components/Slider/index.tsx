import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef, useState, useEffect } from "react";
import { SliderContainer, CustomPrevButton, CustomNextButton } from "./styles";

import img1 from "/assets/banner 1.png";
import img2 from "/assets/banner 2.png";
import mobimg1 from "/assets/mobileBanner.webp";
import mobimg2 from "/assets/mobileBanner (2).webp";
import arrowL from "/assets/Vector Arrow Left.svg";
import arrowR from "/assets/Vector Arrow Right.svg";
import { Swiper as SwiperType } from "swiper";

export const Slider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SliderContainer>
      <CustomPrevButton onClick={() => swiperRef.current?.slidePrev()}>
        <img src={arrowL} alt="Anterior" />
      </CustomPrevButton>

      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        style={{ height: "100%" }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {isMobile ? (
          <>
            <SwiperSlide>
              <img src={mobimg1} alt="Banner Mobile 1" className="slide-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mobimg2} alt="Banner Mobile 2" className="slide-img" />
            </SwiperSlide>
          </>
        ) : (
          <>
            <SwiperSlide>
              <img src={img1} alt="Banner 1" className="slide-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Banner 2" className="slide-img" />
            </SwiperSlide>
          </>
        )}
      </Swiper>

      <CustomNextButton onClick={() => swiperRef.current?.slideNext()}>
        <img src={arrowR} alt="Próximo" />
      </CustomNextButton>
    </SliderContainer>
  );
};
