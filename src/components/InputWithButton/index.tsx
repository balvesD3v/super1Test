import { Button, Input, Wrapper } from "./styles";

export const InputWithButton = () => {
  return (
    <Wrapper>
      <Input type="text" placeholder="Digite seu e-mail ou telefone" />
      <Button>Prosseguir</Button>
    </Wrapper>
  );
};
