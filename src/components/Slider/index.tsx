import 'swiper/swiper-bundle.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef, useState, useEffect } from "react";
import { SliderContainer, CustomPrevButton, CustomNextButton } from "./styles";
import { Swiper as SwiperCore } from "swiper";

import img1 from "/assets/banner 1.png";
import img2 from "/assets/banner 2.png";
import mobileBanner from "/assets/mobileBanner.webp";
import mobileBanner2 from "/assets/mobileBanner (2).webp";
import arrowL from "/assets/Vector Arrow Left.svg";
import arrowR from "/assets/Vector Arrow Right.svg";

export const Slider: React.FC = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
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
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {isMobile ? (
          <>
            <SwiperSlide>
              <img src={mobileBanner} alt="Banner Mobile 1" style={{ width: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={mobileBanner2} alt="Banner Mobile 2" style={{ width: "100%" }} />
            </SwiperSlide>
          </>
        ) : (
          <>
            <SwiperSlide>
              <img src={img1} alt="Banner 1" style={{ width: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Banner 2" style={{ width: "100%" }} />
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
