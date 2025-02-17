export interface CartProduct {
  id: number;
  name: string;
  originalPrice?: number;
  discountedPrice?: number;
  price?: number;
  discount?: string;
  pixPrice?: number;
  availability?: string;
  detail?: string;
  seller: string;
  imageUrl: string;
}

export const cartProducts: CartProduct[] = [
  {
    id: 1,
    name: "Bolsa Feminina Sacola Grande Matelassê Preto de Telinha",
    originalPrice: 208.00,
    discountedPrice: 195.95,
    detail: "G, Azul",
    seller: "Loja Online",
    imageUrl: "/assets/bolsa.svg"
  },
  {
    id: 2,
    name: "Brinquedo de Atividades Bebê Box",
    price: 99.90,
    availability: "Disponível em 10 dias",
    seller: "Loja Online",
    imageUrl: "/assets/brinquedo.png"
  },
  {
    id: 3,
    name: "Lençol Elástico Avulso 300 Fios Casa Rio Bege Claro",
    price: 35.99,
    detail: "Queen, Bege",
    seller: "Loja Online",
    imageUrl: "/assets/lencol.png"
  },
  {
    id: 4,
    name: "Mouse Logitech USB Bluetooth sem fio adaptador",
    price: 99.90,
    seller: "Loja Online",
    imageUrl: "/assets/mouse.png"
  },
  {
    id: 5,
    name: "Voucher Univacinas Hepatite A",
    price: 99.79,
    seller: "Univacinas",
    imageUrl: "/assets/voucher.png"
  }
];
