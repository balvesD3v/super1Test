import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 48px 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  outline: none;

  &::placeholder {
    color: #b0b0b0;
  }
`

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #b0b0b0;
  font-size: 20px;
  cursor: pointer;
`