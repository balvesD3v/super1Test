import { ReactNode } from "react";
import { ButtonContainer, ButtonText, IconWrapper } from "./styles"

interface ButtonCircleProps {
  icon: ReactNode;
  title?: string;
  subtitle?: string;
  onClick?: () => void;
}

export const ButtonCircle = ({
  icon,
  title,
  subtitle,
  onClick
}: ButtonCircleProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      <IconWrapper>{icon}</IconWrapper>
      <ButtonText>
        <strong>{title}</strong>
        {subtitle && <span>{subtitle}</span>}
      </ButtonText>
    </ButtonContainer>
  )
}
