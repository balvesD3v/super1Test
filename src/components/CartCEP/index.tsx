import { useState } from "react";
import { Container, InputContainer } from "./styles";
import truckImg from "/assets/truck.svg";
import { CepInput } from "../CEPInput";

export const CartCEP = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [freightPrice, setFreightPrice] = useState<string | null>(null)
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  const handleShowInput = () => {
    setShowInput(true)
    setFadeOut(false);
  }

  const handleEnterCEP = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setFadeOut(true);

      setTimeout(() => {
        const randomPrice = (Math.random() * (50 - 10) + 10).toFixed(2);
        setFreightPrice(`R$ ${randomPrice}`);
        setShowInput(false);
      }, 300);
    }
  }

  return (
    <Container>
      <div className="iconAndPrice">
        <div
          className="iconAndFreightage"
          onClick={handleShowInput}
        >
          <img src={truckImg} alt="" />
          Calcule fretes e prazos
        </div>
        <div>{freightPrice || "---"}</div>
      </div>

      {showInput && (
        <InputContainer fadeOut={fadeOut}>
          <CepInput
            onKeyDown={handleEnterCEP}
            onButtonClick={() => {
              const fakeEvent = { key: "Enter" } as React.KeyboardEvent<HTMLInputElement>;
              handleEnterCEP(fakeEvent);
            }}
          />
        </InputContainer>
      )}
    </Container>
  );
};
