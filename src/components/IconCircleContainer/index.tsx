import { IconCircle } from "../IconCircle";
import { Container } from "./styles";

import book from "../../../public/assets/book.svg";
import heart from "../../../public/assets/heart.svg";
import shirt from "../../../public/assets/shirt.svg";
import bb from "../../../public/assets/bb.svg";
import couch from "../../../public/assets/couch.svg";
import dumbell from "../../../public/assets/dumbell.svg";
import microphone from "../../../public/assets/microphone.svg";
import keys from "../../../public/assets/keys.svg";
import glasses from "../../../public/assets/glasses.png";
import services from "../../../public/assets/services.svg";

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
  return (
    <Container className="container">
      {iconsData.map((item, index) => (
        <IconCircle
          key={index}
          icon={item.icon}
          description={item.description}
        />
      ))}
    </Container>
  );
};
