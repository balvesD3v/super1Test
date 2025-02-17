import React from "react";
import { Button } from "./styles";

interface MinusButtonProps {
  onClick: () => void;
  type: string
}


export const CartButton: React.FC<MinusButtonProps> = ({ onClick, type }) => {
  return <Button onClick={onClick}>{type}</Button>;
};

