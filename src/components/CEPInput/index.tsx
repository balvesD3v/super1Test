import imgArrow from "/assets/cart right arrow.svg"
import { InputWrapper } from "./styles";


interface CepInputProps {
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;
}

export const CepInput: React.FC<CepInputProps> = ({ onKeyDown, onButtonClick }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/\D/g, '');

    if (value.length > 5) {
      value = value.slice(0, 5) + '-' + value.slice(5, 8);
    }

    event.target.value = value.slice(0, 9);
  };

  return (
    <InputWrapper>
      <input
        type="text"
        placeholder="Digite seu CEP"
        onKeyDown={onKeyDown}
        onChange={handleInputChange}
        maxLength={9}
      />
      <button onClick={onButtonClick}>
        <img src={imgArrow} alt="" />
      </button>
    </InputWrapper>
  );
};

