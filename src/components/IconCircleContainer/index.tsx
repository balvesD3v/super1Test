import "swiper/css";

import { IconCircle } from "../IconCircle";
import { Container, SwiperContainer } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { iconsData } from "../../api/iconsData";

export const IconCircleContainer = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <SwiperContainer>
      <Swiper
        slidesPerView={4.5}
      >
        {iconsData.map((item, index) => (
          <SwiperSlide key={index}>
            <IconCircle icon={item.icon} description={item.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  ) : (
    <Container>
      {iconsData.map((item, index) => (
        <IconCircle key={index} icon={item.icon} description={item.description} />
      ))}
    </Container>
  );
};
