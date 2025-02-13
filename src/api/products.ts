export interface Product {
  name: string;
  originalPrice?: number;
  discount?: string;
  discountedPrice?: number;
  price?: number;
  startingPrice?: number;
  installment?: string;
  pixPrice?: number;
  seller: string;
  imageUrl: string;
}

export const products: Product[] = [
  {
    name: "Garrafa de areia colorida",
    originalPrice: 32.90,
    discount: "10% OFF",
    discountedPrice: 29.61,
    installment: "3x R$ 6,33 sem juros no cartão",
    pixPrice: 18.50,
    seller: "Sr. Castanha",
    imageUrl: "../../public/assets/garrafa de areia.png"
  },
  {
    name: "Bolsas variadas de fibra de Açaí",
    startingPrice: 49.90,
    installment: "2x R$ 24,95 sem juros no cartão",
    pixPrice: 30.50,
    seller: "Dandara",
    imageUrl: "https://plus.unsplash.com/premium_photo-1675237625862-d982e7f44696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Galinha e pintinhos de barro feitas à mão",
    originalPrice: 32.90,
    discount: "10% OFF",
    discountedPrice: 14.90,
    pixPrice: 13.00,
    seller: "Patrícia Arte",
    imageUrl: "https://example.com/images/galinha-barro.jpg"
  },
  {
    name: "Panelas de barro de São Gonçalo do Amarante",
    price: 29.90,
    installment: "2x R$ 16,95 no cartão",
    pixPrice: 23.90,
    seller: "Sebastião Salg...",
    imageUrl: "https://example.com/images/panelas-barro.jpg"
  },
  {
    name: "Artesanato de bonecas negras",
    startingPrice: 9.90,
    installment: "2x R$ 7,45 no cartão",
    seller: "Manu Intimates",
    imageUrl: "https://example.com/images/bonecas-negras.jpg"
  }
];
