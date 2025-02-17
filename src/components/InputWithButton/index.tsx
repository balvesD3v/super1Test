import { ReactNode, ChangeEvent, useState } from "react";
import { Button, Input, Wrapper } from "./styles";

interface InputWithButtonProps {
  placeholder: string;
  icon: ReactNode;
  type?: "default" | "cep" | "email";
}

export const InputWithButton = ({ placeholder, icon, type = "default" }: InputWithButtonProps) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    if (type === "cep") {
      value = value.replace(/\D/g, "");
      if (value.length > 5) {
        value = `${value.slice(0, 5)}-${value.slice(5, 8)}`;
      }
    }

    if (type === "email") {
      setErrorMessage("");
      if (value && !value.includes("@gmail.com") && !value.includes("@hotmail.com")) {
        setErrorMessage("O e-mail deve conter @gmail.com ou @hotmail.com");
      }
    }

    setInputValue(value);
  };

  return (
    <>
      <Wrapper>
        <Input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          maxLength={type === "cep" ? 9 : undefined}
        />
        <Button>
          {type === "cep" ? "Buscar" : "Prosseguir"} {icon}
        </Button>
      </Wrapper>
      {type === "email" && errorMessage && <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{errorMessage}</p>}
    </>
  );
};
