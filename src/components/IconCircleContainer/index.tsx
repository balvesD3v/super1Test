import { IconCircle } from "../IconCircle";
import { Container, SwiperContainer } from "./styles";

import book from "/assets/book.svg";
import heart from "/assets/heart.svg";
import shirt from "/assets/shirt.svg";
import bb from "/assets/bb.svg";
import couch from "/assets/couch.svg";
import dumbell from "/assets/dumbell.svg";
import microphone from "/assets/microphone.svg";
import keys from "/assets/keys.svg";
import glasses from "/assets/glasses.png";
import services from "/assets/services.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";

const iconsData = [
  { icon: book, description: "Arte, Papelaria e Armarinhos" },
  { icon: heart, description: "Saúde" },
  { icon: shirt, description: "Calçados, Roupas e Bolsas" },
  { icon: bb, description: "Bebês" },
  { icon: couch, description: "Casa, Móveis e Decoração" },
  { icon: dumbell, description: "Esportes e Fitness" },
  { icon: microphone, description: "Beleza e Cuidado Pessoal" },
  { icon: keys, description: "Imóveis" },
  { icon: glasses, description: "Óculos" },
  { icon: services, description: "Serviços" },
];

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
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={4.5}
        spaceBetween={10}
        loop={true}
        centeredSlides={false}
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
